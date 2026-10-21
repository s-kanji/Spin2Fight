# Spin2Fight

Roblox game scripts shared through GitHub and Roblox Studio Script Sync.

## Collaborator setup

1. Get access to this private GitHub repository and clone it onto your computer.
2. Get separate collaborator access to the Roblox experience from its owner, then open the game in Studio.
3. Stop any running play test before configuring sync.
4. In Studio Explorer, right-click the `Server` folder under `ServerScriptService` and select **Sync to…**. Choose the clone's `src/server` directory. The current synced folder is `src/server/Server`.
5. Review any sync conflict dialog before choosing which version to keep. The initial repository currently contains only a Hello world test script.

Script Sync links your own local files with Studio. GitHub access does not grant access to the Roblox experience, and pushes do not automatically update another person's local files or Studio session.

## Working together

- Pull the latest changes before editing and use branches and pull requests for review.
- Coordinate who syncs and edits each script. Roblox warns that collaborators syncing and editing the same scripts at the same time can overwrite each other's changes.
- When pulling changes, review Studio's sync conflict prompts before resuming work.
- Maps, parts, and other non-script assets remain managed in Studio.

`src/client` and `src/shared` are reserved for future sync setup; they are not connected yet. Git does not track empty directories.

See [Roblox Script Sync documentation](https://create.roblox.com/docs/scripting/sync).
