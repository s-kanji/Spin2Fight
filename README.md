# Spin2Fight

We build together in the shared **Spin to fight** Team Create place. Each collaborator uses their own AI connected through Roblox's official Studio MCP server. GitHub records agreed milestones.

## What connects to what

| Component | Purpose |
| --- | --- |
| Team Create | Live shared game: maps, objects, UI, scripts, lighting |
| Studio MCP | Each person's AI can inspect and edit their open Studio game |
| Script Sync (optional) | Assigned script folders connect to local code files |
| GitHub | Version history, code review, design notes, context checkpoints and place snapshots |

AI changes through MCP reach the shared development place before GitHub review. GitHub pushes do not automatically change Studio, and direct Studio edits do not automatically become Git commits.

## New collaborator setup

1. Get private repository access and separate Roblox Edit access. Clone this repo.
2. Open the shared **Spin to fight** place: place ID **133194819129629**.
3. In Studio, open **Assistant → … → Manage MCP Servers** and enable **Studio as MCP server** yourself.
4. Connect your AI using Studio Quick connect or its documented MCP configuration. On Windows the official command is `cmd.exe`, with arguments `/c` and `%LOCALAPPDATA%\\Roblox\\mcp.bat`. For Codex CLI, use `tools/Connect-Studio.ps1`.
5. Restart/reload the AI client if needed. Ask it to list Studio instances, select that place ID, and read Workspace and ServerScriptService. Do not assume registration means connection.
6. Agree which feature and object paths you own before your AI edits. Read [COLLABORATION.md](COLLABORATION.md).

The owner-side MCP connection was verified against this place by reading Workspace, Lighting, StarterGui, ReplicatedStorage, StarterPlayer, and ServerScriptService. This does not verify anyone else's computer.

## Working simultaneously

Each AI works directly through MCP on a different agreed scope, for example Combat, Rewards, and a separate map area. Shared objects and scripts have one editor at a time. Read live state before edits and coordinate handoffs; MCP is not an automatic lock.

Script Sync is optional for AI editing now that MCP is available. The initial owner-side sync maps `ServerScriptService > Server` to `src/server/Server`. Do not duplicate it on everyone's machine. If assigning child-folder syncs, first coordinate stopping that parent sync while preserving files and game contents. No feature-level split has been verified.

When a script is already synced, account for MCP edits reaching its local files. Avoid competing local-file and MCP writes. Pause affected syncing before pulling, switching branches, merging, or rebasing, then reconcile disk with Studio before resuming.

## Saving work to GitHub

Use explicit tested milestones, not commits on every keystroke.

- For ordinary local script files, review the diff, commit relevant paths, and push a branch for review.
- For live game context and script sources, run `node tools/studio-checkpoint.mjs` (Node.js 20+). It reads the correct place through MCP and updates `snapshots/studio-context.json`. Review it before committing.
- The context checkpoint records hierarchy and sources in listed game services. It is not a complete property export, a restorable game backup, or continuous synchronization. It is never automatically applied back to Studio.
- One coordinated exporter uses Studio **Download a Copy** to save a full place under `places/` at agreed milestones. Pull before replacing the snapshot; do not merge competing whole-place binary files.
- Commit and push the agreed files. Other collaborators pull while affected script syncing is paused. Do not replace or publish the shared place merely after pulling a snapshot.

The preserved original full-place snapshot is `places/Spin2Fight.rbxlx.rbxl`, a binary .rbxl despite its double extension. Rojo migration was attempted but failed; it is not required or active for this live MCP workflow.

GitHub access does not grant Roblox Edit access, restricted asset rights, or live DataStore access. Separate development places are required if changes must remain isolated until approval.

## Verify onboarding

The AI should read the correct live game, then coordinate a harmless edit that a teammate confirms in Team Create and undo it. If using Script Sync, verify both directions in assigned folders. Run the checkpoint, review/commit/push it, and have a collaborator pull to verify Git access. Never claim all teammates are configured from one successful connection.

References: [Studio MCP](https://create.roblox.com/docs/studio/mcp), [Script Sync](https://create.roblox.com/docs/scripting/sync).
