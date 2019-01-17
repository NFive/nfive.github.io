---
id: components
title: Components
---

NFive is modular by design and comes in multiple components.

## NFive (Required)

The NFive runtime is a [FiveM server resource](https://docs.fivem.net/resources/) which handles loading the installed plugins and handling RPC (Remote Procedure Call) and events.

## MySQL Database (Required)

NFive makes use of a MySQL database for storing information, we recommend using [MariaDB](https://mariadb.org/). Plugins also get access to the benefits of a MySQL Database through the NFive framework.

## Plugin Manager (Recommended)

The NFive Plugin Manager (`nfpm`) is a standalone tool for NFive server administration and management as well as plugin development.
