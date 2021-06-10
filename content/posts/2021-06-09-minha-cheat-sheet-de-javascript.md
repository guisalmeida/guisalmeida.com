---
title: 'Minha "Cheat Sheet" de Javascript '
description: Este post resume em métodos e exemplos o que pude aprender
  estudando javascript, onde tive ideia de criar essa "cola" para me auxiliar em
  futuras dúvidas. Espero que auxilie também os iniciantes na linguagem a
  acelerar sua curva de aprendizado e aos mais experientes a relembrarem alguns
  conceitos esquecidos.
date: 2021-06-09 08:02:55
thumbnailImage: ../../static/assets/img/jsssss.jpg
category: blog
---
## 1. Tipos de dados
**`typeof`**  
_Retorna o tipo de dado._
``` JS
//exemplo:
> typeof 10;
'number'
> typeof "JavaScript";
'string'
> typeof true;
'boolean'
> typeof Symbol("iterator");
'symbol'
> typeof null;
'object'
> typeof undefined;
'undefined'
```
---

### 1.1 Number

**`Number`**  
_Converte string passada por parâmetro para número elevado a base decimal._
``` JS
//exemplo:
> Number("9.9");
9.9
> Number("0xFF");
255
> Number("0b10");
2
> Number("0o10");
8
> Number();
0
> Number("JavaScript");
NaN
```
---
**`isNaN`**  
_Retorna booleano que verifica se o parâmetro passado é **NaN**._  
⚠️ Se usarmos operadores booleanos para comparar, mesmo sendo igual retorna false. Por isso usar a função isNaN().
``` JS
//exemplo:
> NaN === NaN
false
> isNaN(NaN)
true
```
---
**`toExponential`**  
_Retorna o numero elevado a notação cientifica, especificando o número de casas após a virgula como parâmetro da função._
``` JS
//exemplo:
> (123.4).toExponential(10);
'1.2340000000e+2'
```
---
**`toFixed`**  
_Retorna o numero com uma quantidade de casas após a virgula passado como parâmetro da função._
``` JS
//exemplo:
> (123.4).toFixed(10);
'123.4000000000'
```
---
**`toPrecision`**  
_Retorna o numero total de algarismos, que é passado como parâmetro da função._
``` JS
//exemplo:
> (123.4).toPrecision(10);
'123.4000000'
```
---
**`parseInt`**  
_Recebe uma string como parâmetro da função e retorna numero decimal, ou de outra base que deve ser passada com segundo parâmetro._  
⚠️ As casas após a virgula nesse caso são perdidas.
``` JS
//exemplo:
> parseInt("10");
10
> parseInt("9.9", 10);
9
> parseInt("A", 16);
10
> parseInt("11", 2);
3
> parseInt("010", 8);
8
```
---
**`parseFloat`**  
_Recebe uma string como parâmetro da função e retorna numero decimal com casas após a virgula, ao contrário do parseInt não recebe outra base que deve ser passada como segundo parâmetro._
``` JS
//exemplo:
> parseFloat("10");
10
> parseFloat("2.5");
2.5
> parseFloat("0xFF");
0
> parseFloat("a");
NaN
```
---
**`toString`**  
_Retorna uma string do numero convertido na base passada como parâmetro da função._  
⚠️ O Javascript aceita 4 tipos de base numérica: **decimal(10), hexadecimal(16), binario(2) e octal(8)**.
``` JS
//exemplo:
> (10).toString(10) // convertendo para string em decimal
'10'
> (10).toString(16) // convertendo para string em hexadecimal
'a'
> (10).toString(2) // convertendo para string em binário
'1010'
> (10).toString(8) // convertendo para string em octal
'12'
```
---
#### 1.1.1 Math Api
Math é um objeto que possui varias funções matemáticas na linguagem.

**`Math.sign`**  
_Retorna numero 1 se o parâmetro for positivo e -1 se o parâmetro for negativo._
``` JS
//exemplo:
> Math.sign(5);
1
> Math.sign(-5);
-1
```
---
**`Math.abs`**  
_Retorna numero convertido para positivo._
``` JS
//exemplo:
> Math.abs(-10)
10
```
---
**`Math.ceil`**  
_Retorna numero arredondado para próximo inteiro para cima._
``` JS
//exemplo:
> Math.ceil(1.1);
2
> Math.ceil(-1.1);
-1
```
---

**`Math.floor`**  
_Retorna numero arredondado para próximo inteiro para baixo._
``` JS
//exemplo:
> Math.floor(9.9);
9
> Math.floor(-9.9);
-10
```
---

**`Math.round`**  
_Arredonda o número para cima se a
parte decimal for de 5 a 9 e para baixo se for
de 0 a 4._  
⚠️ Para números negativos inverte a orderm.
``` JS
//exemplo:
> Math.round(4.4);
4
> Math.round(4.5);
5
> Math.round(4.6);
5
> Math.round(-4.4);
-4
> Math.round(-4.5);
-4
> Math.round(-4.6);
-5
```
---

**`Math.trunc`**  
_Elimina a parte decimal do número,
tornando-o um inteiro._
``` JS
//exemplo:
> Math.trunc(2.3);
2
> Math.trunc(-2.3);
-2
```
---

**`Math.min`**  
_Retorna o menor número passado por
parâmetro._
``` JS
//exemplo:
> Math.min(1,2,3,4,5,6);
1
```
---

**`Math.max`**  
_Retorna o maior número passado por
parâmetro._
``` JS
//exemplo:
> Math.max(1,2,3,4,5,6);
6
```
---

**`Math.random`**  
_Retorna um número randômico entre
0 e 1, não incluindo o 1._  
⚠️ Para resultado maior que 1 casa decimal basta multiplicá-lo.
``` JS
//exemplo:
> Math.random();
0.8942857287859916
> Math.trunc(Math.random() * 100)
88
```
---
### 1.2 String

**`length`**  
_Retorna o tamanho da String._
``` JS
//exemplo:
> "JavaScript".length;
10
```
---
**`indexOf`**  
_Retorna a primeira posição encontrada do caractere passado por parâmetro._
``` JS
//exemplo:
> "PHP".indexOf("p");
0
```

---
**`lastIndexOf`**  
_Retorna a última posição encontrada do caractere passado por parâmetro._
``` JS
//exemplo:
> "PHP".lastIndexOf("P");
2
```

---
**`toUpperCase`**  
_Retorna uma nova String convertendo as letras para maiúsculas._
``` JS
//exemplo:
> "cobol".toUpperCase();
'COBOL'
```

---
**`toLowerCase`**  
_Retorna uma nova String convertendo as letras para minúscula._
``` JS
//exemplo:
> "ALGOL".toLowerCase();
'algol'
```

---
**`charAt`**  
_Retorna o caractere na posição passada por parâmetro ._
``` JS
//exemplo:
> "JavaScript".charAt(1);
'a'
```

---
**`charCodeAt`**  
_Retorna o código com base na posição passada por parâmetro._
``` JS
//exemplo:
> "JavaScript".charCodeAt(1);
97
```

---
**`String.fromCharCode`**  
_Retorna um caractere com base no código passado por parâmetro._
``` JS
//exemplo:
> String.fromCharCode(97);
'a'
```

---
**`includes`**  
_Retorna boolenao verificando se a String contém a String passada por parâmetro._
``` JS
//exemplo:
> "JavaScript".includes("Java");
true
```

