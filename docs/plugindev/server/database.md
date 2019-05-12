---
title: Database Access
---

NFive server plugins use [Entity Framework 6](https://docs.microsoft.com/ef/ef6/) for managed access to the [MySQL database](getting-started-database.md).

The NFive SDK provides all the base types and configuration required for your own plugin to create entity models and have Entity Framework manage the data.

## Usage

In order to create your own database table you must first create the model representing it. Take the following model:

```csharp
public class Account : IdentityModel
{
  [Key]
  [Required]
  public Guid Id { get; set; }

  [Required]
  [StringLength(254, MinimumLength = 6)]
  public string Email { get; set; }

  [Required]
  [StringLength(60)]
  public string Password { get; set; }

  [Required]
  [ForeignKey("User")]
  public Guid UserId { get; set; }

  public virtual User User { get; set; }

  [Required]
  public DateTime Created { get; set; }

  public DateTime? Deleted { get; set; }

  public Account()
  {
    this.Id = Guid.NewGuid();
    this.Created = DateTime.UtcNow;
  }
}
```

This model can then be registered with Entity Framework by using the NFive SDK [`EFContext`](https://github.com/NFive/SDK.Server/blob/master/Storage/EFContext.cs) type:

```csharp
public class StorageContext : EFContext<StorageContext>
{
  public DbSet<User> Users { get; set; }

  public DbSet<Account> Accounts { get; set; }
}
```

This allows you to later in your code create an instance of your context and query the database for models:

```csharp
using (var context = new StorageContext())
{
  var account = context.Accounts.FirstOrDefault(acc => acc.Email == "bob@example.com" && acc.Deleted == null);
}
```

## Migrations

Entity Framework uses migrations in order to create the database tables and manage structural changes. For your model table to be created you must create a migration, and create new migrations for any changes to the model structure.

[`nfpm` has built in support for automatically generating migration files](nfpm/command-reference.md#migrate) for you based on your model code.

For more information on migrations and working with the database, we recommend referring to the [Entry Framework 6 documentation](https://docs.microsoft.com/ef/ef6/get-started).
