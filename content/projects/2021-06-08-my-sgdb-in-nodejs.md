---
title: My SGDB in nodeJS
description: DBGen is a simple DBMS (Data Base Management System), that runs through a terminal, made in nodeJS to study the practices of SQL commands, database operation and ES6 javascript concepts.
date: 2021-06-12 11:40:16
thumbnailImage: ../../static/assets/img/dbgen_2.png
category: project
tags: ['#javascript', '#node', '#terminal', '#cli', '#sgdb']
---
___
## Index

```toc
exclude: Index
```
---
## 1 Intro
This is a case study project made to practice ES6+ javascript concepts. Like: `classes`, `arrow function`, `destructuring`, `template strings`, `iterators for in & for of`, `map & set`, `promises`, `rest & spread operator`, among others.  
I could also better understand how a DBMS and database work. Creating tables and logic for querying and changing data in the database.  

### 1.1 What is a DBMS
It is a system responsible for managing one or more databases. Its main objective is to remove the responsibility of managing access, persistence, manipulation and organization of data from the client application. The DBMS provides an interface so that its customers can add, change or query previously stored data.
Examples of DBMSs: `PostgreSQL`, `MongoDB`, `MySQL`, `MariaDB` and `Oracle`.  

---
## 2 Database Class
The main logic of the code is organized in the Database class, where methods such as `createTable` are defined which, when called, creates a new table in the database according to the data passed in the terminal. Who defines the command that will be called is the `execute` method that returns a promise invoking the command.  
```js
...

class Database {
    constructor() {
        this.newTable = {};
        this.parser = new Parser();
        this.contentTable = loadJson('db.json');
    }

    createTable(parsedComand) {
        let [, tableName, columns] = parsedComand;
        this.newTable[tableName] = {
            columns: {
                id: "SERIAL NOT NULL"
            },
            data: []
        };

        columns = columns.trim().split(", ");

        for (let column of columns) {
            column = column.split(" ");
            const [name, type] = column;
            this.newTable[tableName].columns[name] = type;
        };

        const tableData = JSON.stringify({ ...this.contentTable, ...this.newTable }, undefined, 4);
        saveJson('db.json', tableData);
    }

    execute(statement) {
        return new Promise((resolve, reject) => {
            const result = this.parser.parse(statement);
            if (result) {
                resolve(this[result.command](result.parsedComand));
            }

            const message = `Syntax error: "${statement}"`;
            reject(new DatabaseError(statement, message));
        })
    }
}
...
```
---

## 3 Parsing commands with Map
Here the queries for manipulating data in the database are defined, using `Map` to set the commands by pairs, where the key has the names of the methods of our Database class and the values are `regex` which, through capture groups, help in the process of separating each field (column) from the record (row) in the table.
```js
class Parser {
    constructor(){
        this.commands = new Map();
        this.commands.set("createTable", /^create table (\w+)\s\((.+)\)/);
        this.commands.set("insert", /^insert into (\w+)\s\((.+)\)\svalues\s\((.+)\)/);
        this.commands.set("select", /^select (\*?.*) from (\w+)(?:\swhere\s(.+))?/);
        this.commands.set("delete", /^delete from (\w+)(?:\swhere\s(.+))?/);
        this.commands.set("help", /help/);
    }

    parse(statement){
        for (let [command, regexp] of this.commands) {
            const parsedComand = statement.match(regexp);
            if(parsedComand) {
                return {
                    command: command,
                    parsedComand: parsedComand
                }
            }
        }
    }
}
```
---

## 4 Utils
Here are some utility functions.

### 4.1 GenerateId
Function that creates a random number for **Primary key**(Id) for each field created in the table.
```js
const crypto = require('crypto');

module.exports = function generateId(){
    return crypto.randomBytes(4).toString('HEX');
}
```
### 4.2 SaveJson  
Function that saves the table data in a file in `Json` format.
```js
const fs = require('fs');

module.exports = function saveJSON(file, data) {
    fs.writeFile(file, data, (error) => {
        if (error) throw error;
    });
};
```

### 4.3 LoadJson  
Function that reads the data from the table in the `Json` file if it exists.
```js
const fs = require('fs');

module.exports = function loadJSON (filename = ''){
    return JSON.parse(
        fs.existsSync(filename) ? fs.readFileSync(filename, 'utf8') : '""'
    );
};
```

