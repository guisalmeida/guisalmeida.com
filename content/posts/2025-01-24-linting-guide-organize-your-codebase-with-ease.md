---
title: "Linting Guide: Organize Your Codebase with Ease"
description: Keeping your codebase clean and organized is essential for collaboration and maintainability. This guide will help you set up and use tools like EditorConfig, ESLint, Prettier, Husky, and Lint-Staged to streamline your development workflow.
date: 2025-01-24 06:02:03
thumbnailImage: ../../static/assets/img/linting.avif
category: blog
tags:
  - eslint
  - prettier
  - editorconfig
  - husky
---

## Index

```toc
exclude: Index
```

---

## 1. Setting Up for VSCode Users

For **VSCode** users, you can enable linting to run automatically when saving a file. Add a project-specific settings file:

1. Create a `.vscode` folder at the root of your project.
2. Add a `settings.json` file with the following content:

```json
{
  "editor.formatOnSave": true
}
```

### 1.1 Required VSCode Extensions
- **ESLint**: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
- **Prettier**: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

---

## 2. EditorConfig

**EditorConfig** helps enforce consistent coding styles across different editors and IDEs. It works seamlessly with version control systems.

### 2.1 Creating an `.editorconfig` File
Add a `.editorconfig` file at the root of your project with your preferred configuration, for more examples check [editorconfig.org](https://editorconfig.org/).

Example `.editorconfig`:  

```ini
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
end_of_line = lf
insert_final_newline = true
```

---

## 3. Adding ESLint

**ESLint** is a tool for identifying and fixing problems in your **JavaScript** code.

### 3.1 Installation
Run the following command:

```sh
npm init @eslint/config@latest
```

Follow the prompts to configure ESLint for your project. For example:

```sh
- 'Use ESLint to check syntax and find problems'
- 'Use JavaScript modules (import/export)'
- 'Specify the frameworks and environments your code runs in'
...
```

This will generate a configuration file, e.g., `eslint.config.js`:

```js
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn"
    }
  }
];
```

---

## 4. Setting Up Prettier

**Prettier** is an opinionated code formatter.

### 4.1 Installation

```sh
npm install --save-dev --save-exact prettier
```

Create a Prettier configuration file:

```sh
node --eval "fs.writeFileSync('.prettierrc.json','{}\n')"
```

Example `.prettierrc.json`:

```json
{
  "trailingComma": "none",
  "semi": true,
  "singleQuote": true
}
```

### 4.2 Prettier Ignore

Specify files to exclude from formatting in a `.prettierignore` file:

```sh
node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"
```

Example `.prettierignore`:
```
!.storybook
!.jest
build
coverage
.next
```

### 4.3 Format All Files

Run Prettier to format all files in the project:

```sh
npx prettier . --write
```

### 4.4 Integrating ESLint and Prettier
Install the ESLint Prettier configuration:

```sh
npm install --save-dev eslint-config-prettier
```

Update your ESLint configuration to include Prettier:

```json
{
  "extends": [
    "prettier"
  ]
}
```

---

## 5. Git Hooks with Husky and Lint-Staged

Use **Husky** and **Lint-Staged** to ensure linting and formatting run before committing code.

### 5.1 Installation

```sh
npm install --save-dev husky lint-staged
```

### 5.2 Initialize Husky

Set up Husky:

```sh
npx husky init
```

This creates a `.husky/pre-commit` file and updates your `package.json`.

### 5.3 Configure Lint-Staged

Update `.husky/pre-commit` to run lint-staged:

```sh
npx --no-install lint-staged
```

Create a `.lintstagedrc.js` configuration file, this will tell Lint-staged what it should run before a commit.

```js
module.exports = {
  // Lint & Prettify TS and JS files
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `npm run lint --fix . ${filenames.join(' --file')}`,
    `npm test -- --findRelatedTests ${filenames.join(' ')}`
  ]
};
```

---

## 6. Conclusion
By following this guide, your project will benefit from consistent code quality, automated formatting, and seamless integration with your development tools.  
What did you think of this post? Do you have any questions, suggestions or criticisms? Leave a reaction or a comment below. Thanks for visiting! 😉