---
**`startsWith`**  
_Retorna booleano verificando se a String inicia com a String passada por parâmetro._
``` JS
//exemplo:
> "Ruby".startsWith("R");
true
```

---
**`endsWith`**  
_Retorna booleano verificando se a String termina com a String passada por parâmetro._
``` JS
//exemplo:
> "Erlang".endsWith("lang");
true
```

---
**`localeCompare`**  
_Retorna número -1, 0 ou 1 de acordo com a String passada por parâmetro for maior, igual ou menor que a que está sendo verificada._
``` JS
//exemplo:
> "a".localeCompare("b");
-1  // a < b
> "a".localeCompare("a");
0  // a == a
> "b".localeCompare("a");
1  // b > a
```  
⚠️ Caracteres com acento que são posição maiores, também são recolocados conforme a letra, tornando essa função muito prática e importante.  
```js
"á" < "b"
false // o "à" é maior que "b" por causa do charCode
"á".localeCompare("b")
-1 // a função traz o "à" como se fosse o "a" normal para comparação
```
--- 
**`match`**  
_Retorna `Array` com partes da String com base na RegExp passada por parâmetro._  
⚠️ _Só aceita **`regexp`** como parâmetros._
``` JS
//exemplo:
//neste caso foi usado regexp onde a barra \ serva para escapar o +, o G serve para localizar todos as ocorrências.
> "C++".match(/\+/g); 
[ '+', '+' ]
```

---
**`search`**  
_Retorna `Number` com valor do indice da primeira posição encontrada com base na RegExp passada por parâmetro._  
⚠️  _Só aceita **`regexp`** como parâmetros._
``` JS
//exemplo:
> "Java".search(/a/); 
1
```
---
**`replace`**  
_Retorna `String` resultante da substituição da String ou RegExp passada no primeiro parâmetro pelo segundo parâmetro._  
``` JS
//exemplo:
> "JavaScript".replace("Java", "Ecma");
'EcmaScript'
> "JavaScript".replace(/a/g, 4); 
'J4v4Script'
```

---
**`slice`**  
_Retorna uma parte da String que está invocando a função iniciando na posição passada no primeiro parâmetro até a posição final passada no segundo parâmetro, ou da posição passada no primeiro parâmetro até o fim caso o segundo parâmetro não seja informado._
``` JS
//exemplo:
> "JavaScript".slice(0, 4);
'Java'
> "JavaScript".slice(4);
'Script'
> "JavaScript".slice(0, -6);
'Java'
> "JavaScript".slice(-6);
'Script'
```

---
**`split`**  
_Retorna um `array` contendo o resultado da divisão da String original de acordo com o critério passado por parâmetro._
``` JS
//exemplo:
> "C;Java;JavaScript;Ruby".split(";");
[ 'C', 'Java', 'JavaScript', 'Ruby' ]

```
---
**`substring`**  
_Similar ao slice, **não aceita valores negativos como parâmetro e permite a inversão dos parâmetros**._
``` JS
//exemplo:
> "JavaScript".substring(0, 4);
'Java'
> "JavaScript".substring(4, 0);
'Java'
> "JavaScript".substring(4);
'Script'
```
---

**`concat`**  
_Retorna uma nova String resultante da concatenação da que está invocando a função e da outra, passada por parâmetro._
``` JS
//exemplo:
> "Java".concat("Script");
'JavaScript'
> "Data".concat("Flex");
'DataFlex'
```

---
**`padStart`**  
_Completa a String com caracteres no início._
``` JS
//exemplo:
> "Script".padStart(10, "Java");
'JavaScript'
```

---
**`padEnd`**  
_Completa a String com caracteres no fim._
``` JS
//exemplo:
> "C".padEnd(3, "+");
'C++'
```
---

**`repeat`**  
_Repete um caractere._
``` JS
//exemplo:
> "C".concat("+".repeat(2));
'C++'
```

---
**`trim`**  
_Elimina espaços em branco no início e no fim._
``` JS
//exemplo:
> " Self ".trim();
'Self'
```

---
**`trimLeft`**  
_Elimina espaços em branco no início._
``` JS
//exemplo:
> " Scheme ".trimLeft();
'Scheme '
```

---
**`trimRight`**  
_Elimina espaços em branco no fim._
``` JS
//exemplo:
> " Perl ".trimRight();
' Perl'
```
---
### 1.3 Boolean
**`true ou false`**  
_Apenas esses seis casos retornan false, qualquer outro valor é definido como verdadeiro._
``` JS
//exemplo:
> !!0;
false
> !!NaN;
false
> !!"";
false
> !!false;
false
> !!undefined;
false
> !!null;
false
```
---
### 1.4 Object

**`delete`**  
_Apaga propriedade do objeto._
``` JS
//exemplo:
> delete book.available;
```
---
**`hasOwnProperty`**  
_utilizado para determinar se uma propriedade pertence ao objeto._
``` JS
//exemplo:
const javascript = {
    name: "JavaScript",
    year: 1995
};

console.log(javascript.hasOwnProperty(name)); 
//true
console.log(javascript.hasOwnProperty(paradigm)); 
//false
```
---

#### 1.4.1 Object Api
**`Object.create`**  
_permite a interação com o protótipo do objeto._
```js
//exemplo:
const functionalLanguage = {
    paradigm: "Functional"
};
const scheme = Object.create(functionalLanguage);
scheme.name = "Scheme";
scheme.year = 1975;
```
---
**`Object.assign`**  
_faz a cópia das propriedades dos objetos passados por parâmetro para o objeto alvo, que é retornado._
```js
//exemplo:
const javascript = Object.create({});
Object.assign(javascript, {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
});
console.log(javascript);
//{ name: 'JavaScript',
//  year: 1995,
//  paradigm: 'OO and Functional',
//  author: 'Brendan Eich',
//  influencedBy: 'Java, Scheme and Self' }

```
---
**`Object.getPrototypeOf`**  
_permite a interação com o protótipo do objeto._
```js
//exemplo:
const functionalLanguage = Object.create({});
functionalLanguage.paradigm = "Functional";
const javascript = Object.create(functionalLanguage);
javascript.name = "JavaScript";
javascript.year = 1995;
javascript.paradigm = "OO";
console.log(Object.getPrototypeOf(javascript).paradigm); 
//"Functional"
```
---
**`Object.setPrototypeOf`**  
_permite a interação com o protótipo do objeto._
``` JS
//exemplo:
const functionalLanguage = {
    paradigm: "Functional"
};
const scheme = {
    name: "Scheme",
    year: 1975
};
console.log(Object.setPrototypeOf(scheme, functionalLanguage));
//const scheme = {
//  name: "Scheme",
//  year: 1975,
//  paradigm: "Functional"
//};
//
```
---
**`Object.keys`**  
_Retorna as chaves das propriedades do objeto em um `array`._
```js
//exemplo:
const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
console.log(Object.keys(javascript));
//[ 'name', 'year', 'paradigm' ]
```

---
**`Object.values`**  
_Retorna os valores das propriedades do objeto em um `array`._
```js
//exemplo:
const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
console.log(Object.values(javascript));
//[ 'JavaScript', 1995, 'OO and Functional' ]
```

---
**`Object.entries`**  
_Retorna as propriedades do objeto em pares de chave e valor em um `array` cada par e depois dentro de outro `array` que engloba todos._
```js
//exemplo:
const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
console.log(Object.entries(javascript));
//[ [ 'name', 'JavaScript' ],
//  [ 'year', 1995 ],
//  [ 'paradigm', 'OO and Functional' ] ];
```

