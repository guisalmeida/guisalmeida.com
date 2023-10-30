---
title: My Cheat Sheet of Javascript
description: This post summarizes in methods and examples what I learned
   studying javascript, where I had the idea of creating this sheet to help me with future questions. I hope it will also help language beginners to accelerate their learning curve and more experienced ones to remember some forgotten concepts.
date: 2021-06-09 10:34:29
thumbnailImage: ../../static/assets/img/jsssss.jpg
category: blog
tags: 
- javascript
- cheat-sheet
---

___
## Index

```toc
exclude: Index
```
---
## 1 Data Types
**`typeof`**
_Returns the data type._  
``` JS
//example:
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

### 1.1 Number

**`Number`**  
_Convert string passed by the parameter to a number raised to a decimal base._
``` JS
//example:
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

**`isNaN`**  
_Returns Boolean that checks if the parameter passed is **NaN**._
> ⚠️ If we use Boolean operators to compare, even if equal, it returns false. That's why use the isNaN() function.

``` JS
//example:
> NaN === NaN
false
> isNaN(NaN)
true
```


**`toExponential`**  
Returns the number elevated to scientific notation, specifying the number of places after the decimal point as a function parameter._
``` JS
//example:
> (123.4).toExponential(10);
'1.2340000000e+2'
```


**`toFixed`**  
Returns the number with a number of places after the comma passed as a parameter of the function._
``` JS
//example:
> (123.4).toFixed(10);
'123.4000000000'
```


**`toPrecision`**  
_Returns the total number of digits, which is passed as a function parameter._
``` JS
//example:
> (123.4).toPrecision(10);
'123.4000000'
```


**`parseInt`**  
_Receives a string as a function parameter and returns a decimal number, or another base that must be passed as the second parameter._
> ⚠️ The houses after the comma are lost in this case.  

``` JS
//example:
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


**`parseFloat`**  
_Receives a string as a function parameter and returns a decimal number with places after the comma, unlike parseInt, it does not receive another base that must be passed as a second parameter._
``` JS
//example:
> parseFloat("10");
10
> parseFloat("2.5");
2.5
> parseFloat("0xFF");
0
> parseFloat("a");
NaN
```

**`toString`**
_Returns a string of the number converted into the base passed as a function parameter._
> ⚠️ Javascript accepts 4 types of numerical base: **decimal(10), hexadecimal(16), binary(2) and octal(8)**.

``` JS
//example:
> (10).toString(10) // converting to string in decimal
'10'
> (10).toString(16) // converting to string in hexadecimal
'The'
> (10).toString(2) // converting to string in binary
'1010'
> (10).toString(8) // converting to octal string
'12'
```


#### 1.1.1 Math API
Math is an object that has several mathematical functions in the language.

**`Math.sign`**
_Returns number 1 if the parameter is positive and -1 if the parameter is negative._
``` JS
//example:
> Math.sign(5);
1
> Math.sign(-5);
-1
```


**`Math.abs`**
_Returns number converted to positive._
``` JS
//example:
> Math.abs(-10)
10
```


**`Math.ceil`**
_Returns number rounded up to the next integer._
``` JS
//example:
> Math.ceil(1.1);
two
> Math.ceil(-1.1);
-1
```



**`Math.floor`**
_Returns number rounded down to the next integer._
``` JS
//example:
> Math.floor(9.9);
9
> Math.floor(-9.9);
-10
```



**`Math.round`**
_Rounds the number up if the decimal part is from 5 to 9 and down if it is from 0 to 4._
> ⚠️ For negative numbers reverse the order.

``` JS
//example:
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



**`Math.trunc`**
_Eliminates the decimal part of the number, making it an integer._
``` JS
//example:
> Math.trunc(2.3);
two
> Math.trunc(-2.3);
-two
```



**`Math.min`**
_Returns the smallest number passed by the parameter._
``` JS
//example:
> Math.min(1,2,3,4,5,6);
1
```



**`Math.max`**
_Returns the highest number passed by the parameter._
``` JS
//example:
> Math.max(1,2,3,4,5,6);
6
```



**`Math.random`**
_Returns a random number between 0 and 1, not including 1._
> ⚠️ For a result greater than 1 decimal place, just multiply it.

``` JS
//example:
> Math.random();
0.8942857287859916
> Math.trunc(Math.random() * 100)
88
```


### 1.2 String

**`length`**
_Returns the size of the String._
``` JS
//example:
> "JavaScript".length;
10
```


**`indexOf`**
_Returns the first position found of the character passed by the parameter._
``` JS
//example:
> "PHP".indexOf("p");
0
```



**`lastIndexOf`**
_Returns the last position found of the character passed by the parameter._
``` JS
//example:
> "PHP".lastIndexOf("P");
two
```



