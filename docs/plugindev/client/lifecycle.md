---
title: Life Cycle
---

Server side NFive plugins must contain one or more classes inheriting from the `Controller` class, however most plugins will only consist of one. When starting up, the NFive server will create an instance of each compatible controller class it finds in the server plugin assemblies.

## Life Cycle

1. Plugin controllers are constructed early in the NFive startup process and the order plugins are loaded cannot be guaranteed, so you should not use the constructor for any plugin runtime logic.
2. Immediately after the plugin's constructor is called, NFive invokes the plugin's `Loaded()` method.
3. Once all plugins are loaded, all controllers' `Started()` methods are invoked in parallel asynchronously.
4. The server fires off internal events signalling that it has finished loading.
