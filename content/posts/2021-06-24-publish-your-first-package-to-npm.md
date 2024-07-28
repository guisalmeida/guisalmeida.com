---
title: Publish your first package to NPM
description: This post, in addition to showing how to publish a package, also introduces important concepts such as versioning, compatibility and dependency management.
date: 2021-06-24 12:16:14
thumbnailImage: ../../static/assets/img/npmjs-private-package.png
category: blog
tags: 
- npm
- node
- javascript
- semver
---
___

## Index

```toc
exclude: Index
```
---

## 1 Intro
Every day we create or work on projects where we use various third-party packages, be they **libraries**, **CLIs**, or
any other **API** that is useful for something. Practically any project that involves `JS` nowadays will have a file in its root called `package.json` with these saved packages.
When I was starting out creating small projects just importing what I needed without paying much attention to where it came from and how it ended up there, I had no idea how this whole structure worked.

With a little more experience and knowledge I was able to understand some things and go after others to understand better until I was also able to publish my first package and import it into other projects.
This is a simple path, but I believe it is necessary to understand issues like **versioning**, **compatibility**, and **management of dependencies** of your project.

### 1.1 What is NPM
Short for **Node Package Manager**, it was created as an open-source project to help JavaScript developers easily share packaged code modules and is currently owned by **Github**.

NPM has a **Command Line Interface (CLI)** that allows developers to install and publish their packages. There is also an **online database of paid public and private** packages called the **NPM Registry**.