**`toUpperCase`**
_Returns a new String converting the letters to uppercase._
``` JS
//example:
> "cobol".toUpperCase();
'COBOL'
```



**`toLowerCase`**
_Returns a new String converting the letters to lowercase._
``` JS
//example:
> "ALGOL".toLowerCase();
'something'
```



**`charAt`**
_Returns the character in the position passed by the parameter ._
``` JS
//example:
> "JavaScript".charAt(1);
'The'
```



**`charCodeAt`**
_Returns the code based on the position passed by the parameter._
``` JS
//example:
> "JavaScript".charCodeAt(1);
97
```



**`String.fromCharCode`**
_Returns a character based on the code passed by the parameter._
``` JS
//example:
> String.fromCharCode(97);
'The'
```



**`includes`**
_Returns Boolean checking if the String contains the String passed by the parameter._
``` JS
//example:
> "JavaScript".includes("Java");
true
```



**`startsWith`**
_Returns Boolean checking if the String starts with the String passed by the parameter._
``` JS
//example:
> "Ruby".startsWith("R");
true
```



**`endsWith`**
_Returns Boolean checking if the String ends with the String passed by the parameter._
``` JS
//example:
> "Erlang".endsWith("lang");
true
```



**`localeCompare`**
_Returns number -1, 0 or 1 according to whether the String passed by the parameter is greater, equal or less than the one being checked._
``` JS
//example:
> "a".localeCompare("b");
-1 // a < b
> "a".localeCompare("a");
0 // a == a
> "b".localeCompare("a");
1 // b > a
```
> ⚠️ Characters with an accent that are in a larger position are also replaced according to the letter, making this function very practical and important.
```js
"a" < "b"
false // the "à" is greater than "b" because of the charCode
"á".localeCompare("b")
-1 // the function brings the "à" as if it were the normal "a" for comparison
```

 
**`match`**
_Returns `Array` with parts of the String based on the RegExp passed by the parameter._
> ⚠️ Only accepts **`regexp`** as parameters.

``` JS
//example:
// in this case regexp was used where the slash \ serves to escape the +, the G serves to locate all occurrences.
> "C++".match(/\+/g);
[ '+', '+' ]
```

**`search`**
_Returns `Number` with the index value of the first position found based on the RegExp passed by the parameter._
> ⚠️ Only accepts **`regexp`** as parameters.
``` JS
//example:
> "java".search(/a/);
1
```

**`replace`**  
_Returns `String` resulting from replacing the String or RegExp passed in the first parameter by the second parameter._
``` JS
//example:
> "JavaScript".replace("Java", "Ecma");
'EcmaScript'
> "JavaScript".replace(/a/g, 4); 
'J4v4Script'
```

**`slice`**
_Returns a part of the String that is invoking the function starting at the position passed in the first parameter until the final position passed in the second parameter, or from the position passed in the first parameter until the end if the second parameter is not informed._
``` JS
//example:
> "JavaScript".slice(0, 4);
'Java'
> "JavaScript".slice(4);
'Script'
> "JavaScript".slice(0, -6);
'Java'
> "JavaScript".slice(-6);
'Script'
```

**`split`**
_Returns an array containing the result of dividing the original String according to the criteria passed by the parameter._
``` JS
//example:
> "C;Java;JavaScript;Ruby".split(";");
[ 'C', 'Java', 'JavaScript', 'Ruby' ]

```

**`substring`**
_Similar to slice, **does not accept negative values as a parameter and allows the inversion of parameters**._
``` JS
//example:
> "JavaScript".substring(0, 4);
'Java'
> "JavaScript".substring(4, 0);
'Java'
> "JavaScript".substring(4);
'Script'
```

**`concat`**
_Returns a new String resulting from the concatenation of the one invoking the function and the other, passed by the parameter._
``` JS
//example:
> "Java".concat("Script");
'JavaScript'
> "Data".concat("Flex");
'DataFlex'
```

**`padStart`**
_Complete the String with characters at the beginning._
``` JS
//example:
> "Script".padStart(10, "Java");
'JavaScript'
```

**`padEnd`**
_Complete the String with characters at the end._
``` JS
//example:
> "C".padEnd(3, "+");
'C++'
```

**`repeat`**
_Repeats a character._
``` JS
//example:
> "C".concat("+".repeat(2));
'C++'
```

**`trim`**
_Eliminates blank spaces at the beginning and end._
``` JS
//example:
> " Self ".trim();
'Self'
```

**`trimLeft`**
_Eliminates white spaces at the beginning._
``` JS
//example:
> " Scheme ".trimLeft();
'Scheme'
```

**`trimRight`**
_Eliminates blank spaces at the end._
``` JS
//example:
> " Perl ".trimRight();
'Perl'
```

