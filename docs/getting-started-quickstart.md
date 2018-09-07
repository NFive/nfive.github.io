---
id: quickstart
title: Quickstart
---

NFive aims to be very easy to setup and configure, so you can quickly get a server up and running.

## Setup

The easiest way to quickly install a FiveM server and setup NFive is to use the [nfpm](#) tool:

1. Download the latest version of [nfpm](https://github.com/NFive/nfpm): [development build](https://ci.appveyor.com/api/projects/NFive/nfpm/artifacts/bin/Release/nfpm.exe)

   > `nfpm.exe` doesn't need to be installed and can be run from anywhere.

2. Place it in an empty directory, as this is where the server will be installed.

3. Run the setup command `nfpm setup` and answer the prompts.

   > nfpm will work exactly the same on Linux and macOS if used with [Mono](https://www.mono-project.com/): `mono nfpm.exe setup`

## Verifying Installation

Your server directory will now contain a structure and key files similar to:

```bash
root-directory
├── FXServer.exe
|── server.cfg
└── resources
    └── nfive
        ├── __resource.lua
        ├── nfive.yml
        ├── nfive.lock
        └── config
            ├── nfive.yml
            └── database.yml
```

## Starting the Server

After running the setup command you will have a blank FiveM server running NFive. To start the server:

1. In your root directory run the command `nfpm start`.

   You should see the FiveM server window open and be able to connect to the server from your FiveM client by using the "Direct Connect" tab and entering your IP address.

If the server started correctly and you are able to connect, then you can move on to configuring it and installing plugins, otherwise check troubleshooting.
