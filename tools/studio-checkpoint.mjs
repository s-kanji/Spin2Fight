import { spawn } from 'node:child_process';
import { createInterface } from 'node:readline';
import { mkdir, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const expectedPlaceId = 133194819129629;
const launcher = path.join(process.env.LOCALAPPDATA ?? '', 'Roblox', 'mcp.bat');
await access(launcher);
const child = spawn('cmd.exe', ['/d', '/c', launcher], { windowsHide: true, stdio: ['pipe', 'pipe', 'pipe'] });
const pending = new Map();
let nextId = 0;
let errors = '';
child.stderr.on('data', chunk => { errors = (errors + chunk).slice(-4000); });
const lines = createInterface({ input: child.stdout });
lines.on('line', line => {
  let message;
  try { message = JSON.parse(line); } catch { return; }
  const entry = pending.get(message.id);
  if (!entry) return;
  pending.delete(message.id);
  clearTimeout(entry.timer);
  if (message.error) entry.reject(new Error(JSON.stringify(message.error)));
  else entry.resolve(message.result);
});
function failPending(error) {
  for (const entry of pending.values()) { clearTimeout(entry.timer); entry.reject(error); }
  pending.clear();
}
child.on('error', failPending);
child.on('exit', code => failPending(new Error(`Studio MCP exited (${code}). ${errors}`)));
function request(method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = ++nextId;
    const timer = setTimeout(() => { pending.delete(id); reject(new Error(`MCP request timed out: ${method}. Enable Studio MCP and open the correct game. ${errors}`)); }, 20000);
    pending.set(id, { resolve, reject, timer });
    child.stdin.write(JSON.stringify({ jsonrpc: '2.0', id, method, params }) + '\n');
  });
}
async function call(name, args = {}) {
  const result = await request('tools/call', { name, arguments: args });
  if (result.isError) throw new Error(JSON.stringify(result.content));
  return result;
}
function text(result) {
  return (result.content ?? []).filter(block => block.type === 'text').map(block => block.text).join('\n');
}

try {
  await request('initialize', { protocolVersion: '2024-11-05', capabilities: {}, clientInfo: { name: 'Spin2Fight-checkpoint', version: '1.0.0' } });
  child.stdin.write(JSON.stringify({ jsonrpc: '2.0', method: 'notifications/initialized' }) + '\n');
  const tools = await request('tools/list');
  if (!tools.tools?.some(tool => tool.name === 'list_roblox_studios')) throw new Error('No Studio tools available. Enable Studio as MCP server in Assistant settings.');
  const studios = JSON.parse(text(await call('list_roblox_studios'))).studios;
  const matches = studios.filter(studio => studio.name.includes(`placeId: ${expectedPlaceId}`));
  if (matches.length !== 1) throw new Error(`Expected one open Spin2Fight place (${expectedPlaceId}); found ${matches.length}. Available: ${JSON.stringify(studios)}`);
  const studio = matches[0];
  const state = text(await call('get_studio_state', { studio_id: studio.id }));
  if (!state.includes('Current Studio Mode: Edit')) throw new Error(`Stop playtesting before a checkpoint. ${state}`);
  const code = `local items = {}
for _, name in ipairs({"Workspace", "Players", "Lighting", "MaterialService", "ReplicatedFirst", "ReplicatedStorage", "ServerScriptService", "ServerStorage", "StarterGui", "StarterPack", "StarterPlayer", "Teams", "SoundService", "TextChatService", "LocalizationService", "Chat"}) do
  local service = game:FindFirstChild(name)
  if service then
    table.insert(items, service)
    if name ~= "Players" then
      for _, item in ipairs(service:GetDescendants()) do table.insert(items, item) end
    end
  end
end
local result = {placeId=game.PlaceId, universeId=game.GameId, hierarchy={}, scripts={}, unreadableScripts={}}
for i, item in ipairs(items) do
  table.insert(result.hierarchy, {path=item:GetFullName(), className=item.ClassName})
  if item:IsA("LuaSourceContainer") then
    local ok, source = pcall(function() return item.Source end)
    if ok then
      table.insert(result.scripts, {path=item:GetFullName(), className=item.ClassName, source=source})
    else
      table.insert(result.unreadableScripts, item:GetFullName())
    end
  end
  if i % 500 == 0 then task.wait() end
end
table.sort(result.hierarchy, function(a,b) return a.path < b.path end)
table.sort(result.scripts, function(a,b) return a.path < b.path end)
return game:GetService("HttpService"):JSONEncode(result)`;
  const output = text(await call('execute_luau', { studio_id: studio.id, datamodel_type: 'Edit', code }));
  // The official tool can wrap the returned JSON in a result field or text label.
  let checkpoint;
  for (let start = output.indexOf('{'); start >= 0; start = output.indexOf('{', start + 1)) {
    const end = output.lastIndexOf('}');
    try {
      const value = JSON.parse(output.slice(start, end + 1));
      if (value.placeId === expectedPlaceId && Array.isArray(value.scripts)) { checkpoint = value; break; }
    } catch { /* Try the next object boundary. */ }
  }
  if (!checkpoint) throw new Error(`Unrecognized Studio response; no checkpoint was written: ${output.slice(0,800)}`);
  if (checkpoint.unreadableScripts.length) throw new Error(`Some scripts could not be captured: ${checkpoint.unreadableScripts.join(', ')}. No checkpoint written.`);
  checkpoint.scope = 'Hierarchy and script sources in the listed game services only; excludes internal Studio services and current Players descendants. Not a full-place backup or automatic restore.';
  await mkdir(path.join(root, 'snapshots'), { recursive: true });
  await writeFile(path.join(root, 'snapshots', 'studio-context.json'), JSON.stringify(checkpoint, null, 2) + '\n');
  console.log(`Captured ${checkpoint.hierarchy.length} instances and ${checkpoint.scripts.length} scripts from ${studio.name}.`);
  console.log('Review snapshots/studio-context.json before committing. This command does not commit, push, publish, or modify game objects.');
} finally {
  lines.close();
  child.stdin.end();
  child.kill();
}
