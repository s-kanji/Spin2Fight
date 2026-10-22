# AI collaboration rules

- Target the shared Spin to fight place ID 133194819129629. List Studio instances and verify the target and edit mode before writes.
- Agree on feature and object-path ownership before editing. Each AI may concurrently work on different scopes. This document is guidance, not a distributed lock.
- Read current live state before edits. Shared objects and scripts have one editor at a time; coordinate handoffs.
- MCP is the primary route for live game design. Script Sync is optional for assigned scripts. Never overlap another sync root, including parent/child overlap.
- The original broad Server sync must be stopped before other people sync its child folders. Preserve both local files and game contents.
- Use one write route per script during a task. Account for synchronization before switching between local files and MCP.
- Pause affected syncing before Git pulls, branch switches, merges, or rebases. Preserve uncommitted work and reconcile disk with live Studio before resuming.
- Coordinate starting or stopping shared playtests and broad edits that affect teammates.
- Git branches do not isolate changes already applied to the shared Studio place; review does not gate live changes.
- At tested milestones, inspect diffs and stage explicit relevant paths. Commit/push within user authorization. Do not force push or automatically publish.
- Direct MCP design edits require a checkpoint or place export to be recorded in Git. The context JSON captures hierarchy and script sources, not a full backup.
- One exporter owns whole-place snapshots at a time. Do not overwrite the shared place from a pulled snapshot without an explicit integration decision.
- Report configuration saved, tools discovered, game read verified, write tested, and teammate visibility verified as separate states.
