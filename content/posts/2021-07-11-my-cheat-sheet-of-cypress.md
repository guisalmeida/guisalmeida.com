---
title: My Cheat Sheet of Cypress
description: This post summarizes with some examples what I learned studying Cypress. I like to make this type of "glue" because I believe it can help me to reinforce my learning and in future doubts. I hope it will also help language beginners to accelerate their learning curve and more experienced ones to remember some forgotten concepts.
date: 2021-07-11 08:13:50
thumbnailImage: ../../static/assets/img/cypress-cover.png
category: blog
tags: ['#cypress', '#javascript', '#cheat-sheet']
---
___

## Index

```toc
exclude: Index
```
---

## 1 Intro  

Cypress uses promises in everything, it has its own lifecycle.

The cypress doc says to **not use** Async Await.

The line to help vs-code recognize cypress and provide snippets.
```js
/// <reference types="cypress" />
```

### 1.1 Cypress.json
Some important settings can be passed in this file.
```js
{
     "baseUrl": "https://guisalmeida.com"
}
```

### 1.2 Running tests
In the `package.json` file we can pass the following scripts to run the tests:
```json
{
     "scripts": {
         "cypress:run": "cypress run",
         "cypress:open": "cypress open"
     }
}
```

In the terminal, pass the commands:
- **Run** will run the tests via terminal.
- **Open** will open the graphical interface where tests interacting with the application are displayed.

```
npm run cypress:run
npm run cypress:open
```

In run mode via terminal, cypress generates a screenshots folder for the errors and also a videos folder with the recorded execution showing the interface.
> To disable video recording, you must configure the `cypress.json` file:
> ```json
> {
> "video": false
> }
> ```

In the interface it is possible to choose the files to be executed, in the command line **to execute a specific file** you must pass the command:
```
npm run cypress:run -- --spec path/file.spec.js
```


---

## 2 General Commands

**it()**
serves to describe and create tests for each case.

**describe()**
Serves to describe and group tests.

**skip()**
Skips the test or a group of tests.

**only()**
Runs only the specified test or group.
> **Only** executes only one test, if there is more than one, the last one found will be executed.

**debug()**
Get more details about any given test point and print info to the console.

**pause()**
Pauses the execution and allows it to be executed step by step.

**cy.get(\<value\>)**
Search elements by class, tag, id, etc.

**cy.contains(\<value\>)**
Search elements by text.

**cy.reload()**
Reload the page.

**cy.window()**
Accesses the page's window object.

**as(\<string\>)**
Create a name for the event, operation, etc. Can be captured with: `cy.get('@alias')`.
Example:
```js
it('Get response with alias', () => {
     cy.request({...}).as('response')

     cy.get('@response').then(res => {
         expect(res.status).to.be.equal(200)
     })
})
```

### 2.1 Create a custom command
In the `/cypress/support/commands.js` file, custom commands can be added, by passing the following expression:
```js
Cypress.Commands.add("commandname", callback())
```
> No need to import it into the test file.

Example:
```js
// code in commands.js file
Cypress.Commands.add("clickAlert", (locator, message) => {
     cy.get(locator).click()
     cy.on('window:alert', msg => {
         expect(msg).to.be.equal(message)
     })
})
// code in test file
it('Alert...', () => {
     cy.clickAlert('#alert', 'Simple Alert')
})
```

### 2.2 Overwrite command
It is possible to overwrite cypress commands, for that in the `/cypress/support/commands.js` file use the syntax:

```js
Cypress.Commands.overwrite("commandname", callback())
```
Example:
```js
Cypress.Commands.overwrite('request', (originalFn, ...options) => {
     if (options.length === 1) {
         if (Cypress.env('token')) {
             options[0].headers = {
                 Authorization: `JWT ${Cypress.env('token')}`
             }
         }
     }

     return originalFn(...options)
})
```

---
## 3 Helpers

**cy.wrap(\<object\>)**
Encapsulates as a cypress object. Also used to manage external promises.

Example:
```js
it('Wrap...', () => {
     const obj = {name: 'User', age: 20}
     cy.wrap(obj).should('have.property', 'name')

     cy.visit('https://www.wcaquino.me/cypress/components.html')
     cy.get('#formName').then($el => {
         // $el.val('works with jquery') is not a better option, it doesn't show in the log
         cy.wrap($el).type('works with cypress')
     })
})
```



