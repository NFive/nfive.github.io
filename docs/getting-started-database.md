---
id: database
title: Database Setup
---

NFive requires a MySQL database, these instructions use the recommend [MariaDB](https://mariadb.org/) but any modern MySQL variant should work.

## Setup

Download and install the latest [MariaDB server](https://downloads.mariadb.org/) for your system [according to the instructions](https://mariadb.com/kb/en/library/binary-packages/).

## Configuration

NFive needs full Unicode support which requires you to manually preconfigure your database server's default character set:
* character-set-server: utf8mb4
* collation-server: utf8mb4_unicode_520_ci

These options need to be set in your [server's configuration file](https://mariadb.com/kb/en/library/configuring-mariadb-with-option-files/#option-file-locations). Add the following to the bottom of the `[mysqld]` section, if the section does not already exist then create it at the bottom of the file:

```ini
[mysqld]
character-set-server=utf8mb4
collation-server=utf8mb4_unicode_520_ci
```

Don't forget to restart your server after making the configuration changes.

### Docker
A preconfigured MariaDB server is included in the supplied [NFive docker-compose configuration](https://github.com/NFive/NFive/blob/master/docker-compose.yml) which does not require any further setup.

## Database and Tables

NFive will automatically create both the full database it needs as well as all the tables within it on its first run, so make sure the MySQL user you provide NFive has the necessary permissions.