---
**`Object.is`**  
_Compara dois objetos, considerando os tipos de dados, de forma similar ao operador === retornando um booleano._
```js
//exemplo:
const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
console.log(Object.is(javascript, javascript));
//true
```
---
**`Object.defineProperty`**  
_Operação que permite configurar varios aspectos de uma determinada propriedade, recebe como parâmetros **(object, keys, {properties}**)._
> **Properties**  
> `value` – _Define o valor de uma determinada propriedade._  
> `configurable` – _Permite que uma determinada propriedade seja apagada._  
> `enumerable` – _Permite que uma determinada propriedade seja enumerada._  
> `writable` – _Permite que uma determinada propriedade tenha seu valor modificado._
```js
//exemplo:
const javascript = {};
Object.defineProperty(javascript, "name", {
    configurable: true,
    enumerable: true,
    value: "JavaScript",
    writable: true
});
javascript.name = "ECMAScript";
console.log(javascript);
//{ name: 'ECMAScript' }
console.log(Object.keys(javascript));
//[ 'name' ]
console.log(Object.values(javascript));
//[ 'ECMAScript' ]
console.log(Object.entries(javascript));
//[ [ 'name', 'ECMAScript' ] ]
```
---
**`Object.preventExtensions`**  
_Impede que o objeto tenha novas propriedades, mas permite modificar ou remover as propriedades existentes._  
⚠️ Sempre que são aplicadas essas alterações no objeto ele se torna **imutável**.
```js
//exemplo:
const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
Object.preventExtensions(javascript);
javascript.name = "ECMAScript";
javascript.author = "Brendan Eich";
delete javascript.year;
console.log(javascript);
//{ name: 'ECMAScript', paradigm: 'OO and Functional' }
console.log(Object.isExtensible(javascript));
//false
```
---
**`Object.seal`**  
_Impede que o objeto tenha novas propriedades ou apague propriedades existentes, mas permite modificar propriedades existentes._  
⚠️ Sempre que são aplicadas essas alterações no objeto ele se torna **imutável**.
```js
//exemplo:
const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
Object.seal(javascript);
javascript.name = "ECMAScript";
javascript.author = "Brendan Eich";
delete javascript.year;
console.log(javascript);
//{ name: 'ECMAScript', year: 1995, paradigm: 'OO and Functional' }
console.log(Object.isExtensible(javascript));
//false
console.log(Object.isSealed(javascript));
//true
```
---
**`Object.freeze`**  
_Impede que o objeto tenha novas propriedades, apague ou modifique propriedades existentes._  
⚠️ Sempre que são aplicadas essas alterações no objeto ele se torna **imutável**.
```js
//exemplo:
const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
Object.freeze(javascript);
javascript.name = "ECMAScript";
javascript.author = "Brendan Eich";
delete javascript.year;
console.log(javascript);
// { name: 'JavaScript', year: 1995, paradigm: 'OO and Functional' }
console.log(Object.isExtensible(javascript));
// false
console.log(Object.isSealed(javascript));
// true
console.log(Object.isFrozen(javascript));
// true
```
---
## 1.5 Json
É um formato de intercâmbio de dados.  

**`JSON.stringfy`**  
_converte um determinado tipo de dado para JSON._
```js
//exemplo:
console.log(JSON.stringify(10));
console.log(JSON.stringify("JavaScript"));
console.log(JSON.stringify(true));
console.log(JSON.stringify(false));
console.log(JSON.stringify({name: "Self", paradigm: "OO"}));
console.log(JSON.stringify([1,2,3,4,5,6,7,8,9]));
console.log(JSON.stringify(null));
// '10'
// '"JavaScript"'
// 'true'
// 'false'
// '{"name":"Self","paradigm":"OO"}'
// '[1,2,3,4,5,6,7,8,9]'
// 'null'
```
---
**`JSON.parse`**  
_converte um JSON para um determinado tipo de dado._
```js
//exemplo:
console.log(JSON.parse('10'));
console.log(JSON.parse('"JavaScript"'));
console.log(JSON.parse('true'));
console.log(JSON.parse('false'));
console.log(JSON.parse('{"name": "Self","paradigm": "OO"}'));
console.log(JSON.parse('[1,2,3,4,5,6,7,8,9]'));
console.log(JSON.parse('null'));
// 10
// 'JavaScript'
// true
// false
// { name: 'Self', paradigm: 'OO' }
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// null
```
---
### 1.6 Function
**`arguments`**  
_variável implícita para acessar os parâmetros da função invocada._
```js
//exemplo:
function sum() {
    console.log(arguments)
};
sum(1,2,3,4,5);
// { '0': 1,
//  '1': 2,
//  '2': 3,
//  '3': 4,
//  '4': 5
// }
```
---
**`rest parameter (...)`**  
_parâmetro da função que retorna um **array** com os parâmetros passados agrupados._  
⚠️ Deve ser sempre o último da lista parâmetros.
```js
//exemplo:
let sum = function(a, b, c, ...numbers) {
    let total = a + b + c;
    for(let number of numbers) {
        total += number;
    }
    return total;
};
console.log(sum(1,2,3,4,5,6,7,8,9));
// 45
```
---
**`this`**  
_variável implícita que faz referência para o objeto responsável pela sua invocação._
```js
//exemplo:
const rectangle = {
    x: 10,
    y: 2,
    calculateArea: function() {
        return this.x * this.y;
    }
};
console.log(rectangle.calculateArea());
// 20
```
---
**`call`**  
_operação onde é possível invocar uma função passando o **this** por parâmetro._  
⚠️ O primeiro parâmetro deve ser sempre o this.
```js
//exemplo:
const calculateArea = function(fn) {
    return fn(Math.PI * Math.pow(this.radius, 2));
};
const circle = {
    radius: 10,
    calculateArea
};
console.log(calculateArea.call(circle, Math.round));
// 314
```
---
**`apply`**  
_operação onde é possível invocar uma função passando o **this** por parâmetro._  
⚠️ O primeiro parâmetro deve ser sempre o this. A partir do segundo, os parâmetros devem ser passados dentro de um array.
```js
//exemplo:
const calculateArea = function(fn) {
    return fn(Math.PI * Math.pow(this.radius, 2));
};
const circle = {
    radius: 10,
    calculateArea
};
console.log(calculateArea.apply(circle, [Math.ceil]));
// 315
```
---
**`bind`**  
_operação que permite encapsular o **this** dentro da função, retornando-a._
```js
//exemplo:
const calculateArea = function(fn) {
    return fn(Math.PI * Math.pow(this.radius, 2));
};
const circle = {
    radius: 10,
    calculateArea
};
const calculateAreaForCircle = calculateArea.bind(circle);
console.log(calculateAreaForCircle(Math.round));
// 314
console.log(calculateAreaForCircle(Math.ceil));
// 315
```
---
**`new`**  
_operador que permite criar uma função construtora que retorna um novo objeto ao ser invocada._
```js
//exemplo:
const Person = function(name, city, year) {
    this.name = name,
    this.city = city,
    this.year = year,
    this.getAge = function() {
        return ((new Date()).getFullYear() - this.year);
    }
};
const person1 = new Person("Linus Torvald", "Helsinki", 1969);
const person2 = new Person("Bill Gates", "Seattle", 1955);
console.log(person1);
// Person {
//   name: 'Linus Torvald',
//   city: 'Helsinki',
//   year: 1969,
//   getAge: [Function] }
console.log(person1.getAge());
// 51
console.log(person2);
// Person {
//   name: 'Bill Gates',
//   city: 'Seattle',
//   year: 1955,
//   getAge: [Function] }
console.log(person2.getAge());
// 65
```
---
**`prototype`**  
*propriedade que é vinculada ao **\_\_proto\_\_** do objeto criado pelo operador new.*
```js
//exemplo:
const Person = function(name, city, year) {
    this.name = name,
    this.city = city,
    this.year = year
};
Person.prototype.getAge = function() {
    return ((new Date()).getFullYear() - this.year);
};
const person1 = new Person("Linus Torvald", "Helsinki", 1969);
const person2 = new Person("Bill Gates", "Seattle", 1955);
console.log(person1);
// Person {
//   name: 'Linus Torvald',
//   city: 'Helsinki',
//   year: 1969,
//   getAge: [Function] }
console.log(person1.getAge());
// 51
console.log(person2);
// Person {
//   name: 'Bill Gates',
//   city: 'Seattle',
//   year: 1955,
//   getAge: [Function] }
console.log(person2.getAge());
// 65
```
---
**`instanceof`**  
_propriedade que é possível verificar se um objeto foi criado por meio de uma determinada função construtora analisando a sua cadeia de protótipos._
```js
//exemplo:
const date = new Date();
console.log(date instanceof Date);
// true
console.log(date instanceof Object);
// true
console.log(date instanceof Array);
// false
```
---
### 1.7 Array
**`length`**  
_Retorna o tamanho do Array._  
⚠️ Elementos vazios não são considerados no length.
``` JS
//exemplo:
const timeUnits = [];
timeUnits[0] = "minute";
timeUnits[1] = "hour";
timeUnits[2] = "day";
console.log(timeUnits.length);
// 3
```
#### 1.7.1 Mutator methods API  
Quando invocados modificam o array.  