**invoke(\<function\>, [parameters])**
Accesses a function of the object that is in the middle of the cypress chain.

Example:
```js
it('Invoke...', () => {
     const sum = (a, b) => a + b;
     cy.wrap({ fn: sum }).invoke('fn', 2, 5).should('be.equal', 7)
})
```


**each(\<callback()\>)**
Similar to `foreach` from JS but it is native to cypress, it goes through a list of elements and returns in a callback function each element in jquery that can be tested in different ways.

Example:
```js
it('Select almost all with each...', () => {
     cy.get('[name=formFavoriteFood]').each($el => {
         if($el.val() !== 'vegetarian') {
             // $el.click()
             // better make $el a cypress object
             cy.wrap($el).click()
         }
     })
})
```

**cy.wait(\<ms\>)**
Wait on the test flow.

**cy.tick(\<ms\>)**
Advances time in the test flow.

**cy.clock(\<Date()\>)**
Can be used to set/reset a default test date.
> Cannot be run more than 1x in the test.

Example:
```js
it('Going back to the past', () => {
     const dt = new Date(1987, 2, 24, 2, 0, 0)
     cy.clock(dt.getTime())
     cy.get('#buttonNow').click()
     cy.get('#result > span').should('contain', '03/24/1987')
})
```

### 3.1 Lib MomentJS
Already inserted by default in Cypress, it helps in the manipulation of dates.
Example:
```js
cy.request({
     url: '/transactions',
     method: 'POST',
     headers: { Authorization: `JWT ${token}` },
     body: {
         account_id: accountId,
         date_payment: Cypress.moment().add({ days: 1 }).format('DD/MM/YYYY'),
         data_transaction: Cypress.moment().format('DD/MM/YYYY'),
         description: "Rent paid",
         value: "800"
     },
})
```

---
## 4 Hooks

**before(\<callback()\>)**  
(Before All) Executes the callback function passed **before** all the tests of a certain block **`describe`** where it was added.

**beforeEach(\<callback()\>)**
(Before Each) Executes the callback function passed **before** each test of a certain block **`describe`** where it was added.

**after(\<callback()\>)**
(After all) Executes callback function passed **after** all the tests of a certain block **`describe`** where it was added.

**afterEach(\<callback()\>)**
(After Each) Executes the callback function passed **after** each test of a certain block **`describe`** where it was added.

---

## 5 Assertions

**Wait**
When we already have the value to make the assertion, we can use **Expect**.

```js
expect(<value>, [message in case of error]).command()
```

**We must**
When we have to fetch and wait for the value to make the assertion, we can use the **Should** logo chained after the request command.
```js
command().should(<command>, <value>)
```

**Then**
Similar to `should` it also allows to receive results of the chained previous command. But with some differences.
```js
command().then(<command>, <value>)
```

### 5.1 Should x Then Differences
|Should|then|
|:---:|:---:|
|stays running</br>while waiting|waits to receive</br>promise result|
|always return the element|considers the return|
|cannot do a search</br>within another|does a search within another|

---

### 5.2 Common commands

**equal(\<value\>) | equal(\<value\>) | eq(\<value\>)**
Command to check equality.

**not.command()**
Used before commands to indicate negation

**to.be.command()**
Can be used to improve test readability.

**empty**
Make sure it's empty.

---
### 5.3 Types
**to.be.a(\<type\>)**
Check if the value type is the same as the type passed by the parameter.
Example:

```js
it('Types', () => {
      constant number = 1;
      const str = 'gui';

      expect(num).to.be.a('number')
      expect(str).to.be.a('string')
      expect({}).to.be.a('object')
      expect([]).to.be.a('array')
})
```

---

### 5.4 Strings
**length(\<value\>)**
Check the string size.

**contains(\<value\>)**
Checks if the string has value passed by parameter.

**match(\<regex\>)**
Checks if the string has regex passed by parameter.
Example:
```js
it('String', () => {
      const string = 'gui';

      expect(string).to.be.length(3);
      expect(string).to.contains('gu');
      expect(string).to.match(/^gui$/);
})
```

