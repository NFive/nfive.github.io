---
title: Setup
---

## Getting Started

The easiest way to start developing a plugin is to use [`nfpm`](nfpm/overview.md)'s [`scaffold`](nfpm/command-reference.md#scaffold) command which generates the bolierplate files needed for a NFive plugin, as well as creating a full C# solution.

1. Generate the boilerplate scaffolding with nfpm:

    ```shell
    nfpm scaffold
    ```

2. Follow the prompts till it generates a folder named after your `<project>` input.
3. Open the generated solution file in Visual Studio and start developing your NFive plugin.

---

## Scaffold Breakdown

### `Owner`

Sets the author of the plugin. If you plan to release your plugin via Github then this must exactly match the username or organisation it will be released under.

### `Project`

The name for your plugin. If you plan to release your plugin via Github then this must exactly match the repository name it will be released under.

### `Description`

A short description of what your plugin does.

### `Generate client plugin`

Any plugin that requires code to run client side must set this option to true.

### `Generate server plugin`

Any plugin that requires code to run server side must set this option to true.

### `Generate shared library`

Any code in a plugin that is requires running on both the client and server then this must set this option to true.