### 1.3 Boolean
**`true or false`**
_Only these six cases return false, any other value is set to true._
``` JS
//example:
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

### 1.4 Object

**`delete`**
_Deletes the object's property._
``` JS
//example:
> delete book.available;
```

**`hasOwnProperty`**
_used to determine if a property belongs to the object._
``` JS
//example:
const javascript = {
     name: "JavaScript",
     year: 1995
};

console.log(javascript.hasOwnProperty(name));
//true
console.log(javascript.hasOwnProperty(paradigm));
//false
```

#### 1.4.1 Object API
**`Object.create`**
_allows interaction with the object's prototype._
```js
//example:
const functionalLanguage = {
     paradigm: "Functional"
};
const scheme = Object.create(functionalLanguage);
scheme.name = "Scheme";
scheme.year = 1975;
```

**`Object.assign`**
_makes a copy of the properties of the objects passed by the parameter to the target object, which is returned._
```js
//example:
const javascript = Object.create({});
Object.assign(javascript, {
     name: "JavaScript",
     year: 1995,
     paradigm: "OO and Functional"
});
console.log(javascript);
//{ name: 'JavaScript',
// year: 1995,
// paradigm: 'OO and Functional',
// author: 'Brendan Eich',
// influencedBy: 'Java, Scheme and Self' }

```

**`Object.getPrototypeOf`**
_allows interaction with the object's prototype._
```js
//example:
const functionalLanguage = Object.create({});
functionalLanguage.paradigm = "Functional";
const javascript = Object.create(functionalLanguage);
javascript.name = "JavaScript";
javascript.year = 1995;
javascript.paradigm = "OO";
console.log(Object.getPrototypeOf(javascript).paradigm);
//"Functional"
```

**`Object.setPrototypeOf`**
_allows interaction with the object's prototype._
``` JS
//example:
const functionalLanguage = {
     paradigm: "Functional"
};
const scheme = {
     name: "Scheme",
     year: 1975
};
console.log(Object.setPrototypeOf(scheme, functionalLanguage));
//const scheme = {
// name: "Scheme",
// year: 1975,
// paradigm: "Functional"
//};
//
```

**`Object.keys`**
_Returns the keys of the object's properties in an `array`._
```js
//example:
const javascript = {
     name: "JavaScript",
     year: 1995,
     paradigm: "OO and Functional"
};
console.log(Object.keys(javascript));
//[ 'name', 'year', 'paradigm' ]
```


**`Object.values`**
_Returns the values of the object's properties in an `array`._
```js
//example:
const javascript = {
     name: "JavaScript",
     year: 1995,
     paradigm: "OO and Functional"
};
console.log(Object.values(javascript));
//[ 'JavaScript', 1995, 'OO and Functional' ]
```


**`Object.entries`**
_Returns the object's properties in key and value pairs in an `array` each pair and then within another `array` that encompasses all._
```js
//example:
const javascript = {
     name: "JavaScript",
     year: 1995,
     paradigm: "OO and Functional"
};
console.log(Object.entries(javascript));
//[ [ 'name', 'JavaScript' ],
// [ 'year', 1995 ],
// [ 'paradigm', 'OO and Functional' ] ];
```


**`Object.is`**
_Compares two objects, considering their data types, similarly to the === operator, returning a boolean._
```js
//example:
const javascript = {
     name: "JavaScript",
     year: 1995,
     paradigm: "OO and Functional"
};
console.log(Object.is(javascript, javascript));
//true
```

**`Object.defineProperty`**
_Operation that allows configuring various aspects of a given property, receives as parameters **(object, keys, {properties}**)._
> **Properties**
> `value` – _Defines the value of a given property._
> `configurable` – _Allows a certain property to be deleted._
> `enumerable` – _Allows a given property to be enumerated._
> `writable` – _Allows a certain property to have its value modified._
```js
//example:
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
**`Object.preventExtensions`**
_Prevents the object from having new properties, but allows modifying or removing existing properties._
> ⚠️ Whenever these changes are applied to the object, it becomes **immutable**.

```js
//example:
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


**`Object.seal`**
_Prevents the object from having new properties or erasing existing properties, but allows modifying existing properties._
> ⚠️ Whenever these changes are applied to the object, it becomes **immutable**.

```js
//example:
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

**`Object.freeze`**
_Prevents the object from having new properties, deleting or modifying existing properties._
> ⚠️ Whenever these changes are applied to the object, it becomes **immutable**.

```js
//example:
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

### 1.5 Json
It is a data interchange format.

**`JSON.stringfy`**
_converts a given data type to JSON._
```js
//example:
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

