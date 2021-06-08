---
title: Meu próprio SGDB em JS pelo terminal
description: O SGDB que nomeei de "DBGen" é um CLI criado para estudar as
  práticas de comandos sql, postgres e javascript..
date: 2021-06-08 08:08:11
thumbnailImage: ../../static/assets/img/dbgen.png
category: project
---
```sh
      _ _                         ____ _     ___  Database generator v.0.0.1
   __| | |__   __ _  ___ _ __    / ___| |   |_ _|
  / _` | '_ \ / _` |/ _ \ '_ \  | |   | |    | | 
 | (_| | |_) | (_| |  __/ | | | | |___| |___ | | 
  \__,_|_.__/ \__, |\___|_| |_|  \____|_____|___|
              |___/                              
```

>Database generator is a CLI created to study the practices of sql commands and postgres.


## __*Prerequisites*__

You should have installed the [node.js](https://nodejs.org/en/).

## __*Installation*__

Use the [npm](https://www.npmjs.com/) to install dependencies.

```node
npm install
```

Create a global symlink for a dependency.

```node
npm link
```

## __*Usage*__

Open the terminal and type the following commands.

```
Usage:
<commands> -> the keyword 'dbgen' followed by the quotation marks or single quotes

Example:
dbgen 'select * from table'

Commands:
create table <tablename> (<field & type>)                       create a new table
insert into <tablename> (<fieldname>) values (<fieldvalue>)     insert values in fields
select [fields] or [*] from author [where] <condition>          shows the selection table in the terminal
delete from <tablename> [where] <condition>                     delete the selected table or selected field according to where condition

dbgen@0.0.1 fork in https://github.com/GuiSAlmeida/database-generator
```

## __*Built With*__

* [cli-table](https://github.com/Automattic/cli-table) - Used to display tables in the terminal.
* [figlet](https://github.com/patorjk/figlet.js) - Used to making large letters of logo.
* [chalk](https://github.com/chalk/chalk) - Used to logging of colored information.

## __*Author*__

[**Guilherme Almeida**](https://guisalmeida.com)

See also the list of [contributors](https://github.com/GuiSAlmeida/database-generator/contributors) who participated in this project.