**`push`**  
_Adiciona um elemento no final do Array._
``` JS
//exemplo:
const languages = [ "Python", "C", "Java" ];
languages.push("Ruby");
languages.push("Go");
console.log(languages);
// [ 'Python', 'C', 'Java', 'Ruby', 'Go' ]
```
---
**`pop`**  
_Remove um elemento no final do Array._
``` JS
//exemplo:
const languages = [ "Python", "C", "Java", "Ruby", "Go" ];
languages.pop();
console.log(languages);
// [ 'Python', 'C', 'Java', 'Ruby' ]
```
---
**`unshift`**  
_Adiciona um elemento no inicio do Array._
``` JS
//exemplo:
const languages = [ "Python", "C", "Java" ];
languages.unshift("Ruby");
console.log(languages);
// [ 'Ruby', 'Python', 'C', 'Java' ]
```
---
**`shift`**  
_Remove um elemento no inicio do Array._
``` JS
//exemplo:
const languages = [ "Ruby", "Python", "C", "Java" ];
languages.shift();
console.log(languages);
// [ 'Python', 'C', 'Java' ]
```
---
**`splice`**  
_Remove, substitui ou adiciona um ou mais elementos em uma determinada posição do Array._  
⚠️ Retorna um array com os elementos removidos
``` JS
//exemplo:
const languages = ["Python", "C", "Java"];
console.log(languages);
// [ 'Python', 'C', 'Java' ]
console.log(languages.splice(1, 1));
// [ 'C' ]  
console.log(languages);
// [ 'Python', 'Java' ]
console.log(languages.splice(1, 0, "C++", "C#"));
// []
console.log(languages);
// [ 'Python', 'C++', 'C#', 'Java' ]
console.log(languages.splice(1, 2, "C"));
// [ 'C++', 'C#' ]
console.log(languages);
// [ 'Python', 'C', 'Java' ]
```
---
**`sort`**  
_Ordena os elementos de acordo com a função de ordenação._  
⚠️ O retorno com os valores -1 e 0 permanece como está e 1 inverte.
``` JS
//exemplo:
const languages = [
    {
        name: "Python",
        year: 1991
    }, 
    {
        name: "C",
        year: 1972
    },
    {
        name: "Java",
        year: 1995
    }
];
languages.sort(function (a, b) {
    return a.name.localeCompare(b.name); //está comparando se a string a é < = ou > que b
});
console.log(languages);
// [ { name: 'C', year: 1972 },
//   { name: 'Java', year: 1995 },
//   { name: 'Python', year: 1991 } ]
```
---
**`reverse`**  
_Inverte a ordem dos elementos._
``` JS
//exemplo:
const languages = ["Python", "C", "Java"];
languages.reverse();
console.log(languages);
// [ 'Java', 'C', 'Python' ]
languages.reverse();
console.log(languages);
// [ 'Python', 'C', 'Java' ]
```
---
**`fill`**  
_Preenche os elementos de acordo com a posição de início e fim._
``` JS
//exemplo:
const languages = ["Python", "C", "Java"];
languages.fill("JavaScript", 0, 2);
console.log(languages);
// [ 'JavaScript', 'JavaScript', 'Java' ]
```
---
#### 1.7.2 Mutator methods API   
Quando invocados iteram sobre os elementos do array.

**`forEach`**  
_Executa a função passada por parâmetro para cada elemento._
``` JS
//exemplo:
const frameworks = ["Angular.js", "Ember.js", "Vue.js"];
frameworks.forEach(framework => console.log(framework));
// Angular.js
// Ember.js
// Vue.js
```
---
**`filter`**  
_Retorna um novo array contendo somente os elementos que retornaram **true** na função passada por parâmetro._
``` JS
//exemplo:
const frameworks = [
    {
        name: "Angular.js",
        contributors: 1598
    }, 
    {
        name: "Ember.js",
        contributors: 746
    },
    {
        name: "Vue.js",
        contributors: 240
    }
];
const result = frameworks.filter(function (framework) {
    return framework.contributors < 1000;
});
console.log(result);
// [
//    { name: 'Ember.js', contributors: 746 },
//    { name: 'Vue.js', contributors: 240 }
// ]
```
---
**`find`**  
_Retorna o primeiro elemento que retornou **true** na função passada por parâmetro._
``` JS
//exemplo:
const frameworks = [
    {
        name: "Angular.js",
        contributors: 1598
    }, 
    {
        name: "Ember.js",
        contributors: 746
    },
    {
        name: "Vue.js",
        contributors: 240
    }
];
const result = frameworks.find(function (framework) {
    return framework.name === "Angular.js";
});
console.log(result);
// { name: 'Angular.js', contributors: 1598 }
```
---
**`some`**  
_Retorna true se **um ou mais** elementos retornaram true na função passada por parâmetro._
``` JS
//exemplo:
const frameworks = [
    {
        name: "Angular.js",
        contributors: 1598
    }, 
    {
        name: "Ember.js",
        contributors: 746
    },
    {
        name: "Vue.js",
        contributors: 240
    }
];
const result = frameworks.some(function (framework) {
    return framework.name === "Angular.js";
});
console.log(result);
// true
```
---
**`every`**  
_Retorna true se **todos os elementos** retornaram true na função passada por parâmetro._
``` JS
//exemplo:
const frameworks = [
    {
        name: "Angular.js",
        contributors: 1598
    }, 
    {
        name: "Ember.js",
        contributors: 746
    },
    {
        name: "Vue.js",
        contributors: 240
    }
];
const result = frameworks.every(function (framework) {
    return framework.name.includes("js");
});
console.log(result);
// true
```
---
**`map`**  
_Retorna um **novo array** com base no retorno da função passada por parâmetro._
``` JS
//exemplo:
const frameworks = [
    {
        name: "Angular.js",
        contributors: 1598
    }, 
    {
        name: "Ember.js",
        contributors: 746
    },
    {
        name: "Vue.js",
        contributors: 240
    }
];
const result = frameworks.map((framework) => framework.name);
console.log(result);
// [ 'Angular.js', 'Ember.js', 'Vue.js' ]
```
---
**`reduce`**  
_Retorna um valor com base no retorno da função passada por parâmetro._
``` JS
//exemplo:
const frameworks = [
    {
        name: "Angular.js",
        contributors: 1598
    }, 
    {
        name: "Ember.js",
        contributors: 746
    },
    {
        name: "Vue.js",
        contributors: 240
    }
];
const result = frameworks.reduce(function (total, framework) {
    return total + framework.contributors;
}, 0); // o segundo parâmetro do reduce representa a inicialização do acumulador.
console.log(result);
// 2584
```
---
#### 1.7.3 Accessor methods API
Quando invocados retornam informações específicas sobre o array.