**`JSON.parse`**
_converts a JSON to a given data type._
```js
//example:
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

### 1.6 Function
**`arguments`**
_implicit variable to access the parameters of the invoked function._
```js
//example:
function sum() {
     console.log(arguments)
};
sum(1,2,3,4,5);
// { '0': 1,
// '1': 2,
// '2': 3,
// '3': 4,
// '4': 5
// }
```

**`rest parameter (...)`**
_parameter of the function that returns an **array** with the parameters passed grouped together._
> ⚠️ Must always be the last in the parameters list.

```js
//example:
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

**`this`**
_implicit variable that makes reference to the object responsible for its invocation._
```js
//example:
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
**`call`**
_operation where it is possible to invoke a function passing **this** as a parameter._
> ⚠️ The first parameter must always be this.

```js
//example:
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

**`apply`**
_operation where it is possible to invoke a function passing **this** as a parameter._
> ⚠️ The first parameter must always be this. From the second one, the parameters must be passed inside an array.

```js
//example:
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

**`bind`**
_operation that allows encapsulating **this** inside the function, returning it._
```js
//example:
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

**`new`**
_operator that allows you to create a constructor function that returns a new object when invoked._
```js
//example:
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
// name: 'Linus Torvald',
// city: 'Helsinki',
// year: 1969,
// getAge: [Function] }
console.log(person1.getAge());
// 51
console.log(person2);
// Person {
// name: 'Bill Gates',
// city: 'Seattle',
// year: 1955,
// getAge: [Function] }
console.log(person2.getAge());
// 65
```

**`prototype`**
*property that is bound to the **\_\_proto\_\_** of the object created by the new operator.*
```js
//example:
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
// name: 'Linus Torvald',
// city: 'Helsinki',
// year: 1969,
// getAge: [Function] }
console.log(person1.getAge());
// 51
console.log(person2);
// Person {
// name: 'Bill Gates',
// city: 'Seattle',
// year: 1955,
// getAge: [Function] }
console.log(person2.getAge());
// 65
```


**`instanceof`**
_property that it is possible to verify if an object was created through a certain constructor function by analyzing its chain of prototypes._
```js
//example:
const date = new Date();
console.log(date instanceof Date);
// true
console.log(date instanceof Object);
// true
console.log(date instanceof Array);
// false
```


### 1.7 Array
**`length`**
_Returns the size of the Array._
> ⚠️ Empty elements are not considered in the length.

``` JS
//example:
const timeUnits = [];
timeUnits[0] = "minute";
timeUnits[1] = "hour";
timeUnits[2] = "day";
console.log(timeUnits.length);
// 3
```
#### 1.7.1 Mutator methods API
When invoked they modify the array.

**`push`**
_Adds an element to the end of the Array._
``` JS
//example:
const languages = [ "Python", "C", "Java" ];
languages.push("Ruby");
languages.push("Go");
console.log(languages);
// [ 'Python', 'C', 'Java', 'Ruby', 'Go' ]
```

**`pop`**
_Remove an element from the end of the Array._
``` JS
//example:
const languages = [ "Python", "C", "Java", "Ruby", "Go" ];
languages.pop();
console.log(languages);
// [ 'Python', 'C', 'Java', 'Ruby' ]
```


**`unshift`**
_Adds an element at the beginning of the Array._
``` JS
//example:
const languages = [ "Python", "C", "Java" ];
languages.unshift("Ruby");
console.log(languages);
// [ 'Ruby', 'Python', 'C', 'Java' ]
```


**`shift`**
_Remove an element at the beginning of the Array._
``` JS
//example:
const languages = [ "Ruby", "Python", "C", "Java" ];
languages.shift();
console.log(languages);
// [ 'Python', 'C', 'Java' ]
```

**`splice`**
_Remove, replace or add one or more elements at a given position in the Array._
> ⚠️ Returns an array with the removed elements.

``` JS
//example:
const languages = ["Python", "C", "Java"];
console.log(languages);
// [ 'Python', 'C', 'Java' ]
console.log(languages.splice(1, 1));
// [ 'Ç' ]
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

**`sort`**
_Order the elements according to the ordering function._
> ⚠️ The return with values -1 and 0 remains as it is and 1 inverts.

``` JS
//example:
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
     return a.name.localeCompare(b.name); //is comparing if string a is < = or > than b
});
console.log(languages);
// [ { name: 'C', year: 1972 },
// { name: 'Java', year: 1995 },
// { name: 'Python', year: 1991 } ]
```

**`reverse`**
_Inverts the order of the elements._
``` JS
//example:
const languages = ["Python", "C", "Java"];
languages.reverse();
console.log(languages);
// [ 'Java', 'C', 'Python' ]
languages.reverse();
console.log(languages);
// [ 'Python', 'C', 'Java' ]
```


**`fill`**
_Fill in the elements according to the start and end position._
``` JS
//example:
const languages = ["Python", "C", "Java"];
languages.fill("JavaScript", 0, 2);
console.log(languages);
// [ 'JavaScript', 'JavaScript', 'Java' ]
```


#### 1.7.2 Iteration methods API
When invoked, they iterate over the elements of the array.

**`forEach`**
_Executes the function passed by the parameter for each element._
``` JS
//example:
const frameworks = ["Angular.js", "Ember.js", "Vue.js"];
frameworks.forEach(framework => console.log(framework));
// Angular.js
// ember.js
// vue.js
```


**`filter`**
_Returns a new array containing only the elements that returned **true** in the function passed by the parameter._
``` JS
//example:
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
// { name: 'Ember.js', contributors: 746 },
// { name: 'Vue.js', contributors: 240 }
// ]
```
**`find`**
_Returns the first element that returned **true** in the function passed by the parameter._
``` JS
//example:
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


