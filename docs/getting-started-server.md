---
id: server
title: Server Setup
---

NFive aims to be very easy to setup and configure, so you can quickly get a server up and running.

## Quick Setup

The recommended and easiest way to quickly install a FiveM server and setup NFive is to use the cross platform [NFive Plugin Manager](nfpm/overview.md) (`nfpm`) tool:

1. Download the latest version of `nfpm`: **[https:/dl.nfive.io/nfpm.exe](https://dl.nfive.io/nfpm.exe)**

   > `nfpm.exe` doesn't need to be installed and can be run from anywhere.

2. Place it in the location you want to install the server and open a terminal/console window at that location.

   > `nfpm` will work exactly the same on Linux/macOS if used with [Mono](https://www.mono-project.com/): `mono nfpm.exe`

3. Run the setup command `nfpm setup` and answer the prompts, including how to connect to your database.

   > `nfpm` will download the correct FiveM server for Windows or Linux depending on your platform.

![Example of running "nfpm setup on Windows"](/img/setup.gif)

You now have a complete server setup and can skip to [Verifying Installation](#verifying-installation) below.

## Manual Setup

To manually install NFive into a FiveM server, download the [latest NFive release](https://dl.nfive.io/nfive.zip) and extract it into your server's resources directory as `nfive/`.

The resource will need to be included in your [FiveM server configuration](https://docs.fivem.net/server-manual/setting-up-a-server/#server-cfg) to start it: `start nfive`

> NFive completely replaces all stock FiveM server resources; make sure you remove them from your configuration if you have installed any. FiveM server will always try to load a resource named `sessionmanager`, even if it is not in your server configuration, so you must delete or rename the resource folder if its present.

### Configuration

NFive configuration files are located in `nfive/config/` with the primary configuration file being `nfive.yml`.

#### Database Connection

NFive [requires a MySQL database](database) with the connection details being stored in `nfive/config/database.yml`:

```yaml
connection:
  host: localhost
  port: 3306
  database: fivem
  user: root
  password: password
  charset: utf8mb4
  logging: false
```

## Verifying Installation

Your server directory should now contain a `server` directory with a structure and key files similar to:

```shell
server/
├── FXServer[.exe]
|── server.cfg
└── resources/
    └── nfive/
        ├── __resource.lua
        ├── nfive.yml
        ├── nfive.lock
        └── config/
            ├── nfive.yml
            └── database.yml
```

> The [Linux FiveM server](https://runtime.fivem.net/artifacts/fivem/build_proot_linux/master/) is more deeply nested with the server files located at `server/alpine/opt/cfx-server/`.

## Next Steps

After running the setup command you will have a blank FiveM server with NFive installed and while it can now be started, without any plugins the server will be unusable to players.

See the next page [Installing Plugins](getting-started-plugins.md) for the basic plugins needed to use your server.