**`indexOf`**  
_Retorna a posição do primeiro elemento encontrado._  
⚠️ Se o elemento não for encontrado, retorna -1.
``` JS
//exemplo:
const languages = ["Python", "C", "Java"];
console.log(languages.indexOf("Python"));
// 0
console.log(languages.indexOf("JavaScript"));
// -1
```
---
**`lastIndexOf`**  
_Retorna a posição do último elemento encontrado._  
⚠️ Se o elemento não for encontrado, retorna -1.
``` JS
//exemplo:
const languages = ["Python", "C", "C", "Java"];
console.log(languages.lastIndexOf("C"));
// 2
console.log(languages.lastIndexOf("JavaScript"));
// -1
```
---
**`includes`**  
_Retorna **true** se o elemento existir._
``` JS
//exemplo:
const languages = ["Python", "C", "Java"];
console.log(languages.includes("Python"));
// true
console.log(languages.includes("C"));
// true
console.log(languages.includes("JavaScript"));
// false
```
---
**`concat`**  
_Retorna um novo array resultante da concatenação de um ou mais arrays._
``` JS
//exemplo:
const ooLanguages = ["Smalltalk", "C++", "Simula"];
const functionalLanguages = ["Haskell", "Scheme"];
const languages = [].concat(ooLanguages, functionalLanguages);
console.log(languages);
// [ 'Smalltalk', 'C++', 'Simula', 'Haskell', 'Scheme' ]
```
---
**`slice`**  
_Retorna partes de um determinado array de acordo com a posição de início e fim._
``` JS
//exemplo:
const languages = ["Smalltalk", "C++", "Simula", "Haskell", "Scheme"];
console.log(languages.slice(0, 2));
// [ 'Smalltalk', 'C++' ]
console.log(languages.slice(2, 4));
// [ 'Simula', 'Haskell' ]
console.log(languages.slice(1));
// [ 'C++', 'Simula', 'Haskell', 'Scheme' ]
```
---
**`join`**  
_Converte o array para uma String, juntando os elementos com base em um separador._
``` JS
//exemplo:
const languages = ["Smalltalk", "C++", "Simula", "Haskell", "Scheme"];
console.log(languages.join(","));
// Smalltalk,C++,Simula,Haskell,Scheme
console.log(languages.join(";"))
// Smalltalk;C++;Simula;Haskell;Scheme
console.log(languages.join(" "))
// Smalltalk C++ Simula Haskell Scheme
```
---
### 1.8 Map
_É um objeto que armazena um conjunto de **chaves** e **valores** que podem ser de **qualquer tipo de dado**._
``` JS
//exemplo:
const timeUnits = new Map([['second', 1], ['minute', 60], > ['hour', 3600]]);
console.log(timeUnits);
// Map { 'second' => 1, 'minute' => 60, 'hour' => 3600 }
```
---
**`Array.from`**  
_converte um objeto map de volta em um array de pares._
``` JS
//exemplo:
const timeUnits = new Map([['second', 1], ['minute', 60], ['hour', 3600]]);
console.log(Array.from(timeUnits));
// [ [ 'second', 1 ], [ 'minute', 60 ], [ 'hour', 3600 ] ]
```
---
**`size`**  
_Retorna a quantidade de elementos._
``` JS
//exemplo:
const timeUnits = new Map([['second', 1], ['minute', 60], ['hour', 3600]]);
console.log(timeUnits.size);
// 3
```
---
**`set`**  
_Adiciona um par de chave e valor._
``` JS
//exemplo:
const timeUnits = new Map();
console.log(timeUnits);
// Map {}
timeUnits.set("second", 1);
timeUnits.set("minute", 60);
timeUnits.set("hour", 3600);
console.log(timeUnits);
// Map { 'second' => 1, 'minute' => 60, 'hour' => 3600 }
```
---
**`has`** 
_Returna true se a **chave** existir._
``` JS
//exemplo:
const timeUnits = new Map([['second', 1], ['minute', 60], ['hour', 3600]]);
console.log(timeUnits.has("hour"));
// true
console.log(timeUnits.has("day"));
// false
```
---
**`get`**  
_Retorna o **valor** de uma determinada chave._
``` JS
//exemplo:
const timeUnits = new Map([['second', 1], ['minute', 60], ['hour', 3600]]);
console.log(timeUnits.get("second"));
// 1
console.log(timeUnits.get("minute"));
// 60
console.log(timeUnits.get("hour"));
// 3600
```
---
**`delete`**  
_Remove um par de chave e valor._  
⚠️ retorna um bollean caso a chave exista `true`, caso não exista `false`.
``` JS
//exemplo:
const timeUnits = new Map([['second', 1], ['minute', 60], ['hour', 3600]]);
timeUnits.delete("hour");
console.log(timeUnits);
// Map { 'second' => 1, 'minute' => 60 }
```
---
**`clear`**  
_Remove todos os elementos._
``` JS
//exemplo:
const timeUnits = new Map([['second', 1], ['minute', 60], ['hour', 3600]]);
console.log(timeUnits);
// Map { 'second' => 1, 'minute' => 60, 'hour' => 3600 }
timeUnits.clear();
console.log(timeUnits);
// Map {}
```
---
#### 1.8.1 WeakMap

É um objeto, similar ao Map, que permite apenas chaves do tipo Object e mantém as referências de forma fraca, sendo volátil e não iterável.  
⚠️ Possui apenas os métodos: `set, has, get, delete`.
```JS
// Exemplo:
const areas = new WeakMap();
const rectangle1 = {
    x: 10,
    y: 2
};
const rectangle2 = {
    x: 5,
    y: 3
};
function calculateArea(rectangle) {
    const area = rectangle.x * rectangle.y;
    if (areas.has(rectangle)) {
        console.log("Using cache");
        return areas.get(rectangle);
    }
    areas.set(rectangle, area);
    return area;
}
console.log(calculateArea(rectangle1));
// 20
console.log(calculateArea(rectangle1));
// Using cache
// 20
console.log(calculateArea(rectangle2));
// 15
```
---
### 1.9 Set

