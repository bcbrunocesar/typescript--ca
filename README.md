# STEP BY STEP

## Adicionar as seguintes extensões no VS Code
gitignore
EditorConfig for VS Code
Prettier

## Estrutura básica (CA)
    ├───src
    │ ├───adapter
    │ ├───controller
    │ ├───core
    │ │ ├───entity
    │ │ ├───port
    │ │ └───usecase
    │ └───infra
    │ ├───http
    │ └───repository
    └───tests
    ├───component
    ├───integration
    ├───mocks
    └───unit

## Inicializar package.json
    npm init -y


## Inicializar repositório git
    git init

#### Adicionar gitignore
CTRL+SHIFT+P > Add gitignore > Node

## Adicionar .editorconfig
CTRL+SHIFT+P > Generate .editorconfig

    indent_style = space
    indent_size = 2
    end_of_line = lf
    charset = utf-8
    trim_trailing_whitespace = true
    insert_final_newline = true

## Adicionar typescript e jest
    npm i -D typescript jest @types/jest ts-node tsconfig-paths
    npx tsc --init

## Adicionar linters: eslint + prettier
    npm i -D eslint prettier
    npx eslint --init

How would you like to use ESLint? (Use arrow keys)\
``To check syntax, find problems, and enforce code style``

What type of modules does your project use?\
``JavaScript modules (import/exports)``

Which framework does your project use?\
``None of these``

Does your project use TypeScript?\
``Yes``

Where does your code run? (Press space to select)\
``Selecionar apenas Node``

How would you like to define a style for your project?\
``Use a popular style guide``

Which style guide do you want to follow?\
``Airbnb (https://github.com/airbnb/javascript)``

What format do you want your config file to be in?\
``JSON``

Would you like to install them now with npm?\
``Yes``

## Configurar prettier com eslint
    npm i -D eslint-config-prettier eslint-plugin-prettier

Abrir .eslintrc.json
Adicionar "prettier" ao array de extends
Adicionar "prettier" ao array de plugins
Adicionar "prettier/prettier": "error" ao array de rules
CTRL+SHIFT+P > Preferences: Open Workplace Settings (JSON)

    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true

Adicionar .prettierignore

    *.md

Adicionar arquivo .prettierrc.json

    "trailingComma": "es5",
    "tabWidth": 2,
    "semi": true,
    "singleQuote": true
