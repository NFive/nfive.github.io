---
title: Client SDK
---

The NFive client component is downloaded by users when first connecting to the server as the files are specified by the server component.

## Configuration

All client configuration is controlled by the server component.

---
title: Server SDK
---

The NFive server component runs as a FiveM resource and must be located at `resources\nfive\`, relative to `FXServer.exe`, and needs to be started by FiveM in `server.cfg`.

## Configuration

NFive server configuration is stored in `nfive.yml` and `database.yml` at `resources\nfive\config`.

---
title: Plugins SDK
---

All game functionality is provided by plugins which NFive manages and loads.

## Structure

NFive plugins can either run under the server component, the client component or both.

A plugin must contain the following files as a minimum:

- `nfive.yml` - This metadata file contains the plugin properties as well as what files and dependencies to load at runtime.
