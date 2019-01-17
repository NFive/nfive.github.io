---
id: dbsetup
title: Database Setup
---

NFive makes use of a MySQL Database. The guide will use the recommended and tested [MariaDB](https://mariadb.org/).

## Setup

Windows:
Visit [MariaDB](https://mariadb.org/). Download and Install the latest version.

Linux:
Install it via your package manager (yum/apt etc)

Docker:
NFive comes with a docker-compose file that contains and uses MariaDB already.

## Configure

NFive needs full Unicode support which you will need to manually preconfigure your MySQL server's default character set:
1. character-set-server: utf8mb4
2. collation-server: utf8mb4_unicode_520_ci


### Windows
Add them to the bottom of [mysqld] inside ``my.ini`` like so:
```
[mysqld]
character-set-server=utf8mb4
collation-server=utf8mb4_unicode_520_ci
```
  > The file is located at ``C:\Program Files\MariaDB *version*\data\my.ini``


### Linux
Add them to the bottom of [mysqld] inside ``my.cnf`` like so:
```
[mysqld]
character-set-server = utf8mb4
collation-server = utf8mb4_unicode_520_ci
```
  > The file is located at ``/etc/mysql/my.cnf``


### Docker
Since MariaDB is included in the docker-compose, it doesn't require it to be preconfigured unless your using your own docker-compose file. In which case just copy the config from the one provided.