_É um objeto que armazena elementos únicos, que podem ser de qualquer tipo de dado._  
Possui os os métodos `size, forEach, has, delete, clear` semelhantes ao **MAP**.  
⚠️ Não deixa os elementos se repetirem dentro de sua estrutura, caso repitam não são adicionados.
```JS
// Exemplo:
const set = new Set();
set.add("10");
set.add("10");
set.add("10");
console.log(set);
// Set { '10' }
console.log(set.size);
// 1
```
Também é possível converter um array em set tirando seus valores repetidos.
```JS
// Exemplo:
const set = new Set();
set.add("10");
set.add("10");
set.add("10");
console.log(set);
// Set { '10' }
console.log(set.size);
// 1
```
---
**`Array.from`**  
_converte um objeto set de volta em um array._
``` JS
//exemplo:
const charsets = new Set(["ASCII", "ISO-8599-1", "UTF-8"]);
console.log(charsets);
// Set { 'ASCII', 'ISO-8599-1', 'UTF-8' }
console.log(Array.from(charsets));
// [ 'ASCII', 'ISO-8599-1', 'UTF-8' ]
```
---
**`add`**  
_Adiciona um elemento ao Set, semelhante ao push do Array e set do Map._
``` JS
//exemplo:
const charsets = new Set();
charsets.add("ASCII");
charsets.add("ISO-8859-1");
charsets.add("UTF-8");
console.log(charsets);
// Set { 'ASCII', 'ISO-8859-1', 'UTF-8' }
```
#### 1.9.1 WeakSet
É um objeto, similar ao Set, que permite apenas valores do tipo Object e mantém as referências de forma fraca, sendo volátil e não iterável.  
⚠️ Possui apenas os métodos: `add, has, delete` semelhantes ao Set.  
```JS
// Exemplo:
const circles = new WeakSet();
function Circle(radius) {
    circles.add(this);
    this.radius = radius;
}
Circle.prototype.calculateArea = function() {
    if (!circles.has(this)) throw "Invalid object";
    return Math.PI * Math.pow(this.radius, 2);
};
const circle1 = new Circle(10);
const circle2 = {
    radius: 5
};
console.log(circle1.calculateArea());
// 314.1592653589793
console.log(circle1.calculateArea.call(circle2));
// /home/guilherme/Documents/JSMasterclass/14_set/0_weakset/weakset_5.js:7
//     if (!circles.has(this)) throw "Invalid object";
//                             ^
// Invalid object
```
---

## 2. Iterables e Iterators

_São convenções implementadas por Arrays, Maps, Sets e Strings que os tornam iteráveis por meio de um protocolo de iteração._  
⚠️ _Todo **Iterable** tem um propriedade de chave **`Symbol.iterator`** que define o protocolo de iteração para o objeto._
```JS
//Exemplo:
 const languages = ["Fortran", "Lisp", "COBOL"];
 const iterator = languages[Symbol.iterator]();

 console.log(iterator.next());
// { value: 'Fortran', done: false }
 console.log(iterator.next());
// { value: 'Lisp', done: false }
 console.log(iterator.next());
// { value: 'COBOL', done: false }
 console.log(iterator.next());
// { value: undefined, done: true }
```
---
**`for of`**  
_Percorre as chaves de um **array***._
``` JS
//exemplo:
var txt = 'Ireland'; // iterable
var it = txt[Symbol.iterator](); // iterator
for ( letter of txt ) {
  console.log(letter);
  if (letter === 'a') break; // para a interação
}
//I
//r
//e
//l
//a
```
---
**`for in`**  
_Percorre as chaves de um **objeto***._
``` JS
//exemplo:
const languages = {
    Fortran: 1957,
    Lisp: 1958,
    COBOL: 1959
};
for (let language in languages) {
    console.log(language + ":" + languages[language]);
}
// Fortran:1957
// Lisp:1958
// COBOL:1959
```
**`spread operator (...)`**  
_Expandi os elementos de um **iterable** em um array._
``` JS
//exemplo:
const classicLanguages = ["Fortran", "Lisp", "COBOL"];
const modernLanguages = ["Python", "Ruby", "JavaScript"]
const languages = [...classicLanguages, ...modernLanguages];
console.log(languages);
// [ 'Fortran', 'Lisp', 'COBOL', 'Python', 'Ruby', 'JavaScript' ]
```
---
## 3. Classes
As classes são um tipo especial de função que atuam como um template para a criação de objetos._  
⚠️ Não sofrem **`hoisting`**. 
```JS
//Exemplo:
const Square = class {}
const square = new Square();
console.log(square);
// Square {}
```
---
**`constructor`**  
_é invocado no momento da instanciação de uma classe e serve para inicializar um determinado objeto._
```js
//exemplo:
class Square {
    constructor(side) {
        this.side = side;
    }
}
const square = new Square(4);
console.log(square);
// Square { side: 4 }
```
---
**`prototype methods`**  
_dependem de uma instância para serem invocados._
```js
//exemplo:
class Square {
    constructor(side) {
        this.side = side;
    }
    
    toString() {
        return `side: ${this.side}`;
    }
}
const square = new Square(4);
console.log(square.toString());
// side: 4
```
---
**`static methods`**  
_não dependem de uma instância para serem invocados._
```js
//exemplo:
class Square {
    constructor(side) {
        this.side = side;
    }
    
    calculateArea() {
        return Math.pow(this.side, 2);
    }

    toString() {
        return `side: ${this.side} area: ${this.calculateArea()}`;
    }

    static fromArea(area) {
        return new Square(Math.sqrt(area));
    }
}
const square = Square.fromArea(16); //método estático que não depende da instanciação de um objeto.
console.log(square.toString());
// side: 4 area: 16
```
---
**`extends`**  
_É possível criar uma hierarquia de classes por meio da palavra-chave extends._
```js
//exemplo:
class Shape {
    constructor(side) {
        this.side = side;
    }
}

class Square extends Shape {
    calculateArea() {
        return Math.pow(this.side, 2);
    }

    toString() {
        return `side: ${this.side} area: ${this.calculateArea()}`;
    }

    static fromArea(area) {
        return new Square(Math.sqrt(area));
    }
}
const square = Square.fromArea(16);
console.log(square.toString());
// side: 4 area: 16
```
---
**`super`**  
_Ao declarar um construtor na subclass é necessário invocar o construtor da superclass por meio **`super()`** antes de utilizar a referência this._
```js
//exemplo:
class Shape {
    toString() {
        return `area: ${this.calculateArea()}`;
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    
    calculateArea() {
        return Math.pow(this.side, 2);
    }

    toString() {
        return `side: ${this.side} ${super.toString()}`;
    }

    static fromArea(area) {
        return new Square(Math.sqrt(area));
    }
}
const square = Square.fromArea(16);
console.log(square.toString());
// side: 4 area: 16
```
---
## 4. Proxy
Um **proxy** é capaz de interceptar diversos tipos de operações em um objeto alvo. Por meio de métodos, chamados de trap, para diversos tipos de eventos relacionados a um objeto como: 
- apply
- construct
- defineProperty
- deleteProperty
- get
- getOwnPropertyDescriptor
- getPrototypeOf
- has
- isExtensible
- ownKeys
- preventExtensions
- set
- setPrototypeOf
---