---

### 5.5 Numbers

**below(\<value\>)**
the expected value must be below the value passed by the parameter.

**above(\<value\>)**
the expected value must be above the value passed by the parameter.

**closeTo(\<value\>, \<delta\>)**
Checks if the value is close to the value passed according to the precision passed in the delta.
Example:
```js
it('Numbers', () => {
      const int = 2;
      constant float = 2.22222;

      expect(int).to.be.equal(2);
      expect(int).to.be.above(1);
      expect(int).to.be.below(3);
      expect(float).to.be.equal(2.22222);
      expect(float).to.be.closeTo(2.2, 0.1);
      expect(float).to.be.above(2);
})
```

---

### 5.6 Object

**deep.equal() | eql()**
Compare objects by content.

**include(\<value\>)**
Checks if it has part of the value passed by the parameter.

**have.property(prop, [value])**
Compares whether there is an object property, as well as a value if passed in the second parameter.
Example:
```js
obj const = {
      a: 1,
      b: 2
}

// same reference true
expect(obj).to.be.equal(obj)

// deep | eql compare object content not reference
expect(obj).deep.equal({ a: 1, b: 2 })
expect(obj).eql({ a: 1, b: 2 })
expect(obj).include({ a: 1 })
expect(obj).to.have.property('b')
expect(obj).to.have.property('b', 2)
wait(obj).to.not.be.empty
```
**its(\<property\>)**
Accesses a property of the object that is in the middle of the cypress chain.
Example:
```js
it('Yeah...', () => {
      const obj = {name: 'User', age: 20, address: {street: 'josé ventura'}}
      cy.wrap(obj).its('name').should('be.equal', 'User')
      cy.wrap(obj).its('address').should('have.property', 'street')
      // cy.wrap(obj).its('address').its('street').should('contain', 'ventura')
      cy.wrap(obj).its('address.street').should('contain', 'ventura')
})
```

---

### 5.7 Matrices

**to.have.members(\<value\>)**
Checks if the array has **all** the following members passed by parameter.

**to.include.members(\<value\>)**
Checks if the array has the following members passed by parameter.
Example:

```js
it('Arrays', () => {
      matrix const = [1,2,3];

      expect(array).to.have.members([1,2,3])
      expect(array).to.include.members([1,2])
      expect(array).to.not.be.empty
      expect([]).to.be.empty
})
```

---

## 6 Interaction with Front-end (DOM)

**type(\<text [{expression}]\>, [{ delay: <ms> }])**
Write the text on the previously selected element.
> In type, keywords can be passed inside {} along the string to simulate some behavior at runtime.
> Some expressions:
> + {backspace} - deletes a character
> + {selectall} - selects all text
>
> In the optional field `delay` it is possible to define a time in milliseconds, useful for text fields that have JS events like *debounce* that as you type some event occurs.


**Clear()**
Deletes a text field.

**click({parameters})**
Click event.
> On click, keywords can be passed inside {} along the string to simulate some behavior at runtime.
> Some parameters:
> + {multiple: true} - processing event on all selected clickables.

**cy.get(\<value\>, {parameters})**
Elements selected on the page.
> In get, keywords can be passed inside {} along the string to simulate some behavior at runtime.
> Some parameters:
> + {timeout: ms} - timeout trying to select item, default is 4000ms.
>
> NOTE: to apply default timeout to change all application **{"defaultCommandTimeout": \<ms>}** in `cypress.json`.  
**cy.on(\<event\>, callback())**
Waits for events that occur in the browser executes passed to function.
Example:
```js
it('Alert...', () => {
     cy.get('#alert').click()
     cy.on('window:alert', msg => {
         expect(msg).to.be.equal('Simple Alert')
     })
})
```

**cy.clearLocalStorage()**
Clear local storage.

---
## 7 Interaction with Backend (REST)
**cy.request()**

Makes a real request to the last endpoint. It accepts an object as a parameter with some attributes such as:
```js
cy.request(
     {
         url: '',
         method: '', // GET, PUT, POST, DELETE ...
         headers: {},
         body: {},
         qs: {}, // (query string) parameters that can be passed along in the request URL
         failOnStatusCode: false //disables error in the test when the request returns an error.
     }
)
```

