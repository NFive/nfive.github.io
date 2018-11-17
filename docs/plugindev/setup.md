---
title: Setup
---

## Getting Started

The easiest way to start developing a plugin is to use [nfpm](nfpm/nfpm) tool. 
It features a command called `scaffold` that can generate a boilerpalte containing plugin source code. For more info check the [plugin commands](nfpm/commands-plugins)

1. To start you want to run the scaffold command included in nfpm
    ```
    nfpm scaffold
    ```
2. Follow the prompts till it generates a folder called `plugin-<name>`
3. Open the generated project in Visual Studio and start developing your NFive Plugin

---

## Scaffold Prompts - Breakdown

### `Owner`
Sets the author of the plugin. If you plan to release your plugin via Github then this must be the name or organisation it will be released under.

### `Project`
The name for your plugin.

### `Description`
A short description of what your plugin does

### `Generate client plugin`
Any plugin that requires code to run Client Side must set this option to true

### `Generate server plugin`
Any plugin that requires code to run Server Side must set this option to true

### `Generate shared library`
If both of the above options are selected, this option will be available.
Any code in a plugin that is requires running on both the client and server then this must set this option to true. 