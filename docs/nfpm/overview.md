---
id: overview
title: Overview
---

The NFive Plugin Manager (`nfpm`) is a cross platform, standalone, CLI tool to help administer NFive installations and plugins and handle FiveM server management.

## Setup

- Download the latest version of `nfpm`: **[https:/dl.nfive.io/nfpm.exe](https://dl.nfive.io/nfpm.exe)**
- `nfpm.exe` doesn't need to be installed and can be run from anywhere, however its recommended that you put it in a directory which is included in your [system PATH variable](https://en.wikipedia.org/wiki/PATH_(variable)) for ease of use.
- `nfpm` will work exactly the same on Linux/macOS if used with [Mono](https://www.mono-project.com/): `mono nfpm.exe`

## Updating

`nfpm` can be updated by simply re-downloading the latest version manually and overwriting the old copy, or by using the built in self updater:

```shell
nfpm self-update
```

> Depending on the location of `nfpm` on Linux or macOS you may need to prefix the command with `sudo` to give write permissions to the directory: `sudo mono nfpm.exe self-update`