**`set`**  
_O método set é invocado quando uma propriedade é definida no objeto._  
Recebe como parâmetro (alvo, chave, valor).
```js
//exemplo:
function createArray() {
    return new Proxy({}, {
        set(target, key, value) {
            target.length = target.length || 0;
            target.length++;
            target[key] = value;
        }
    });
}
const languages = createArray();
languages[0] = "Python";
languages[2] = "JavaScript";
console.log(languages);
// {
//     '0': 'Python',
//     '2': 'JavaScript',
//     length: 2
// }
console.log(languages.length);
// 2
```
---
**`deleteProperty`**  
_O método deleteProperty é invocado quando uma propriedade é deletada._  
Recebe como parâmetro (alvo, chave, valor).
```js
//exemplo:
function createArray() {
    return new Proxy({}, {
        set(target, key, value) {
            target.length = target.length || 0;
            target.length++;
            target[key] = value;
        },
        deleteProperty(target, key) {
            if (key in target) {
                target.length--;
                delete target[key];
            }
        }
    });
}
const languages = createArray();
languages[0] = "Python";
languages[1] = "Ruby";
languages[2] = "JavaScript";
console.log(languages);
// { '0': 'Python', '1': 'Ruby', '2': 'JavaScript', length: 3 }
console.log(languages.length);
// 3
delete languages[1];
delete languages[2];
delete languages[3];
console.log(languages);
// { '0': 'Python', length: 1 }
console.log(languages.length);
// 1
```
---
**`get`**  
_O método get é invocado quando uma propriedade é acessada._  
Recebe como parâmetro (alvo, chave, valor).
```js
//exemplo:
function createArray() {
    return new Proxy({}, {
        set(target, key, value) {
            target.length = target.length || 0;
            target.length++;
            target[key] = value;
        },
        get(target, key) {
            if (typeof key === "string" && key.match(/^\d+$/)) {
                if (!(key in target)) {
                    throw `Property ${key} not found`;
                }
            }
            return target[key];
        },
        deleteProperty(target, key) {
            if (key in target) {
                target.length--;
                delete target[key];
            }
        }
    });
}
const languages = createArray();
languages[0] = "Python";
languages[1] = "JavaScript";
console.log(languages[1]);
// JavaScript
console.log(languages[3]);
// Property 3 not found
```
---
## 5. Reflect API
A **Reflect API** tem os mesmos métodos que existem no Proxy, permitindo a execução de diversos tipos de operações no objeto alvo, são eles: 
- apply
- construct
- defineProperty
- deleteProperty
- get
- getOwnPropertyDescriptor
- getPrototypeOf
- has
- isExtensible
- ownKeys
- preventExtensions
- set
- setPrototypeOf  

```js
//exemplo:
function createArray() {
    return new Proxy({}, {
        set(target, key, value) {
            target.length = target.length || 0;
            target.length++;
            Reflect.set(target, key, value); // seta valor na chave do mesmo modo que: target[key] = value
        },
        get(target, key) {
            if (typeof key === "string" && key.match(/^\d+$/)) {
                if (!Reflect.has(target, key)) {
                    throw `Property ${key} not found`;
                }
            }
            return Reflect.get(target, key); // retorna valor da chave do mesmo modo que: target[key]
        },
        deleteProperty(target, key) {
            if (Reflect.has(target, key)) {
                target.length--;
                Reflect.deleteProperty(target, key); // deleta chave do mesmo modo que: delete target[key]
            }
        }
    });
}
const languages = createArray();
languages[0] = "Python";
languages[1] = "JavaScript";
console.log(languages[1]);
// JavaScript
console.log(languages[3]);
// Property 3 not found
```
---
## 6. Modules
No ES6, ou ECMAScript 2015, foi especificado na própria linguagem, baseado no conceito de importação e exportação.  
⚠️ Para utilizar modules no **Node.js** os arquivos devem ter a extensão **`.mjs`** além de executar com a flag **`--experimental-modules`**.  

**`export`**.  
Por meio da palavra-chave export é possível exportar qualquer tipo de dado existente dentro de um módulo._

```js
//exemplo:
export const PI = 3.141592;
export function pow(base, exponential) {
    if (exponential === 0) return 1;
    return base * pow(base, exponential - 1);
}
```
Também podemos importar e exportar de forma padrão utilizando a palavra-chave **`default`**.
```js
//exemplo:
export default class Circle {
    constructor(radius) {
        this.radius = radius;
    }
}
//no outro módulo onde o Circle será importado não será mais necessário o uso das chaves:
import Circle from './Circle';
```
---
**`import`**  
A palavra-chave import faz a importação de qualquer tipo de dado exportado para dentro do módulo.  
⚠️ _Não é permitido realizar a importação e exportação dentro de **blocos**._
```js
//exemplo:
import {PI, pow} from './math';
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get area() {
        return PI * pow(this.radius, 2);
    }
}
const circle = new Circle(10);
```
É possível utilizar um **alias** na importação, renomeando o que estiver sendo importado seguido do **`as`** e o alias.
```js
//exemplo:
import {PI as pi, pow} from './math';
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get area() {
        return pi * pow(this.radius, 2);
    }
}
const circle = new Circle(10);
```
Por meio do **`*`** é possível importar tudo que estiver sendo exportado em um único objeto.
```js
//exemplo:
import * as math from './math';
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get area() {
        return math.PI * math.pow(this.radius, 2);
    }
}
const circle = new Circle(10);
```
---
## 7. Promisses  
As promises são objetos responsáveis por modelar comportamento assíncrono, permitindo o seu tratamento de uma forma mais fácil e direta.  
⚠️ Para criar uma promise basta instanciá-la, executando a função **`resolve`** em caso de sucesso, sendo tratado por meio de **`then`**.  
```js
//exemplo:
function delayedSum(a, b) {
    return new Promise(function (resolve) {
        setTimeout(function() {
            resolve(a + b);
        }, 1000);
    });
}
delayedSum(2, 2).then(function(result) {
    console.log(result);
});
// 4
```
Em caso de fracasso, a função **`reject`** deve ser executada, sendo tratada por meio de **`catch`**.
```js
//exemplo:
function delayedSum(a, b) {
    return new Promise(function (resolve) {
        setTimeout(function() {
            resolve(a + b);
        }, 1000);
    });
}
delayedSum(2, ) // simulando um erro
    .then(function(result) {
        console.log(result);
    }).catch(function (e) {
        console.log(e);
    });
// NaN
```
**`Promise.all`**  
_Podemos executar várias promises ao mesmo tempo, retornando após todas terem sucesso usando **`Promise.all`**_.  
⚠️ _Retorna um **array** com os valaores de cada função executada._
```JS
// Exemplo:
function delayedSum(a, b) {
    return new Promise(function (resolve, reject) {
        if (!a || !b) return reject("Invalid input");
        setTimeout(function() {
            resolve(a + b);
        }, 1000);
    });
}
Promise.all([
    delayedSum(2, 2),
    delayedSum(4, 4)
]).then(function(values) { // values = [4, 8]
    let [a, b] = values;
    return delayedSum(a, b).then(function(result) {
        console.log(result);
    });
}).catch(function (e) {
    console.log(e);
});
// 12
```
**`Promise.race`**  
_Também podemos executar várias promises ao mesmo tempo, retornando após a primeira ter sucesso usando **`Promise.race`**_.  
⚠️ _Retorna **somente** resultado da primeira função retornada._
```JS
// Exemplo:
function delayedSum(a, b) {
    return new Promise(function (resolve, reject) {
        if (!a || !b) return reject("Invalid input");
        setTimeout(function() {
            resolve(a + b);
        }, Math.random() * 1000);
    });
}
Promise.race([
    delayedSum(2, 2),
    delayedSum(4, 4)
]).then(function(value) {
    return delayedSum(value, value).then(function(result) {
        console.log(result);
    });
}).catch(function (e) {
    console.log(e);
});
// 16
```
## 8. Generators  
Os generators tornam possível pausar a execução de uma determinada função, permitindo a utilização do _**event loop**_ de forma cooperativa.  
⚠️ Para criar um **`generator`** basta adicionar **`*`** ao lado da função.  