---
## 8 Mocks

**cy.stub()**
Replaces a function, stores iterations, and controls callback behavior.

Syntax:

```js
cy.stub()
cy.stub(object, method)
cy.stub(object, method, replacerFn)
```

Example:

```js
it('Alert with stub...', () => {
     const stub = cy.stub().as('alert')
     cy.on('window:alert', stub)
     cy.get('#alert').click().then(() => {
         expect(stub.getCall(0)).to.be.calledWith('Simple Alert')
     })
})
it('Stub with multiple calls...', () => {
     const stub = cy.stub().as('alert')
     cy.on('window:alert', stub)

     cy.get('#formCadastrar').click().then(() => {
         expect(stub.getCall(0)).to.be.calledWith('Name is required')
     })
    
     cy.get('#formName').type('Guilherme')

     cy.get('#formCadastrar').click().then(() => {
         expect(stub.getCall(1)).to.be.calledWith('Last name is required')
     })
    
     cy.get('[data-cy=dateLastName]').type('Almeida')
    
     cy.get('#formCadastrar').click().then(() => {
         expect(stub.getCall(2)).to.be.calledWith('Sex is mandatory')
     })
    
     cy.get('#formSexoMasc').check()
     cy.get('#formCadastrar').click()

     cy.get('#result > :nth-child(1)').should('have.text', 'Registered!')
})
```

**cy.fixture(\<file\>)**
Import a mock file that is created inside the /cypress/fixtures folder.
Example:
```js
it('Get data form fixture file', () => {
     cy.fixture('userData').as('user').then(function () {
         cy.get('#formName').type(this.user.name)
         cy.get('#formLastname').type(this.user.lastname)
         cy.get(`[name=formSex][value=${this.user.sex}]`).click()
         cy.get(`[name=formFavoriteFood][value=${this.user.food}]`).click()
         cy.get('#formEducation').select(this.user.education)
         cy.get('#formSports').select(this.user.sports)
     })

     cy.get('#formCadastrar').click()
     cy.get('#result > :nth-child(1)').should('have.text', 'Registered!')
})

```

**cy.intercept({options})**
Spy and stub requests.

Example:
```js
// spy
cy.intercept('/users/**')
cy.intercept('GET', '/users*')
cy.intercept({
   method: 'GET',
   url: '/users*',
   hostname: 'localhost',
})

// spy and stub response
cy.intercept('POST', '/users*', {
   statusCode: 201,
   body: {
     name: 'Peter Pan',
   },
})
```

---
## 9 plugins
Cypress supports several plugins, the official ones can be consulted on the website in the [Plugins](https://docs.cypress.io/plugins/directory) part of the documentation.

### 9.1 Using plugins
Install package:
```
npm install -D plugin-name
```

In the `cypress/support/index.js` file add the plugin import:
```js
require('plugin name')
```

### 9.2 Plugin XPath
Add search commands by [XPath](https://github.com/cypress-io/cypress-xpath).
Example:
```js
it('finds list items', () => {
     cy.xpath('//ul[@class="todo-list"]//li')
     .should('have.length', 3)
})
```

---
## 10. References
- [Cypress assertions](https://docs.cypress.io/guides/references/assertions)
- [Event types](https://docs.cypress.io/api/events/catalog-of-events#Event-Types)
- [Stub](https://docs.cypress.io/api/commands/stub)
- [Plugins](https://docs.cypress.io/plugins/directory)
- [Migrating cy.route to cy.intercept](https://docs.cypress.io/guides/references/migration-guide#Migrating-cy-route-to-cy-intercept)
- [MomentJS](https://momentjs.com/)
- [Screenshot](https://docs.cypress.io/guides/references/configuration#Screenshots)
- [Xpath cookbook](https://www.red-gate.com/simple-talk/development/dotnet-development/xpath-css-dom-and-selenium-the-rosetta-stone/)
- [Video](https://docs.cypress.io/guides/references/configuration#Videos)  

---
## 11 Conclusion
Cypress is a very important tool for various testing scenarios and with it, we dispense with the use of several libraries to use an application that has everything you need.

What did you think of this post? Do you have any suggestions or criticisms? Leave a reaction or a comment below. And thanks for visiting! 😉