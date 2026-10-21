# RobloxStudioSetupPrompt

Copy the following prompt into your AI assistant:

```text
Help me collaborate on our existing Roblox game using my own AI assistant, Roblox Team Create, built-in Script Sync, and our private GitHub repository.

Repository: https://github.com/s-kanji/Spin2Fight

Current setup and intended workflow:
- We use the same Roblox experience through Team Create.
- Studio has a folder at ServerScriptService > Server.
- That folder corresponds to src/server/Server in the repository.
- The initial setup syncs that whole Server folder on the owner's computer. Feature-level syncing is the intended next setup; do not assume it has already been configured.
- We use Script Sync, not Rojo.
- GitHub commits, pushes, and pulls are separate from Studio syncing.
- Everyone can use their own AI and work in the same Team Create place simultaneously, provided each person syncs and edits different assigned feature folders.
- Each developer has their own local clone of this same repository.
- Studio receives synced edits immediately, before GitHub review or merging. GitHub provides version history and review; it does not decide which live Studio edits take effect.

Feature ownership rules:
- Agree with teammates which feature folders I own for this session before enabling sync or editing scripts. Ask me for the assignment; do not assume ownership or contact teammates on my behalf.
- For example, one person could own ServerScriptService > Server > Combat, another Server > Rewards, and another a dedicated interface script folder. These are examples, not folders guaranteed to exist.
- Sync only my assigned feature folders. Nobody may also sync an ancestor folder covering those features. Before splitting the current broad Server sync, coordinate with its owner to stop that sync while keeping its local files and Studio contents.
- A shared script has one editor at a time. Coordinate an explicit handoff before another person or AI edits it. Do not edit outside my assigned scope without coordinating ownership.
- Multiple people must not simultaneously sync and edit the same scripts. Team Create does not merge competing local AI edits for us.

Please:
1. Check whether Git is installed and help me authenticate to GitHub securely. Don’t ask me to paste passwords or tokens into chat.
2. Verify access to the private repo and clone it into a local folder I choose. If already cloned, inspect it before making changes.
3. Confirm I have separate collaborator access to the Roblox experience.
4. Inspect the actual Studio folders, repository structure, and existing sync roots. Confirm my assigned features and check with me that teammates have stopped any overlapping sync, including the owner's initial broad Server sync. Do not sync the entire Server folder on every collaborator's computer.
5. Pull the latest agreed code while syncing is paused and the local working tree is accounted for. Help me create a feature branch. Configure my commit name and email only after asking me, if they are not already configured.
6. Guide me through connecting only my assigned EXISTING feature folders to their matching locations in my clone. For example, Server > Combat should correspond to src/server/Server/Combat. Account for how Studio creates the selected folder inside the chosen destination; verify actual resulting paths and avoid duplicate nesting. Do not reorganize the game's scripts without agreement.
7. Review differences between Studio and disk before enabling or resuming sync. Do not blindly choose Keep Disk or Keep Studio. Reconcile differences with the feature owner so existing work is preserved.
8. Verify both directions with a harmless comment in an assigned script: Studio → local file, then local file → Studio. Coordinate the test because it affects the shared Team Create place. Remove the test comment afterward.
9. Make changes only within my agreed scope. Help us test the combined changes in Studio. Explain that I can affect the shared development game before a GitHub pull request is approved, and that Script Sync only covers supported scripts and folders, not maps, parts, or all Studio assets.
10. At an agreed, tested milestone, inspect the diff, stage only the relevant files, commit, push my branch, and help open a pull request using the available authorization. Do not auto-commit every keystroke or include unrelated changes. Do not claim a commit, push, merge, or test succeeded without verification.
11. Pause my affected sync connections before pulling, switching branches, merging, or rebasing. Preserve uncommitted work, coordinate any shared-script changes, and reconcile Studio versus disk before resuming. A Git rollback or branch switch must not silently revert teammates' live Studio work.
12. Explain ownership handoffs: stop the previous owner's sync while preserving files and Studio contents, commit/share their work, reconcile the new owner's files with Studio, and only then enable the new owner's sync. Never overlap the two connections for the handed-off scripts.

Do not replace the existing game, overwrite scripts blindly, publish the game, or migrate to Rojo.

Guide me one step at a time, inspect what is actually available on my computer, and verify the connection before claiming it works. If a Studio menu differs, ask for a screenshot.
```

This workflow supports simultaneous work in one shared Team Create place through non-overlapping feature ownership. It does not isolate unfinished features from teammates. If the team needs independent branches whose changes reach the shared game only after approval, use separate development copies of the place and agree on an integration workflow instead.

Reference: [Roblox Script Sync documentation](https://create.roblox.com/docs/scripting/sync).