**`yield`**  
Ao encontrar um _**yield**_, a execução da função é pausada até o método **`next()`** ser invocado novamente.
```js
//exemplo:
function* forever() {
	let value = 1;
	while (true) {
		console.log(value++);
		yield; // pausa e sai do loop...
	}
}

function today() {
	console.log("Passou para today");
}

const foreverGenerator = forever();
foreverGenerator.next();
today();
// 1
// Passou para today
```
Por meio do **`yield`** é possível retornar valores de forma similar ao return no atribudo **`value`** do obj que é retornado.
```JS
// Exemplo:
function* forever() {
	let value = 1;
while (true) {
		yield value++;
	}
}

function today() {
	console.log("Passou para today");
}

const foreverGenerator = forever();
console.log(foreverGenerator.next());
// { value: 1, done: false }
console.log(foreverGenerator.next());
// { value: 2, done: false }
console.log(foreverGenerator.next());
// { value: 3, done: false }
today();
// Passou para today
console.log(foreverGenerator.next());
// { value: 4, done: false }
console.log(foreverGenerator.next());
// { value: 5, done: false }
```
Além disso, também é possível enviar um valor para dentro do generator por meio do método next.
```JS
// Exemplo:
function* forever() {
	let value = 1;
	while (true) {
        let reset = yield value++;  // YIELD recebe valor passado por parametro na invocação no next
        if (reset) value = 1; // quando o valor do yield passado para a variavel RESET retornar true vai atribuir valor 1
	}
}
const foreverGenerator = forever();
console.log(foreverGenerator.next());
 // { value: 1, done: false }
console.log(foreverGenerator.next());
 // { value: 2, done: false }
console.log(foreverGenerator.next(true)); // recebe parãmetro por meio do next
 // { value: 1, done: false }
console.log(foreverGenerator.next());
 // { value: 2, done: false }  
``` 

**`next`**  
Os generators utilizam o método **`next()`** para iterar sobre os valores disponíveis durante a execução da função.
```js
//exemplo:
function* forever() {
	let value = 1;
	while (true) {
		console.log(value++);
	}
}

function today() {
	console.log("Passou para today");
}

const foreverGenerator = forever();
foreverGenerator.next();
today();
// 1
// 2
// dessa forma vai executar infinitamente...
// e não vai passar para próxima função.
```
O retorno do método next é um **objeto** contendo **`value`** e **`done`**, seguindo o protocolo de iteração.
```JS
// Exemplo:
function* forever() {
	let value = 1;
	while (true) {
		console.log(value++);
		yield;
	}
}
const foreverGenerator = forever();
console.log(foreverGenerator.next());
// { value: undefined, done: false }
```

**`return`**  
O método return encerra o generator podendo retornar um valor específico.
```js
//exemplo:
function* forever() {
	let value = 1;
	while (true) {
        let reset = yield value++;
        if (reset) value = 1;
	}
}
const foreverGenerator = forever();
console.log(foreverGenerator.next());
// { value: 1, done: false }
foreverGenerator.return();
console.log(foreverGenerator.next());
// { value: undefined, done: true } não executa o segundo next pois já ouve um return antes
```
O return também pode receber um valor especifico por parâmetro.
```JS
// Exemplo:
function* forever() {
	let value = 1;
	while (true) {
        let reset = yield value++;
        if (reset) value = 1;
	}
}

const foreverGenerator = forever();
console.log(foreverGenerator.next());
// { value: 1, done: false }
console.log(foreverGenerator.return("end"));
// { value: 'end', done: true } 
```

**`throw`**  
O método throw lança uma exceção dentro do generator interrompendo o fluxo de execução caso a exceção não tenha sido tratada adequadamente.
```JS
// Exemplo:
function* forever() {
	let value = 1;
	while (true) {
        try {
            let reset = yield value++;
            if (reset) value = 1;
        } catch (e) {
            console.log(e);
        }
	}
}
const foreverGenerator = forever();
console.log(foreverGenerator.next());
// { value: 1, done: false }
console.log(foreverGenerator.throw("error"));
// { value: 2, done: false }
// error
console.log(foreverGenerator.next());
// { value: 3, done: false }
```

## 9. Async/Await  
O **async/await** facilita a interação com chamadas assíncronas, aguardando o retorno de uma determinada promise.  
```JS
// Exemplo:
function sum(a, b) {
    return new Promise(function(resolve, reject) {
        if (!a || !b) return reject("Invalid input");
        setTimeout(function() {
            resolve(a + b);
        }, 1000);
    });
}

(async function () {
    const a = await sum(2);
    const b = await sum(4, 4);
    const result = await sum(a, b);
    console.log(result);
})();
// Invalid input
// Unhandled promise rejection. aviso de erro não tratado
```
Para tratar possíveis exceções associadas a chamadas assíncronas é possível utilizar um bloco **`try/catch`**.
```JS
// Exemplo:
function sum(a, b) {
    return new Promise(function(resolve, reject) {
        if (!a || !b) return reject("Invalid input");
        setTimeout(function() {
            resolve(a + b);
        }, 1000);
    });
}

(async function () {
    try {
        const a = await sum(2);
        const b = await sum(4, 4);
        const result = await sum(a, b);
        console.log(result);
    } catch (e) {
        console.log(e);
    }
})();
// Invalid input
```
É possivel iterar utilizando async/await por meio do **`for-of`**, _evitar uso do **`forEach`** por ele não conseguir trabalhar de modo assincrono._
```JS
// Exemplo:
function sum(a, b) {
    return new Promise(function(resolve, reject) {
        if (!a || !b) return reject("Invalid input");
        setTimeout(function() {
            resolve(a + b);
        }, 1000);
    });
}

(async function () {
    try {
        const functions = [
            sum(2, 2),
            sum(4, 4)
        ];
        const results = [];
        for (let fn of functions) {
            const result = await fn;
            results.push(result);
        }
        const [a,b] = results;
        const result = await sum(a, b);
        console.log(result);
    } catch (e) {
        console.log(e);
    }
})();
 // 12
```
É possível utilizar o bloco **`for-await-of`** para iterar sobre um iterator de promises.  
⚠️ Para utilizar é necessário usar a flag **`--harmony-async-iteration`**.  

```JS
// Exemplo:
function sum(a, b) {
    return new Promise(function(resolve, reject) {
        if (!a || !b) return reject("Invalid input");
        setTimeout(function() {
            resolve(a + b);
        }, 1000);
    });
}

(async function () {
    try {
        const functions = [
            sum(2, 2),
            sum(4, 4)
        ];
        const results = [];
        for await (let result of functions) {
            results.push(result);
        }
        const [a,b] = results;
        const result = await sum(a, b);
        console.log(result);
    } catch (e) {
        console.log(e);
    }
})();
 // 12
```