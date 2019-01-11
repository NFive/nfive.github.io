---
id: troubleshooting
title: Troubleshooting
---

## Server Errors

### Expected Warnings

The following FiveM server warnings are expected and safe to ignore:

- `INFO: No channel links found in configuration file.`
- `Couldn't find resource sessionmanager.`

### Database

- `mysql Error: -1 : Unable to connect to any of the specified MySQL hosts.`

  Check your `resources\nfive\config\database.yml` configuration and that a MySQL database is running and available.

- `MySql.Data.MySqlClient.MySqlPacket.ReadString` or similar MySQL string error

  Make sure your database charset is correctly set for NFive. See [Database Setup](dbsetup#configure) for instructions.

### FiveM License Key

- `GlobalError: Could not authenticate server license key.`

  ![FiveM license key warning dialog](assets/troubleshooting-fivem-license-key.png)

  This error means you do not have a valid [FiveM license key](https://keymaster.fivem.net/) in `server.cfg`, make sure the file contains a `sv_licensekey` line.

## Client Errors

- `System.Runtime.Serialization.dll is not a platform image (even though the dir matches).`

  This warning can be safely ignored.
