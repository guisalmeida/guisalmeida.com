---
title: Learning regex in practice
description: Taking advantage of the subject of the last post, today I bring the content of a presentation I made at my company about regular expressions. A brief introduction to regex using email validation to exemplify past concepts.
date: 2021-04-21 04:24:54
thumbnailImage: ../../static/assets/img/regex_thumb.jpg
category: blog
tags: ['#regex', '#javascript', '#email']
---

___
## Index

```toc
exclude: Index
```
---
## 1 Intro
**Regular expressions** are structures formed by a **sequence of characters** that specify a formal **pattern** used to validate, extract or even replace characters within a string.

In the last post we talked about e-mail, so we will use the `JavaScript` language for this example, which is the most used for web development. 

### 1.1 Disclaimer
Regular expressions are supported by many programming languages, and most of these concepts presented will work for other scenarios as well.  
However, this post is limited to a brief introduction about regex, for an even more technical and in-depth knowledge, I indicate the sites that are in the references of this post.

### 1.2 Create  
Regex can be created in 2 ways:
As a **Literal** notation, it should be passed between two slashes as in the example:  
```js
const regexLiteral = /regex/
```

Instantiating with a new **RegExp object**, passing the regex inside the braces, as in the example:

```js
const regexObj = new RegExp('regex')
```  
### 1.3 How to test
To follow this post by testing it on your machine, you only need to have [node JS](https://nodejs.org) installed and access the folder where you created your JS file and run the command `node filename.js` in the terminal.

### 1.4 How to use
Regex can be passed inside methods that accept this type of parameter as well as having 2 methods that can be invoked from the instantiated regex object, which are `test` and `exec` which I talk more about in the **methods** part of this post. 

```js
// here we create the regex in literal form, which we're going to refactor.
const regExp = /guilherme@gmail.com/;

// here we create a function that will be the same throughout the post
// it receives the email to be validated and uses the regex we created
// calling the test() method which validates the email and returns a boolean
// depending on whether the regex was satisfied or not.
function validateEmail(text) {
    return regExp.test(text);
}

validateEmail("guilherme@gmail.com");
// Here we call the function that will help us validate our regex,
// in this first case it will return true, as it found the letter pattern
// that we create inside the string passed by parameter.

validateEmail("Guilherme@gmail.com");
// But be careful, the regex are case-sensitive and this would return false.
// Later in the post we'll see how to modify this.
```

Now notice another test case:
```js
validateEmail("E-mail: guilherme@gmailxcom");
// It will also return us true, as it found the pattern of letters
// that we create inside the string passed by parameter,
// regardless of having more characters before or after.
```

You also noticed that in this second code we have an 'x' in place of the dot, this was accepted by our function due to the **metacharacters** that we will see below.

### 1.5 Metacharacters
They are characters that have a determined function within the regex.
They are divided into four distinct groups, according to common characteristics among them.  

#### 1.5.1 Anchors

|meta|mnemonic|function|
|:---:|:---:|:---:|
|^|caret|start of line|
|$|dollar sign|end of line|
|\b|border|beginning or end of word|  

</br>

First we want to receive only the email to validate, there should be nothing else like spaces or other characters before or after the email.    
```js
// here we add the ^ and $ metacharacters.
const regExp = /^guilherme@gmailxcom$/;

validateEmail("E-mail: guilherme@gmailxcom");
// This now returns false, because the caret requires
// let the beginning be just after "gui..."
// As well as the $ requires that there is nothing after "...com".
```

#### 1.5.2 Representatives

|meta|mnemonic|function|
|:---:|:---:|:---:|
|.|period|any character|
|[...]|list|list of allowed characters|
|[\^...]|denied list|disallowed characters list|  

</br>

As we saw, the **dot** is a metacharacter and in this case, in order not to receive other random characters in its place, we can use the backslash (escape) to make it literal.

```js
// here we add the escape for the point
const regExp = /^guilherme@gmail\.com$/;

validateEmail("guilherme@gmail.com");
// At this point this is the only input that will be satisfied and will return true.
```

#### 1.5.3 Quantifiers

|meta|mnemonic|function|
|:---:|:---:|:---:|
|?|optional|zero or one|
|\*|asterisk|zero, one or more|
|\+|more|one or more|
|{n}|keys|quantifies a specific number|
|{n,}|keys|quantifies a minimum number|
|{n,m}|keys|quantifies from n to m|   


#### 1.5.4 Others metacharacters

|meta|mnemonic|function|
|:---:|:---:|:---:|
|\c|escape|makes the character c literal
|\||or|or one or the other|
|(...)|group|delimits a group|
|\w||Represents the set [a-zA-Z0-9_]|
|\W||Represents the set [\^a-zA-Z0-9_]|
|\d||Represents the set [0-9]|
|\D||Represents the set [\^0-9]|
|\s||Represents a blank space|
|\S||Represents non-whitespace|
|\n||Represents a line break|
|\t||Represents a tab|  

</br>

It's time to make this more dynamic and instead of receiving only the static text "guilherme", let's refactor it so that we can receive any name.

For this we can use the metacharacters represented by the backslash and a specific letter as shown in the table above.  

```js
const regExp = /^\w@gmail\.com$/;
// here we add the \w which accepts any letter, number and _.

validateEmail("joao@gmail.com");
// Note that this will return false, because as we only put the \w
// once, the expression will only accept a letter before the @.
```  

It will also be necessary to use the **quantifiers** to make the amount of characters received also dynamic.
As we need to have one or more letters before @, we will use **\+** after \w.

```js
const regExp = /^\w+@\D+\.\D+$/;
// here we add the "\w+" before the @ to accept one or more characters
// and also \D to receive non-number characters after the @.

validateEmail("joao_123@outlook.br");
// Now this returns true.
```
---
## 2 Moving forward in regex
Now let's go a little deeper into regular expressions, we'll see how we can create more specific patterns to be able to create our regex according to each need.

### 2.1 Character Lists
The lists as presented in section 1.5.2, are much more specific, it only keeps within itself the characters that will be allowed, so something like `[aeiou]` limits our regex to accept only vowel letters.

Continuing in our code we could change the `\D` by a list without problems. For instance, where we want to receive the name of the provider after the `@` it must be without numbers and symbols, only letters, we can use a list `[a-z]` that will accept only the range from A to Z, no numbers, symbols and etc, will be accepted.

```js
const regExp = /^\w+@[a-z]+\.[a-z]+$/;
// Adding the list [a-z] in place of "\D".

validateEmail("joao_123@outlook.br");
// This still keeps returning true.

validateEmail("joao_123@gm4il.com");
// However this will return false, note that we put a 4 in the middle of the word.
```

### 2.2 Capture Groups
As we saw in Section 1.5.4, a capturing group can extract values from a given String. Also for when we need a certain part of the regular expression to repeat using quantifiers for example, we can use parentheses around it.

Let's now refactor our code to be able to receive both ".com" and ".com.br" emails and so on. Note that the repeating pattern always has a dot and a sequence of letters, for that we can use a group and say that this pattern can repeat itself one or more times using the `+` quantifier.

```js
const regExp = /^\w+@[a-z]+(\.[a-z]+)+$/;
// Adding the part of the regex responsible for validating the point
// and the sequence of letters in a group inside parentheses.
// And adding an outside quantifier so this pattern can repeat itself.

validateEmail("joao_123@outlook.com.br");
// Returns true, now we can receive emails of various types.

validateEmail("joao_123@outlook.com.br.br.br");
// But this will also return true.
```

To have more control over how many groups we can receive, let's use a more specific quantifier in this case.

```js
const regExp = /^\w+@[a-z]+(\.[a-z]+){1,2}$/;
// Adding an outside quantifier that defines that the group can repeat itself,
// at least once and at most twice.

validaEmail("joao_123@outlook.com.br.br.br");
// Now this will return false.
```


### 2.3 Modifiers
They are similar to metacharacters, but are used outside the expression.
Here I will present just two, which are most used:

|modifier|mnemonic|function|
|:---:|:---:|:---:|
|i|case-insensitive|case insensitive|
|g|global Match|searches for all occurrences of the expression in the text,</br>rather than stopping at the first occurrence|

For our example, we are going to pass the case-insensitive (i) modifier, so that we can also receive emails that have been typed in uppercase letters, as we know that email providers do not make this distinction between uppercase and lowercase.

```js
const regExp = /^\w+@[a-z]+(\.[a-z]+){1,2}$/i;
// Adding the i modifier after the slash that indicates the end of the expression.

validaEmail("JoAo_123@outlook.com.br");
// Now this will also return true.
```

### 2.4 Methods
Let's see some methods that can be used with regex.  
We have been using since the beginning inside our function `validateEmail` the method
`test` which can be invoked from the RegExp object we created. In addition to it, the `exec` method can also be invoked.

|method|function|return|
|:---:|:---:|:---:|
|test|Test string to see if pattern is satisfied|boolean|
|exec|details what was found according to the expression|array or null|

We can also use methods invoked from a string

|method|function|return|
|:---:|:---:|:---:|
|replace|Replaces matched strings with a new string|string|
|match|searches for strings that match the regex|array|

Finally, let's assume that we want to use part of the email before the `@` to be the username, the exec method can help us with that.

For this we will create another function in our code and also add the part of the regex responsible for validating the email before the `@` in a group "()" so that we can capture it with exec.  

```js
const regExp = /^(\w+)@[a-z]+(\.[a-z]+){1,2}$/i;
// Adding a group before the @.

// Creating the function that will use the exec to get the name.
function getUsername(text) {
    return regExp.exec(text)
}

getUsername("JoAo_123@outlook.com.br")
// That way exec will return us an array
// with detailed data about what it found in the text:
// [
//      'JoAo_123@outlook.com.br',        = part of the text that satisfied the expression
//      'JoAo_123',                       = 1st capture group found
//      '.br',                            = 2nd capture group found
//      index: 0,                         = index where it was found
//      input: 'JoAo_123@outlook.com.br'  = input that the exec received
// ]
```

Now we can see better how the `exec` works, but it's still not what we want.
Knowing now that, the returned array will always contain in the first position the part of the text that matched, then the captured groups found and at the end the `index` and `input`. We can just pick the group we want to be the username.

```js
const regExp = /^(\w+)@[a-z]+(\.[a-z]+){1,2}$/i;

// Creating the function that will use the exec to get the name.
function getUsername(text) {
    // here we are directly getting the index 1 of the array returned from exec.
    const userName = regExp.exec(text)[1]
    return userName
}

getUsername("JoAo_123@outlook.com.br")
// Will return "JoAo_123".
```
---
## 3 References
- https://regexr.com/
- https://aurelio.net/regex/guia/
- https://developer.mozilla.org/en-us/docs/Web/JavaScript/Guide/Regular_Expressions


---
## 4 Conclusion
Regex are very useful in the day to day of a developer, an incredible tool that helps when it comes to validations, searches, etc.
What did you think of this post? Do you have any suggestions or criticisms? Leave a reaction or a comment below. And thanks for visiting! 😉
