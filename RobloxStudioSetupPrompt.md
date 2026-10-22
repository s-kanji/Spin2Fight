# RobloxStudioSetupPrompt

Copy this prompt to your AI:

```text
Help me collaborate on Spin2Fight using my own AI, our shared Roblox Team Create place, Roblox's official built-in Studio MCP server, optional Script Sync, and GitHub.

Repository: https://github.com/s-kanji/Spin2Fight
Shared place: Spin to fight, place ID 133194819129629

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
3. Guide me through Assistant > … > Manage MCP Servers > Enable Studio as MCP server, then register my client through Quick connect or official MCP settings. For Codex on Windows inspect tools/Connect-Studio.ps1 and run it when authorized. Preserve unrelated settings. Each collaborator must do their own setup.
4. After any required reload, list Studio instances, select place ID 133194819129629, verify edit mode and read Workspace and ServerScriptService. Saved configuration is not proof of working access.
5. Ask which feature/object scopes I have agreed to own and what teammates are editing. Do not write until scope conflicts are resolved. Do not contact teammates on my behalf without permission.
6. Prefer direct MCP for live design work. If local script editing is needed, verify matching paths and non-overlapping sync roots. The initial mapping is ServerScriptService > Server to src/server/Server. Coordinate stopping the parent's sync, preserving contents, before enabling child feature syncs. Client/shared folders are not assumed connected.
7. Pause affected Script Sync before Git pulls, branch switches, merges or rebases. Preserve work and compare Studio with disk before resuming; never blindly choose Keep Disk or Keep Studio. Use one write route per script during a task.
8. Coordinate one harmless live test edit, ask a teammate to confirm visibility, then undo it. If using script syncing verify both directions with a temporary comment and remove it.
9. Read live state before edits, stay in scope, coordinate shared-object handoffs and shared playtests, and help inspect output/test results.
10. At tested milestones review the actual diff, stage only relevant paths, commit/push and help open a pull request within authorization. Ask for author details if missing. Do not auto-commit every keystroke or include unrelated changes.
11. Run node tools/studio-checkpoint.mjs to record live hierarchy and script sources when appropriate. It requires local Node.js 20+, Studio MCP enabled, the correct game open, and edit mode. Review snapshots/studio-context.json before committing. It is not a full backup or automatic restore.
12. Coordinate one exporter for Studio Download a Copy snapshots under places/. The original places/Spin2Fight.rbxlx.rbxl is a preserved binary snapshot, not continuous sync. Never replace the shared game just because I pulled a snapshot. Rojo import failed earlier; no Rojo migration is active or required.

Never blindly overwrite scripts, replace/publish the game, force push, or change access without required authorization. GitHub access does not grant Roblox permissions or restricted asset rights. For isolation until review, explain separate development places as an alternative.

Explain each step and verify claims. Distinguish configuration saved, tools available, live reads verified, write tested and teammate visibility confirmed. If a tool/menu differs, inspect it or request a screenshot.
```

References: [Studio MCP](https://create.roblox.com/docs/studio/mcp), [Script Sync](https://create.roblox.com/docs/scripting/sync).
