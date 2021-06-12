---
title: Meu próprio SGDB em JS pelo terminal
description: O "DBGen" é um SGDB bem simples que roda por CLI, criado para
  estudar as práticas de comandos SQL, funcionamento de um banco de dados e
  conceitos  do javascript ES6.
date: 2021-06-12 11:40:16
thumbnailImage: ../../static/assets/img/dbgen.png
category: project
---
## Índice

```toc
exclude: Índice
```

## 1. Introdução
Este é um projeto estudo de caso feito para praticar conceitos do javascript ES6+. Como: `classes`, `arrow function`, `destructuring`, `template strings`, `iterators for in & for of`, `map & set`, `promises`, `rest & spread operator`, entre outros.  
Também pude entender melhor o funcionamento de um SGDB e banco de dados. Criando tabelas e lógicas para consulta e alteração dos dados no banco.  

### 1.1 O que é um SGDB
É um sistema responsável pelo gerenciamento de um ou mais bancos de dados. Seu principal objetivo é retirar da aplicação cliente a responsabilidade de gerenciar o acesso, a persistência, a manipulação e a organização dos dados. O SGBD disponibiliza uma interface para que seus clientes possam incluir, alterar ou consultar dados previamente armazenados.
Exemplos de SGDBs: `PostgreSQL`, `MongoDB`, `MySQL`, `MariaDB` e `Oracle`.

## 2. Classe Database
A lógica principal do código fica organizada na classe database, onde são definidos os métodos como o `createTable` que ao ser chamado cria uma nova tabela no banco de acordo com os dados passados no terminal. Quem define o comando que será chamado é o método `execute` que retorna uma promise invocando o comando.
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

## 3. Parse dos comandos com Map
Aqui são definidas as queries para manipulação de dados no banco, usando `Map` para setar os comandos por pares, onde a chave possui os nomes dos métodos da nossa classe Database e os valores são `regex` que por meio de grupos de captura auxiliam no processo de separar cada campo(coluna) do registro(linha) na tabela.
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


## 4. Utils
Aqui ficam separadas algumas funções utilitárias.

### 4.1 GenerateId
Função que cria um número randômico para **Chave primária**(Id) para cada campo criado na tabela.
```js
const crypto = require('crypto');

module.exports = function generateId(){
    return crypto.randomBytes(4).toString('HEX');
}
```
### 4.2 SaveJson  
Função que salvo os dados da tabela em arquivo no formato `Json`.
```js
const fs = require('fs');

module.exports = function saveJSON(file, data) {
    fs.writeFile(file, data, (error) => {
        if (error) throw error;
    });
};
```

### 4.3 LoadJson  
Função que lê os dados da tabela no arquivo `Json` se existir.
```js
const fs = require('fs');

module.exports = function loadJSON (filename = ''){
    return JSON.parse(
        fs.existsSync(filename) ? fs.readFileSync(filename, 'utf8') : '""'
    );
};
```

### 4.4 ShowTable
Com auxílio da lib [cli-table](https://github.com/Automattic/cli-table), a função renderiza a tabela no terminal assim que algum comando de consulta é passado.

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


## 5. Instanciando a classe Databasse (index)
Aqui é instanciado um novo objeto `database`, onde os argumentos(`args`) recebidos pelo terminal são passados para o método `execute` que como já vimos vai fazer a lógica e rodar o comando para manipular o banco.
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

## 6. Executando a CLI
Usando os comandos a seguir, vamos criar uma tabela no nosso banco que no fim será salvo em arquivo json.  

### 6.1 Criando tabela
Vamos criar uma tabela chamada **"authors"** com os campos **"name, age, city, state e country"**.  
Também será adicionada automaticamente um campo **"Id"** com valor numérico unico para ser nossa chave primária de cada registro.
No terminal passamos a query:
```sh
dbgen "create table authors (name varchar(50), age int, city varchar(50), state varchar(50), country varchar(50))"
```
Fazendo uma consulta já podemos ver a tabela criada, porém sem nenhum registro ainda:
```sh
dbgen "select * from authors"

╔════╤══════╤═════╤══════╤═══════╤═════════╗
║ ID │ NAME │ AGE │ CITY │ STATE │ COUNTRY ║
╚════╧══════╧═════╧══════╧═══════╧═════════╝

```

### 6.2 Inserindo registros
Vamos inserir alguns registros na tabela com os comandos abaixo:
```sh
dbgen "insert into authors (name, age, city, country) values (Martin Fowler, 57, Walsall, England)"
dbgen "insert into authors (name, age, city, country) values (Linus Torvalds, 51, Helsinki, Finland)"
dbgen "insert into authors (name, age, state, country) values (Douglas Crockford, 66, Minnesota, EUA)"
```
Fazendo uma nova consulta já podemos ver a tabela com os registros inseridos:
```sh
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

### 6.3 Fazendo uma consulta especifica
Podemos também fazer uma query de consulta passando um campo especifico:
```sh
dbgen "select id, name, age from authors where name = Linus Torvalds"

╔══════════╤════════════════╤═════╗
║ ID       │ NAME           │ AGE ║
╟──────────┼────────────────┼─────╢
║ 1fa31324 │ Linus Torvalds │ 51  ║
╚══════════╧════════════════╧═════╝

```

### 6.4 Deletando registro
Por fim podemos deletar um registro da tabela com o comando:
```sh
dbgen "delete from authors where name = Martin Fowler"
```
Vamos consultar agora a tabela e ver o resultado:
```sh
dbgen "select * from authors"

╔══════════╤═══════════════════╤═════╤══════════╤═══════════╤═════════╗
║ ID       │ NAME              │ AGE │ CITY     │ STATE     │ COUNTRY ║
╟──────────┼───────────────────┼─────┼──────────┼───────────┼─────────╢
║ 1fa31324 │ Linus Torvalds    │ 51  │ Helsinki │ null      │ Finland ║
╟──────────┼───────────────────┼─────┼──────────┼───────────┼─────────╢
║ 294e8872 │ Douglas Crockford │ 66  │ null     │ Minnesota │ EUA     ║
╚══════════╧═══════════════════╧═════╧══════════╧═══════════╧═════════╝

```

## 7. Json com banco de dados
Formato da tabela e campos gravados no arquivo `db.json` que funciona como nosso banco.

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

## 8. Contribua
Fique a vontade para fazer fork e testar, ajustar bugs, implementar mais features como uma query de update #ficaadica.  
https://github.com/GuiSAlmeida/dbgen-cli


## 9. Conclusão
Este projeto me ajudou muito a por em prática novos conceitos do javascript ES6, como também exercitar lógica de como funciona um banco de dados.  
E aí, o que achou desse projeto? Tem alguma sugestão ou crítica? Deixa uma reação ou um comentário aqui embaixo. E obrigado pela visita! 😉