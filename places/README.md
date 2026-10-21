# Full-place snapshot

`Spin2Fight.rbxlx.rbxl` is the original binary Roblox place exported from Studio. Its header identifies it as binary `.rbxl`; the double extension is the filename chosen during export. The file has been preserved without conversion.

Open this file as a separate local place in Studio to inspect the saved game. This is a snapshot, not an automatic connection to the shared Team Create place. Roblox access and restricted asset permissions are separate from GitHub access.

## Import status

A local dry-run import using official Rojo 7.7.1 failed because the place contains duplicate direct children named `Instance`. The binary reader also warned about unknown value type 0x23 for `Terrain.VoxelGridAssetContentMap`. No imported project was applied to Studio.

Full-game Rojo conversion, a verified build, and a Studio round-trip test remain pending. Do not treat the snapshot as an active full-game sync setup. Existing script syncing remains documented in the repository's setup prompt.

Do not independently overwrite this whole-place snapshot from multiple branches; coordinate one exporter at a time. Structured source extraction must be validated before it replaces the original snapshot.