### 1.2 NPM CLI
The CLI syntax always follows the name "npm" followed by the command.
![npm-cli](https://user-images.githubusercontent.com/45276342/124369115-bf453900-dc3e-11eb-85d9-bfc769d181e4.png)

### 1.3 NPM Registry
It has an interface where we can consult the information about packages and other metrics.    

![registry](https://user-images.githubusercontent.com/45276342/124369151-1cd98580-dc3f-11eb-92c1-60a9ad08bb5b.png)


---

## 2 Managing packages
NPM exists to make dependency management easier. Your project can have hundreds of dependencies, each with its dependencies. And this can start to become very complex to maintain an organization, for that **NPM** was created with a set of commands that allow you to install and manage all of this and you will hardly need to worry about them.

When you install a package with NPM, new information is added to the `package.json` file containing the name of the package and the version to be used. As we'll see later, there are some settings to better define these versions.

### 2.1 Context of dependencies
When installing packages in our project we can have two scenarios, where we use packages only for development and others that will also be used in production.
For this, we have the `dependencies` and `devDependencies` information in `package.json` and they differ as follows:

- **dependencies** are generally used to declare the packages needed to run your project in a production runtime environment;

- **devDependencies** are used to indicate packages needed to run your project in a development and testing scenario (such as packages related to testing and general formatting of your project's source code).

To perform an installation, just run in the terminal:  
```
npm install prod-package
npm install --save-dev test-package
```

The line using `--save-dev` will save the package in devDependencies. Already the line without an option is saved by default in dependencies.   

```json
{
  "dependencies": {
    "prod-package": "^2.12.0"
  },
  "devDependencies": {
    "test-package": "^1.1.1"
  }
}
```

> By default NPM will install the newest version of the package, inserting a `^` (caret) character in front of the `^2.12.0` version. This means that the package will be installed with a version that is equal to or greater than 2.12.0. This is based on **Semantic Versioning** as we will see below.

---

## 3 Semantic Versioning (semver)
It's the concept behind NPM and what made it successful. When we are creating an application that others will integrate with, we must communicate how the changes we make will affect those third parties' ability to integrate with their application. This is done through **semantic versioning**, a version is divided into 3 parts and follows the following convention:

| Major | Minor | Patch |  
| :---: | :---: | :---: |  
| **X** | **Y** | **Z** |

### 3.1 Major
It's number 1. Any update that breaks backward compatibility must increment this digit.
Changing something in the major version means there has been a compatibility break. If the user does not make the necessary change, he will no longer be able to integrate with your application.
E.g. Removing a function or removing/renaming a class method.

> Once you make this type of change, run the following command before publishing:
> ```
> npm version major
> ```

### 3.2 Minor
It's the 2nd number. Any update that adds functionality without breaking code that uses previous versions must increment this digit. A change in the minor version achieved new functionality, but without breaking what currently exists.
E.g. adding methods to a class.

> Once you make this type of change, run the following command before publishing:
> ```
> npm version minor
> ```

### 3.3 Patch
It's the 3rd number. Any update that does not add, remove or modify functionality must increment this digit. A patch modification won't break anything. Quite the contrary, it will fix something.
E.g. bug fixes.

> Once you make this type of change, run the following command before publishing:
> ```
> npm version patch
> ```


### 3.4 Ranges
So you open `package.json` and quickly understand that `dependencies` are the packages your application uses, but where package versions should be listed there are a bunch of symbols like **tilde (˜)** and the **caret (^)**.

**ranges** basically allow newer versions of packages to be installed automatically. Bug fixes and important patches can be automatically received or distributed, but important changes are prohibited from being installed.

| Range | Description |
| ------------- |-------------|
| `"*"` | Accepts any version |
| `"2"` or `"2.x.x"` | Specifies a version, covers all versions of PATCH and MINOR |
| `"<1.0.0"` | Only accepts versions in the range `"0.x.x"` |
| `">=1.2.0 <1.3.0"` | Separated by space (and). It is similar to `"1.2.x"` |
| `"1.2.3 - 2.3.4"` | It is the same as `">=1.2.3 <=2.3.4"` |
| `"< 2.1 \|\| > 1.9"` | The `\|\|` (or) operator is used to combine versions |
| `"~1.2.3"` | This is similar to `">=1.2.3 <1.3.0"`.<br>The `~` character (tilde) defines a range of acceptable PATCH versions |
| `"^1.2.3"` | This is similar to `">=1.2.3 <2.0.0"`.<br>The `^` (caret) character defines a range of PATCH and MINOR versions |  

> By convention, when starting the project, version `"0.1.0"` is used for development and when publishing a public version, `"1.0.0"` is used.

Syntax testing tool: <a target="_blank" href="https://semver.npmjs.com/">**npm semver calculator**</a>

---

## 4 Environment
First, we need to set up our development environment to proceed.

### 4.1 Creating a user in NPM
To use public packages available on NPM we don't need a user, but since we want to publish our packages we must have a registered user. Access the part of <a target="_blank" href="https://www.npmjs.com/signup">**cadastro**</a> to create.

![signup](https://user-images.githubusercontent.com/45276342/122768638-2d225580-d27a-11eb-8a17-ae28c4e8eed1.png)

### 4.2 Installing NPM
To use NPM via the command line (CLI) on your machine, you also need to install nodejs. When installing the node, NPM is also installed.
You can install it in several ways according to your operating system, for that you need to access the <a target="_blank" href="https://nodejs.org/pt-br/download/"> downloads page. **node**</a>.  

![node](https://user-images.githubusercontent.com/45276342/124369464-768f7f00-dc42-11eb-9d13-334f944fe276.png)  

On **linux**, you can install via the wget package manager, just open the terminal and run:  
```
wget -qO- https://deb.nodesource.com/setup_14.x | sudo bash -

sudo apt-get install -y nodejs
```

After installing Node.js, you can check both the Node.js version and the NPM version that was installed by running the following commands: `node -v` and `npm -v`.

![versions](https://user-images.githubusercontent.com/45276342/124369558-354b9f00-dc43-11eb-927a-363a605559e0.png)

### 4.3 Logging local
With the tools installed, we can run the command that will log our NPM that is installed on the machine, in order to have access to the registry where the packages are saved so that we can publish our package.  
```
npm adduser
```  
Fill in login info:

```
Username: guisalmeida
Password: *****
Email: (this IS public) guisalmeida.dev@gmail.com

logged...
```

### 4.4 Initial settings
It's a good practice to set some user data so that our packages already have this configuration when started. 

```
npm set init-author-name "Guilherme Almeida"
npm set init-author-email "guisalmeida.dev@gmail.com"
npm set init-author-url "https://guisalmeida.com"
npm set init-license "MIT"
```

### 4.5 Create NPM project
In the project folder pass the following command, `-y` to use the default configuration we set before:
```
npm init -y
```

> If you have already started the project and it already has the `package.json` you can skip this part.
> Just make sure the required settings are in there.

---

## 5 Publication

### 5.1 Package name
It is important to check the **NPM registry** if there is already a package with the same name that you intend to put in yours, as it will not be accepted if there is. Configure the name in `package.json`.
```json
{
   "name": "package-name",
}
```

### 5.2 Exporting only production files
A good practice **before publication**, when the project has many files and uses many other third-party packages is to specify only the folder where the codes generated for production are, for example, the `build` or `dist` folder. In the `package.json` file, the `files` attribute can be passed with the folder name:  
```json
{
  "files": [
    "dist"
  ],
}
```

### 5.3 Package to be exported
Depending on the settings you pass in `package.json`, the package that will be exported will not be the same as your project folder, this has its advantages as we saw above. To see how the package will be created, we can pass the following command:
```
npm pack
```
> A file will be created at the root of the project with the zipped package.

### 5.4 Publishing via CLI
After configuring `package.json`, we just need to pass the command in the project folder:  
```
npm publish
```
If everything is ok, it will compress the files and send them to the registry:    
![publish](https://user-images.githubusercontent.com/45276342/124196251-6771cb00-daa2-11eb-9310-7739c36feeb8.png)

### 5.5 Viewing your package
After publication, you can check some metrics and package settings in the registry, by accessing your profile there will be all your published packages. Make a very complete README, as it will also be visible to other users interested in your package.    
![dbgen-cli](https://user-images.githubusercontent.com/45276342/124196151-31344b80-daa2-11eb-9a86-11e905c87b1f.png)


### 5.6 Importing your package
Finally, your package can now be imported into other projects, as we have seen, just pass the following command:  
```
npm install nome-do-pacote
```

---

## 6 References
- https://semver.org
- https://docs.npmjs.com/about-semantic-versioning
- https://dev.to/coderarchive/semver-and-conventional-commits-4omc
- https://dev.to/mariokandut/what-is-semantic-versioning-3poo
- https://moisesbm.wordpress.com/2018/09/28/how-to-create-publish-and-use-private-npm-packages/
---

## 7 Conclusion
Really NPM is an incredible tool that helps us a lot to manage and scale our projects in an organized way, with that we are more able to keep the project updated with changes, whether they are corrections or improvements.  
What did you think of this post? Do you have any suggestions or criticisms? Leave a reaction or a comment below. And thanks for visiting! 😉