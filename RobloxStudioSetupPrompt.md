# RobloxStudioSetupPrompt

Copy the following prompt into your AI assistant:

```text
Help me connect our existing Roblox game to our private GitHub repository using Roblox Studio’s built-in Script Sync.

Repository: https://github.com/s-kanji/Spin2Fight

Our current setup:
- We use the same Roblox experience through Team Create.
- Studio has a folder at ServerScriptService > Server.
- That folder corresponds to src/server/Server in the repository.
- We use Script Sync, not Rojo.
- GitHub commits, pushes, and pulls are separate from Studio syncing.

Please:
1. Check whether Git is installed and help me authenticate to GitHub securely. Don’t ask me to paste passwords or tokens into chat.
2. Verify access to the private repo and clone it into a local folder I choose. If already cloned, inspect it before making changes.
3. Confirm I have separate collaborator access to the Roblox experience.
4. Guide me through connecting the EXISTING Server folder in Studio to my clone’s src/server directory. Verify the resulting path matches src/server/Server, without creating duplicate folders.
5. Before enabling sync, have me coordinate with teammates so nobody else is simultaneously syncing or editing the same scripts. Review any differences between Studio and disk before choosing which version to keep.
6. Verify both directions using a harmless comment: Studio → local file, then local file → Studio. Coordinate this test because it affects the shared Team Create place.
7. Explain how to pull, create a branch, commit, push, and open a pull request. Configure my commit name and email only after asking me.
8. Explain that changing branches or pulling into an actively synced folder can change the shared Studio game before a pull request is merged. Help me pause syncing when appropriate.

Do not replace the existing game, overwrite scripts blindly, publish the game, or migrate to Rojo.

Guide me one step at a time, inspect what is actually available on my computer, and verify the connection before claiming it works. If a Studio menu differs, ask for a screenshot.
```

This reproduces our current setup. Independent work on Git branches should use separate development copies of the place so unfinished changes don’t affect the shared game.
