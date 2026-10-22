param()
$ErrorActionPreference = 'Stop'
if (-not $env:LOCALAPPDATA) { throw 'Run this on your Windows computer.' }
$studioLauncher = Join-Path $env:LOCALAPPDATA 'Roblox\mcp.bat'
if (-not (Test-Path -LiteralPath $studioLauncher)) { throw 'Update Studio and enable its official MCP server first.' }
if (-not (Get-Command codex -ErrorAction SilentlyContinue)) { throw 'Codex CLI is not on PATH. Use your AI client MCP settings instead.' }
& codex mcp add Roblox_Studio -- cmd.exe /c $studioLauncher
if ($LASTEXITCODE -ne 0) { throw 'Codex MCP registration failed.' }
Write-Host 'Registration saved. Restart/reload your AI client if required, then list Studio instances and verify the correct game.'
Write-Host 'This does not enable Studio access or verify the live connection.'