**`some`**
_Returns true if **one or more** elements returned true in the function passed by the parameter._
``` JS
//example:
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


**`every`**
_Returns true if **all elements** returned true in the function passed by the parameter._
``` JS
//example:
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


**`map`**
_Returns a **new array** based on the return of the function passed by the parameter._
``` JS
//example:
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


**`reduce`**
_Returns a value based on the return of the function passed by the parameter._
``` JS
//example:
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
}, 0); // the second parameter of reduce represents the initialization of the accumulator.
console.log(result);
// 2584
```


#### 1.7.3 Accessor methods API
When invoked, they return specific information about the array.

**`indexOf`**
_Returns the position of the first element found._
> ⚠️ If the element is not found, returns -1.

``` JS
//example:
const languages = ["Python", "C", "Java"];
console.log(languages.indexOf("Python"));
// 0
console.log(languages.indexOf("JavaScript"));
// -1
```
**`lastIndexOf`**
_Returns the position of the last element found._
> ⚠️ If the element is not found, returns -1.

``` JS
//example:
const languages = ["Python", "C", "C", "Java"];
console.log(languages.lastIndexOf("C"));
// two
console.log(languages.lastIndexOf("JavaScript"));
// -1
```


**`includes`**
_Returns **true** if the element exists._
``` JS
//example:
const languages = ["Python", "C", "Java"];
console.log(languages.includes("Python"));
// true
console.log(languages.includes("C"));
// true
console.log(languages.includes("JavaScript"));
// false
```


**`concat`**
_Returns a new array resulting from the concatenation of one or more arrays._
``` JS
//example:
const ooLanguages = ["Smalltalk", "C++", "Simula"];
const functionalLanguages = ["Haskell", "Scheme"];
const languages = [].concat(ooLanguages, functionalLanguages);
console.log(languages);
// [ 'Smalltalk', 'C++', 'Simula', 'Haskell', 'Scheme' ]
```


**`slice`**
_Returns parts of a given array according to the start and end position._
``` JS
//example:
const languages = ["Smalltalk", "C++", "Simula", "Haskell", "Scheme"];
console.log(languages.slice(0, 2));
// [ 'Smalltalk', 'C++' ]
console.log(languages.slice(2, 4));
// [ 'Simulate', 'Haskell' ]
console.log(languages.slice(1));
// [ 'C++', 'Simula', 'Haskell', 'Scheme' ]
```


**`join`**
_Convert the array to a String, joining the elements based on a separator._
``` JS
//example:
const languages = ["Smalltalk", "C++", "Simula", "Haskell", "Scheme"];
console.log(languages.join(","));
// Smalltalk,C++,Simula,Haskell,Scheme
console.log(languages.join(";"))
// Smalltalk;C++;Simula;Haskell;Scheme
console.log(languages.join(" "))
// Smalltalk C++ Simulates Haskell Scheme
```


### 1.8 Map
_It is an object that stores a set of **keys** and **values** that can be of **any data type**._
``` JS
//example:
const timeUnits = new Map([['second', 1], ['minute', 60], > ['hour', 3600]]);
console.log(timeUnits);
// Map { 'second' => 1, 'minute' => 60, 'hour' => 3600 }
```


**`Array.from`**
_converts a map object back into an array of pairs._
``` JS
//example:
const timeUnits = new Map([['second', 1], ['minute', 60], ['hour', 3600]]);
console.log(Array.from(timeUnits));
// [ [ 'second', 1 ], [ 'minute', 60 ], [ 'hour', 3600 ] ]
```


**`size`**
_Returns the number of elements._
``` JS
//example:
const timeUnits = new Map([['second', 1], ['minute', 60], ['hour', 3600]]);
console.log(timeUnits.size);
// 3
```


**`set`**
_Adds a key and value pair._
``` JS
//example:
const timeUnits = new Map();
console.log(timeUnits);
// map {}
timeUnits.set("second", 1);
timeUnits.set("minute", 60);
timeUnits.set("hour", 3600);
console.log(timeUnits);
// Map { 'second' => 1, 'minute' => 60, 'hour' => 3600 }
```


**`has`**
_Returns true if the **key** exists._
``` JS
//example:
const timeUnits = new Map([['second', 1], ['minute', 60], ['hour', 3600]]);
console.log(timeUnits.has("hour"));
// true
console.log(timeUnits.has("day"));
// false
```


**`get`**
_Returns the **value** of a given key._
``` JS
//example:
const timeUnits = new Map([['second', 1], ['minute', 60], ['hour', 3600]]);
console.log(timeUnits.get("second"));
// 1
console.log(timeUnits.get("minute"));
// 60
console.log(timeUnits.get("hour"));
// 3600
```


**`delete`**
_Remove a key and value pair._
⚠️ returns a bollean if the key exists `true`, if it does not exist `false`.
``` JS
//example:
const timeUnits = new Map([['second', 1], ['minute', 60], ['hour', 3600]]);
timeUnits.delete("hour");
console.log(timeUnits);
// Map { 'second' => 1, 'minute' => 60 }
```


**`clear`**
_Remove all elements._
``` JS
//example:
const timeUnits = new Map([['second', 1], ['minute', 60], ['hour', 3600]]);
console.log(timeUnits);
// Map { 'second' => 1, 'minute' => 60, 'hour' => 3600 }
timeUnits.clear();
console.log(timeUnits);
// map {}
```
#### 1.8.1 WeakMap

It is an object, similar to Map, which only allows keys of type Object and maintains references weakly, being volatile and non-iterable.
> ⚠️ It only has the methods: `set, has, get, delete`.

```js
// example:
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


