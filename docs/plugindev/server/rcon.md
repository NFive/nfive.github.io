---
title: RCON
---

RCON ("remote console") is a communication protocol supported by FiveM which allows you to remotely control the game server without direct access to the machine the server is running on. [`nfpm`](nfpm/overview.md) has full FiveM RCON support, allowing you to easily connect to the FiveM server remotely with [`nfpm rcon`](nfpm/command-reference.md#rcon).

## Commands

[FiveM has a number of built in server commands](https://docs.fivem.net/server-manual/server-commands/) which you can use as well as the following default NFive commands:

* `reload [<plugin>]`

  Causes NFive to notify all, or specified, server plugins to reload their configuration from disk.

## Creating Commands

NFive server plugins are able to register new commands via [`IRconManager`](https://github.com/NFive/SDK.Server/blob/master/Rcon/IRconManager.cs) which is available server side.
