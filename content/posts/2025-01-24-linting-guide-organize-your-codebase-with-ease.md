---
title: "Linting Guide: Organize Your Codebase with Ease"
description: Keeping your codebase clean and organized is essential for
  collaboration and maintainability. This guide will help you set up and use
  tools like **EditorConfig**, **ESLint**, **Prettier**, **Husky**, and
  **Lint-Staged** to streamline your development workflow.
date: 2025-01-24 06:02:03
thumbnailImage: ../../static/assets/img/thumb_home.png
category: blog
tags:
  - ""
---
## Setting Up for VSCode Users

For **VSCode** users, you can enable linting to run automatically when saving a file. Add a project-specific settings file:

1. Create a `.vscode` folder at the root of your project.
2. Add a `settings.json` file with the following content:

```json
{
  "editor.formatOnSave": true
}
```

### Required VSCode Extensions:
- **ESLint**: [Install](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- **Prettier**: [Install](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

---

## EditorConfig

**EditorConfig** helps enforce consistent coding styles across different editors and IDEs. It works seamlessly with version control systems.

### Creating an `.editorconfig` File
Add an `.editorconfig` file at the root of your project with the following configuration:

```ini
# editorconfig.org
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

## Adding ESLint

**ESLint** is a tool for identifying and fixing problems in your JavaScript code.

### Installation
Run the following command:

```sh
npm init @eslint/config@latest
```

Follow the prompts to configure ESLint for your project. For example:

- **Use ESLint to check syntax and find problems**
- **Use JavaScript modules (import/export)**
- **Specify the frameworks and environments your code runs in**

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

## Setting Up Prettier

**Prettier** is an opinionated code formatter.

### Installation

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

### Prettier Ignore

Specify files to exclude from formatting in a `.prettierignore` file:

```sh
node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"
```

Example:
```
!.storybook
!.jest
build
coverage
.next
```

### Format All Files

Run Prettier to format all files in the project:

```sh
npx prettier . --write
```

### Integrating ESLint and Prettier
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

## Git Hooks with Husky and Lint-Staged

Use **Husky** and **Lint-Staged** to ensure linting and formatting run before committing code.

### Installation

```sh
npm install --save-dev husky lint-staged
```

### Initialize Husky

Set up Husky:

```sh
npx husky init
```

This creates a `.husky/pre-commit` file and updates your `package.json`.

### Configure Lint-Staged

Update `.husky/pre-commit` to run lint-staged:

```sh
npx --no-install lint-staged
```

Create a `.lintstagedrc.js` configuration file:

```js
module.exports = {
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `npm run lint --fix . ${filenames.join(' --file')}`
  ]
};
```

---

By following this guide, your project will benefit from consistent code quality, automated formatting, and seamless integration with your development tools. Happy coding!