### 4.4 ShowTable
With the help of lib [cli-table](https://github.com/Automattic/cli-table), the function renders the table in the terminal as soon as a query command is passed.

```js

const Table = require('cli-table');
const chalk = require('chalk');

module.exports = function showTable(header, data) {
    let styledHeader = [];
    header.forEach(element => {
        styledHeader.push(element.toUpperCase());
    });

    let sizes = [];
    sizes.fill(20, 0, header.length);

    const table = new Table({
        chars: {
            'top': '═', 'top-mid': '╤', 'top-left': '╔', 'top-right': '╗'
            , 'bottom': '═', 'bottom-mid': '╧', 'bottom-left': '╚', 'bottom-right': '╝'
            , 'left': '║', 'left-mid': '╟', 'mid': '─', 'mid-mid': '┼'
            , 'right': '║', 'right-mid': '╢', 'middle': '│'
        },
        head: styledHeader, //['id', 'name', 'city']
        colWidths: sizes // [20, 20, 20]
    });

    data.map((field) => {
        let newColumns = [];
        header.forEach(element => {
            newColumns.push(field[element]);
        });
        return table.push(newColumns);
    });

    console.log(table.toString());
};
```

---
## 5 Instantiating the Database class
Here, a new `database` object is instantiated, where the arguments (`args`) received by the terminal are passed to the `execute` method which, as we have seen, will carry out the logic and run the command to manipulate the database.
```js
const Database = require('./src/database');
const database = new Database();
const chalk = require('chalk');

const newDatabase = function (args) {
    try {
        database.execute(args);
    } catch (error) {
        console.log(`${chalk.red.bold(error.message)}`);
    }
};

let args = process.argv.splice(2, process.argv.length - 1).join(' ');

newDatabase(args);
```
---
## 6 Running the CLI
Using the following commands, we are going to create a table in our database that in the end will be saved in a json file.

### 6.1 Creating a table
Let's create a table called **"authors"** with the fields **"name, age, city, state and country"**.
An **"Id"** field with a unique numeric value will also be automatically added to be our primary key for each record.
In the terminal we pass the query:
```
dbgen "create table authors (name varchar(50), age int, city varchar(50), state varchar(50), country varchar(50))"
```
Doing a query we can see the table created, but without any records yet:
```
dbgen "select * from authors"

╔════╤══════╤═════╤══════╤═══════╤═════════╗
║ ID │ NAME │ AGE │ CITY │ STATE │ COUNTRY ║
╚════╧══════╧═════╧══════╧═══════╧═════════╝

```

### 6.2 Inserting records
Let's insert some records into the table with the commands below:
```
dbgen "insert into authors (name, age, city, country) values (Martin Fowler, 57, Walsall, England)"
dbgen "insert into authors (name, age, city, country) values (Linus Torvalds, 51, Helsinki, Finland)"
dbgen "insert into authors (name, age, state, country) values (Douglas Crockford, 66, Minnesota, EUA)"
```
Making a new query we can see the table with the inserted records:
```
dbgen "select * from authors"

╔══════════╤═══════════════════╤═════╤══════════╤═══════════╤═════════╗
║ ID       │ NAME              │ AGE │ CITY     │ STATE     │ COUNTRY ║
╟──────────┼───────────────────┼─────┼──────────┼───────────┼─────────╢
║ 5dbd7b0e │ Martin Fowler     │ 57  │ Walsall  │ null      │ England ║
╟──────────┼───────────────────┼─────┼──────────┼───────────┼─────────╢
║ 1fa31324 │ Linus Torvalds    │ 51  │ Helsinki │ null      │ Finland ║
╟──────────┼───────────────────┼─────┼──────────┼───────────┼─────────╢
║ 294e8872 │ Douglas Crockford │ 66  │ null     │ Minnesota │ EUA     ║
╚══════════╧═══════════════════╧═════╧══════════╧═══════════╧═════════╝

```

### 6.3 Making a specific query
We can also make a query by passing a specific field:
```
dbgen "select id, name, age from authors where name = Linus Torvalds"

╔══════════╤════════════════╤═════╗
║ ID       │ NAME           │ AGE ║
╟──────────┼────────────────┼─────╢
║ 1fa31324 │ Linus Torvalds │ 51  ║
╚══════════╧════════════════╧═════╝

```

### 6.4 Deleting record
Finally, we can delete a record from the table with the command:
```
dbgen "delete from authors where name = Martin Fowler"
```
Let's now query the table and see the result:  
```
dbgen "select * from authors"

╔══════════╤═══════════════════╤═════╤══════════╤═══════════╤═════════╗
║ ID       │ NAME              │ AGE │ CITY     │ STATE     │ COUNTRY ║
╟──────────┼───────────────────┼─────┼──────────┼───────────┼─────────╢
║ 1fa31324 │ Linus Torvalds    │ 51  │ Helsinki │ null      │ Finland ║
╟──────────┼───────────────────┼─────┼──────────┼───────────┼─────────╢
║ 294e8872 │ Douglas Crockford │ 66  │ null     │ Minnesota │ EUA     ║
╚══════════╧═══════════════════╧═════╧══════════╧═══════════╧═════════╝

```
---
## 7 Json with database
Table format and fields recorded in the `db.json` file that works as our database.

```json
{
    "authors": {
        "columns": {
            "id": "SERIAL NOT NULL",
            "name": "varchar(50)",
            "age": "int",
            "city": "varchar(50)",
            "state": "varchar(50)",
            "country": "varchar(50)"
        },
        "data": [
            {
                "id": "1fa31324",
                "name": "Linus Torvalds",
                "age": "51",
                "city": "Helsinki",
                "country": "Finland",
                "state": "null"
            },
            {
                "id": "294e8872",
                "name": "Douglas Crockford",
                "age": "66",
                "state": "Minnesota",
                "country": "EUA",
                "city": "null"
            }
        ]
    }
}
```
---
## 8 Contribute
Feel free to fork and test, fix bugs, implement more features like an update query.  
**Source Code:** https://github.com/GuiSAlmeida/dbgen-cli

---
## 9 Conclusion
This project helped me a lot to put into practice new ES6+ javascript concepts, as well as to exercise the logic of how a database works.
So, what did you think of this project? Do you have any suggestions or criticism? Leave a reaction or a comment below. And thanks for visiting! 😉