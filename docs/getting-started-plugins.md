---
id: plugins
title: Installing Plugins
---

Using the [NFive Plugin Manager](nfpm/overview.md) (`nfpm`) is the recommended way to install plugins into your Five server.

You can use [visit the NFive plugin hub](https://hub.nfive.io/) or use ``nfpm search`` to find available plugins.

## Installing

From a terminal in your server directory you can run:

```sh
nfpm install <plugin>
nfpm install <plugin>@<version>
```

Where `<plugin>` is expected to be a published plugin from the [NFive plugin hub](https://hub.nfive.io/), however `nfpm` also supports [installing from other sources](nfpm/command-reference.md#install).

## Recommended Plugins

Without any plugins, clients will be able to connect but will not spawn into the game world. If you are looking to get started with NFive quickly, the following plugins are recommended as the minimum required for a playable server:

* [Loading Screen](https://hub.nfive.io/NFive/plugin-loadingscreen) - A basic demo loading screen.
* [Start](https://hub.nfive.io/NFive/plugin-start) - An example of allowing connected players to spawn so they can play.

These can be installed with:

```sh
nfpm install NFive/plugin-loadingscreen NFive/plugin-start
```

Once you have installed the basic plugins you can move on to [starting the server](getting-started-administration.md).
