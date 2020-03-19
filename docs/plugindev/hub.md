---
title: Hub
---

The [NFive plugin Hub](https://hub.nfive.io/) if the official plugin repository, which `nfpm` uses by default.

## Purpose

The plugin Hub was designed as a simple centralized location to publish public NFive plugins to for easy install by other users.

## Functionality

The plugin Hub works by indexing public [GitHub](https://github.com/) repositories which use the [#nfive-plugin topic](https://github.com/topics/nfive-plugin) and have a valid plugin release.

## Publishing

In order to publish your plugin to the Hub you must complete the following steps:

1. [Host your project on GitHub](https://help.github.com/en/articles/create-a-repo), with each NFive plugin in a separate public repository.
2. [Add the *nfive-plugin* topic](https://help.github.com/en/articles/classifying-your-repository-with-topics) to your repository.
3. Pack your built project into a ZIP file, either with [`nfpm pack`](nfpm/command-reference.md#pack) or [manually](#).
4. [Create a release on GitHub](https://help.github.com/en/articles/creating-releases), attaching the packed plugin.

The Hub will update and discover new plugins every hour, so their may be a delay before your new plugin release is available.
