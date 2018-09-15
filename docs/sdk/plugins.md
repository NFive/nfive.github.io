---
title: Overview
---

All game functionality is provided by plugins which NFive manages and loads.

## Structure

NFive plugins can either run under the server component, the client component or both.

A plugin must contain the following files as a minimum:

- `nfive.yml` - This metadata file contains the plugin properties as well as what files and dependencies to load at runtime.