### 1.9 Sep

_It is an object that stores unique elements, which can be of any type of data._
It has the `size, forEach, has, delete, clear` methods similar to **MAP**.
> ⚠️ Do not let the elements repeat themselves within its structure, if they repeat they are not added.

```js
// example:
const set = new Set();
set.add("10");
set.add("10");
set.add("10");
console.log(set);
// Set { '10' }
console.log(set.size);
// 1
```
It is also possible to convert an array into a set by removing its repeated values.
```js
// example:
const set = new Set();
set.add("10");
set.add("10");
set.add("10");
console.log(set);
// Set { '10' }
console.log(set.size);
// 1
```


**`Array.from`**
_converts a set object back to an array._
``` JS
//example:
const charsets = new Set(["ASCII", "ISO-8599-1", "UTF-8"]);
console.log(charsets);
// Set { 'ASCII', 'ISO-8599-1', 'UTF-8' }
console.log(Array.from(charsets));
// [ 'ASCII', 'ISO-8599-1', 'UTF-8' ]
```


**`add`**
_Adds an element to the Set, similar to an Array push and a Map set._
``` JS
//example:
const charsets = new Set();
charsets.add("ASCII");
charsets.add("ISO-8859-1");
charsets.add("UTF-8");
console.log(charsets);
// Set { 'ASCII', 'ISO-8859-1', 'UTF-8' }
```
#### 1.9.1 WeakSet
It is an object, similar to Set, which only allows values of type Object and maintains references weakly, being volatile and not iterable.
> ⚠️ It only has the methods: `add, has, delete` similar to Set.

```js
// example:
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
// if (!circles.has(this)) throw "Invalid object";
// ^
// Invalid object
```

---
## 2 Iterables and Iterators

_These are conventions implemented by Arrays, Maps, Sets and Strings that make them iterable through an iteration protocol._
> ⚠️ Every **Iterable** has a key property **`Symbol.iterator`** that defines the iteration protocol for the object.

```js
//example:
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

**`for of`**
_Loops through the keys of an **array***._
``` JS
//example:
var txt = 'Ireland'; // iterable
var it = txt[Symbol.iterator](); // iterator
for (letter of txt) {
   console.log(letter);
   if (letter === 'a') break; // for the interaction
}
//I
//r
//and
//l
//The
```


**`for in`**
_Loops through the keys of an **object***._
``` JS
//example:
const languages = {
     Fortran: 1957,
     Lisp: 1958,
     COBOL: 1959
};
for (let language in languages) {
     console.log(language + ":" + languages[language]);
}
// fortran:1957
// lisp:1958
// COBOL:1959
```


**`spread operator (...)`**
_Expanded the elements of an **iterable** into an array._
``` JS
//example:
const classicLanguages = ["Fortran", "Lisp", "COBOL"];
const modernLanguages = ["Python", "Ruby", "JavaScript"]
const languages = [...classicLanguages, ...modernLanguages];
console.log(languages);
// [ 'Fortran', 'Lisp', 'COBOL', 'Python', 'Ruby', 'JavaScript' ]
```
---
## 3 Classes
Classes are a special type of function that act as a template for creating objects._
> ⚠️ They do not suffer from **`hoisting`**.

```js
//example:
const square = class {}
const square = new Square();
console.log(square);
// square {}
```

**`constructor`**
_is invoked when a class is instantiated and serves to initialize a given object._
```js
//example:
class Square {
     constructor(side) {
         this.side = side;
     }
}
const square = new Square(4);
console.log(square);
// Square { side: 4 }
```

**`prototype methods`**
_depend on an instance to be invoked._
```js
//example:
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

