# RobloxStudioSetupPrompt

Updated October 21, 2026. Give this entire prompt to Cursor. It describes our agreed workflow and the setup already completed; verify current live state before making changes.

```text
You are helping me in Cursor. My collaborator uses Codex. Help us build Spin2Fight simultaneously in the same Roblox Team Create game using our own AI assistants, Roblox's official built-in Studio MCP server, optional Script Sync, and GitHub.

Repository: https://github.com/s-kanji/Spin2Fight
Shared place: Spin to fight, place ID 133194819129629
Universe ID: 10772315378

Start with this short explanation, then proceed with useful checks:
"You use Cursor and your teammate uses Codex. Both AIs can change the same live Studio game through MCP. We work on different agreed features, test together, then save deliberate milestones to GitHub. GitHub is not automatically controlling or rebuilding the entire game."

The exact work pathways:
1. Me -> Cursor -> my local Studio MCP connection -> shared Team Create game.
2. My teammate -> Codex -> their local Studio MCP connection -> that same shared game.
3. A local script edit -> configured Script Sync -> Studio. Studio script edits can sync back to that local file.
4. Local repository files -> commit + push -> GitHub. GitHub -> pull -> local files.
5. A pull alone does not apply arbitrary files or snapshots to Studio. Only an existing Script Sync mapping or a deliberate, reviewed MCP/import action applies file changes. Changes already applied through MCP are already in the shared game; do not apply an older repository copy over them again.

Example: if I ask you to build a shop through MCP, its objects and scripts appear in shared Studio directly. If I only ask you to write Shop.lua and push it, it will not appear in Studio unless we map that file with Script Sync or deliberately create/update its corresponding Studio script. Never claim a feature is in the game just because its file is on GitHub.

What has already been completed:
- The private GitHub repo is connected to the Codex collaborator's local folder C:\Roblox-Ai. My Cursor clone can have a different local folder name.
- Codex's official Studio MCP registration was saved. A local MCP connection successfully read this place's Workspace, ServerScriptService, ReplicatedStorage, StarterGui, Lighting, and StarterPlayer.
- A temporary folder was created, read, and removed through MCP to verify live editing; no test object was left behind.
- The owner-side script mapping is ServerScriptService > Server <-> src/server/Server. Other script roots and feature-level sync splits have not been verified.
- tools/studio-checkpoint.mjs was run successfully and snapshots/studio-context.json was committed. The checkpoint is hierarchy and script-source context, not a complete property export or a restorable full-game backup.
- places/Spin2Fight.rbxlx.rbxl is the preserved original binary place snapshot. It is not continuously updated.
- Rojo conversion was attempted and failed. No Rojo project is active, and Rojo is not needed for our current live MCP workflow.
- My Cursor MCP setup was reported enabled, but you must verify your own access and cross-computer visibility. Do not repeat installation if it is already configured and working.
- No feature assignments are implied by these instructions; Combat and Rewards are examples.

Cursor connection on Windows:
Prefer inspecting the existing Roblox_Studio MCP entry or Studio's Quick connect for Cursor. The following is the configuration supplied by our team; merge it into the client's existing MCP settings if needed, preserving other entries:
{
  "mcpServers": {
    "Roblox_Studio": {
      "command": "cmd.exe",
      "args": ["/c", "cd /d %LOCALAPPDATA%\\Roblox && .\\mcp.bat"]
    }
  }
}
The launcher must exist on my own computer. This connects to my local Studio, not remotely to my teammate's machine. Use Cursor's own MCP controls; tools/Connect-Studio.ps1 configures Codex and is not the Cursor installer. Reload the connection/client only if required, then list Studio instances and verify the exact place ID before writes.

Before setup, explain this to me in plain language:
- Team Create is the shared live game. Each person connects their own AI to their own Studio through MCP so it can work on scripts, maps, UI, lighting, and supported game objects.
- We agree on different feature/object scopes first. For example my AI handles Combat while another handles Rewards or a separate map area. Shared scripts and objects have one editor at a time. MCP and Git do not lock work automatically.
- GitHub records explicit milestones. A Studio change is not automatically a Git commit, and a push is not automatically applied to Studio or pulled by teammates.
- Live edits reach the shared development game before GitHub review. Git branches do not isolate edits already applied there.
- Script Sync is optional for local script editing. Sync only assigned folders with no overlap, including parent/child overlap. The original owner has a broad Server sync; do not duplicate it across computers.
- Live hierarchy and script sources can be captured with the checkpoint command. Full maps, properties and other saved place content require a coordinated full-place export. One person owns that export at a time.

Read README.md and COLLABORATION.md from the actual repository. Then:
1. Check Git and authenticate securely. Verify private repo access and clone to a folder I choose, or inspect my existing clone. Do not ask for passwords/tokens in chat.
2. Confirm separate Roblox Edit access and that I opened the correct shared place outside play mode.
3. Inspect my existing Cursor MCP setup first. If needed, guide me through Assistant > … > Manage MCP Servers > Enable Studio as MCP server, then register Cursor through Quick connect or the configuration above. Preserve unrelated settings. Each collaborator must do their own setup.
4. After any required reload, list Studio instances, select place ID 133194819129629, verify edit mode and read Workspace and ServerScriptService. Saved configuration is not proof of working access.
5. Ask which feature/object scopes I have agreed to own and what teammates are editing. Do not write until scope conflicts are resolved. Do not contact teammates on my behalf without permission.
6. Prefer direct MCP for live design work. If local script editing is needed, verify matching paths and non-overlapping sync roots. The initial mapping is ServerScriptService > Server to src/server/Server. Coordinate stopping the parent's sync, preserving contents, before enabling child feature syncs. Client/shared folders are not assumed connected.
7. Pause affected Script Sync before Git pulls, branch switches, merges or rebases. Preserve work and compare Studio with disk before resuming; never blindly choose Keep Disk or Keep Studio. Use one write route per script during a task.
8. Coordinate one harmless live test edit, ask a teammate to confirm visibility, then undo it. If using script syncing verify both directions with a temporary comment and remove it.
9. Read live state before edits, stay in scope, coordinate shared-object handoffs and shared playtests, and help inspect output/test results.
10. At tested milestones review the actual diff, stage only relevant paths, commit/push my feature branch and help open a pull request within authorization. Ask for author details if missing. Do not auto-commit every keystroke or include unrelated changes. Changes on a friend's branch are not included by pulling main until merged. Review and merge agreed changes, then update local copies with affected syncing paused.
11. Run node tools/studio-checkpoint.mjs to record live hierarchy and script sources when appropriate. It requires local Node.js 20+, Studio MCP enabled, the correct game open, and edit mode. Review snapshots/studio-context.json before committing. It is not a full backup or automatic restore.
12. Coordinate one exporter for Studio Download a Copy snapshots under places/. The original places/Spin2Fight.rbxlx.rbxl is a preserved binary snapshot, not continuous sync. Never replace the shared game just because I pulled a snapshot. Rojo import failed earlier; no Rojo migration is active or required.

Never blindly overwrite scripts, replace/publish the game, force push, or change access without required authorization. GitHub access does not grant Roblox permissions or restricted asset rights. For isolation until review, explain separate development places as an alternative.

Explain each step and verify claims. Distinguish configuration saved, tools available, live reads verified, write tested and teammate visibility confirmed. If a tool/menu differs, inspect it or request a screenshot.

Our daily routine is: agree on separate tasks -> inspect the live game -> build with Cursor/Codex through MCP (or assigned synced scripts) -> test together -> capture/review/commit/push agreed milestones. Report what changed in Studio separately from what was saved to GitHub, and mention any unsaved map/UI changes needing a full-place export.
```

References: [Studio MCP](https://create.roblox.com/docs/studio/mcp), [Script Sync](https://create.roblox.com/docs/scripting/sync).
