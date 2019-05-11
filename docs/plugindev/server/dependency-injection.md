---
title: Dependency Injection
---

> This documentation is for the planned specification and includes features not yet implemented

Along with the standard parameters for a controller type, it is possible for a plugin to specify extra constructor interface parameters which the NFive server will provide at runtime.

Using this feature along with nested plugin dependencies its possible for one plugin to get an instance of a class provided in another plugin.

The dependency inject system works with both transient and singleton instances allowing for separate or shared instance across plugins.

## Component Registration

In order for a type to be resolvable by the injection system, the type must be marked as a "component", which is done with the `ComponentAttribute`.

### NFive Components

* ILogger
* IEventManager
* IRpcHandler
* IRconManager

## Example

Plugin "XYZ":

```csharp
public interface IXyzUtility
{
    void Run(string msg);
}

// Mark class as a component so it can be requested by other plugins
// and as transient so a separate instance is created for each plugin
[Component(Lifetime = Lifetime.Transient)]
public class XyzUtility : IXyzUtility
{
    private ILogger logger;

    // Components are able to utilize the dependency injection system themselves,
    // requesting other registered components
    public XyzUtility(ILogger logger)
    {
        this.logger = logger;

        this.logger.Debug("Utility created");
    }

    public void Run(string msg)
    {
        this.logger.Debug($"Utility ran: {msg}");
    }
}
```

Plugin "ABC" which has a dependency on "XYZ":

```csharp
public class AbcController : Controller
{
    // Must request the external interface
    public AbcController(ILogger logger, IEventManager events, IRpcHandler rpc, IRconManager rcon, IXyzUtility utility)
      : base(logger, events, rpc, rcon)
    {
        // Invoke the external code
        utility.Run("Hello world");
    }
}
```