**`static methods`**
_does not depend on an instance to be invoked._
```js
//example:
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
const square = Square.fromArea(16); // static method that does not depend on object instantiation.
console.log(square.toString());
// side: 4 area: 16
```

**`extends`**
_It is possible to create a hierarchy of classes through the keyword extends._
```js
//example:
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
**`super`**
_When declaring a constructor in the subclass, it is necessary to invoke the superclass constructor through **`super()`** before using the this reference._
```js
//example:
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
## 4 proxy
A **proxy** is capable of intercepting several types of operations on a target object. Through methods, called trap, for various types of events related to an object, such as:
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


**`set`**
_The set method is invoked when a property is defined on the object._
Receives as a parameter (target, key, value).
```js
//example:
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
// '0': 'Python',
// '2': 'JavaScript',
// length: 2
// }
console.log(languages.length);
// two
```

**`deleteProperty`**
_The deleteProperty method is invoked when a property is deleted._
Receives as a parameter (target, key, value).
```js
//example:
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

**`get`**
_The get method is invoked when a property is accessed._
Receives as a parameter (target, key, value).
```js
//example:
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
## 5 Reflect API
The **Reflect API** has the same methods that exist in the Proxy, allowing the execution of different types of operations on the target object, they are:
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
//example:
function createArray() {
     return new Proxy({}, {
         set(target, key, value) {
             target.length = target.length || 0;
             target.length++;
             Reflect.set(target, key, value); // set value to key like: target[key] = value
         },
         get(target, key) {
             if (typeof key === "string" && key.match(/^\d+$/)) {
                 if (!Reflect.has(target, key)) {
                     throw `Property ${key} not found`;
                 }
             }
             return Reflect.get(target, key); // returns key value like: target[key]
         },
         deleteProperty(target, key) {
             if (Reflect.has(target, key)) {
                 target.length--;
                 Reflect.deleteProperty(target, key); // delete key the same way as: delete target[key]
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
## 6 Modules
In ES6, or ECMAScript 2015, it was specified in the language itself, based on the concept of import and export.
> ⚠️ To use modules in **Node.js**, the files must have the extension **`.mjs`** in addition to executing with the flag **`--experimental-modules`**.

**`export`**.
By means of the export keyword, it is possible to export any type of data existing within a module._

```js
//example:
export const PI = 3.141592;
export function pow(base, exponential) {
     if (exponential === 0) return 1;
     return base * pow(base, exponential - 1);
}
```
We can also import and export by default using the **`default`** keyword.
```js
//example:
export default class Circle {
     constructor(radius) {
         this.radius = radius;
     }
}
//in the other module where the Circle will be imported it will no longer be necessary to use the keys:
import Circle from './Circle';
```

**`import`**
The import keyword imports any type of exported data into the module.
> ⚠️ It is not allowed to import and export within **blocks**.

```js
//example:
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
It is possible to use an **alias** in the import, renaming what is being imported followed by the **`as`** and the alias.
```js
//example:
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
Through *`***`** it is possible to import everything that is being exported into a single object.
```js
//example:
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
## 7 promises
Promises are objects responsible for modeling asynchronous behavior, allowing their treatment in an easier and more direct way.
> ⚠️ To create a promise, just instantiate it, executing the function **`resolve`** in case of success, being handled by **`then`**.

```js
//example:
function delayedSum(a, b) {
     return new Promise(function (resolve) {
         setTimeout(function() {
             solve(a + b);
         }, 1000);
     });
}
delayedSum(2, 2).then(function(result) {
     console.log(result);
});
// 4
```
In case of failure, the **`reject`** function must be executed, being handled by **`catch`**.
```js
//example:
function delayedSum(a, b) {
     return new Promise(function (resolve) {
         setTimeout(function() {
             solve(a + b);
         }, 1000);
     });
}
delayedSum(2, ) // simulating an error
     .then(function(result) {
         console.log(result);
     }).catch(function (e) {
         console.log(e);
     });
// NaN
```

**`Promise.all`**
_We can execute several promises at the same time, returning after all succeed using **`Promise.all`**_.
> ⚠️ Returns an **array** with the values of each executed function.

```js
// example:
function delayedSum(a, b) {
     return new Promise(function (resolve, reject) {
         if (!a || !b) return reject("Invalid input");
         setTimeout(function() {
             solve(a + b);
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
_We can also execute several promises at the same time, returning after the first succeeds using **`Promise.race`**_.
> ⚠️ Returns **only** the result of the first returned function.

```js
// example:
function delayedSum(a, b) {
     return new Promise(function (resolve, reject) {
         if (!a || !b) return reject("Invalid input");
         setTimeout(function() {
             solve(a + b);
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
---
## 8 Generators
Generators make it possible to pause the execution of a given function, allowing the use of the _**event loop**_ cooperatively.
> ⚠️ To create a **`generator`** just add **`*`** next to the function.
**`yield`**
Upon encountering a _**yield**_, function execution is paused until the **`next()`** method is invoked again.
```js
//example:
function* forever() {
let value = 1;
while (true) {
console.log(value++);
yield; // pause and exit the loop...
}
}

function today() {
console.log("Crossed to today");
}

const foreverGenerator = forever();
foreverGenerator.next();
today();
// 1
// Moved to today
```
Through **`yield`** it is possible to return values similarly to return in the **`value`** attribute of the returned obj.
```js
// example:
function* forever() {
let value = 1;
while (true) {
yield value++;
}
}

function today() {
console.log("Crossed to today");
}

const foreverGenerator = forever();
console.log(foreverGenerator.next());
// { value: 1, done: false }
console.log(foreverGenerator.next());
// { value: 2, done: false }
console.log(foreverGenerator.next());
// { value: 3, done: false }
today();
// Moved to today
console.log(foreverGenerator.next());
// { value: 4, done: false }
console.log(foreverGenerator.next());
// { value: 5, done: false }
```
In addition, it is also possible to send a value into the generator through the next method.
```js
// example:
function* forever() {
let value = 1;
while (true) {
         let reset = yield value++; // YIELD receives value passed by the parameter in the next invocation
         if (reset) value = 1; // when the yield value passed to the RESET variable returns true, it will assign value 1
}
}
const foreverGenerator = forever();
console.log(foreverGenerator.next());
  // { value: 1, done: false }
console.log(foreverGenerator.next());
  // { value: 2, done: false }
console.log(foreverGenerator.next(true)); // receive parameter through next
  // { value: 1, done: false }
console.log(foreverGenerator.next());
  // { value: 2, done: false }
```

**`next`**
Generators use the **`next()`** method to iterate over the available values during function execution.
```js
//example:
function* forever() {
let value = 1;
while (true) {
console.log(value++);
}
}

function today() {
console.log("Crossed to today");
}

const foreverGenerator = forever();
foreverGenerator.next();
today();
// 1
// two
// this way it will run infinitely...
// and will not pass to the next function.
```
The next method returns an **object** containing **`value`** and **`done`**, following the iteration protocol.  
```js
// example:
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
The return method closes the generator and can return a specific value.
```js
//example:
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
// { value: undefined, done: true } does not execute the second next because it already hears a return before
```
return can also receive a specific value per parameter.
```js
// example:
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
The throw method throws an exception inside the generator, interrupting the flow of execution if the exception has not been handled properly.
```js
// example:
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
---
## 9 Async/Await
**async/await** facilitates interaction with asynchronous calls, waiting for a given promise to return.  
```js
// example:
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
// Unhandled promise rejection. unhandled error warning
```
To handle possible exceptions associated with asynchronous calls, you can use a **`try/catch`** block.
```js
// example:
function sum(a, b) {
     return new Promise(function(resolve, reject) {
         if (!a || !b) return reject("Invalid input");
         setTimeout(function() {
             solve(a + b);
         }, 1000);
     });
}

(async function() {
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
It is possible to iterate using async/await through **`for-of`**, _avoid using **`forEach`** because it cannot work asynchronously._
```js
// example:
function sum(a, b) {
     return new Promise(function(resolve, reject) {
         if (!a || !b) return reject("Invalid input");
         setTimeout(function() {
             solve(a + b);
         }, 1000);
     });
}

(async function() {
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
It is possible to use the **`for-await-of`** block to iterate over a promise iterator.
> ⚠️ To use it is necessary to use the flag **`--harmony-async-iteration`**.


```js
// example:
function sum(a, b) {
     return new Promise(function(resolve, reject) {
         if (!a || !b) return reject("Invalid input");
         setTimeout(function() {
             solve(a + b);
         }, 1000);
     });
}

(async function() {
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
---

## 10. Conclusion
What did you think of this post? Do you have any suggestions or criticisms? Leave a reaction or a comment below. And thanks for visiting! 😉