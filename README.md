## STEP BY STEP

**00. Adicionar as seguintes extensões no VS Code**
gitignore
EditorConfig for VS Code
Prettier  

**01. Estrutura básica (CA)**
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

**02. Inicializar package.json**

npm init -y


**03. Inicializar repositório git**

git init
CTRL+SHIFT+P > Add gitignore > Node
 
 
**04. Adicionar .editorconfig**

CTRL+SHIFT+P > Generate .editorconfig
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true  


**05. Adicionar typescript e jest**

npm i -D typescript jest @types/jest ts-node tsconfig-paths
npx tsc --init  


**06. Adicionar linters: eslint + prettier**

npm i -D eslint prettier
npx eslint --init


How would you like to use ESLint? (Use arrow keys)
> To check syntax, find problems, and enforce code style 

What type of modules does your project use?
> JavaScript modules (import/exports)  

Which framework does your project use?
> None of these 

Does your project use TypeScript?
> Yes 

Where does your code run? (Press <space> to select, <a> to toggle all, <i> to invert selection)
> Selecionar apenas Node 

How would you like to define a style for your project?
> Use a popular style guide

Which style guide do you want to follow?
> Airbnb (https://github.com/airbnb/javascript)  

What format do you want your config file to be in?
> JSON

Would you like to install them now with npm?
> Yes  
  

**07. Configurar prettier com eslint**
  
npm i -D eslint-config-prettier eslint-plugin-prettier
  
Abrir .eslintrc.json
  
Adicionar "prettier" ao array de extends
  
Adicionar "prettier" ao array de plugins
  
Adicionar "prettier/prettier": "error" ao array de rules
  
CTRL+SHIFT+P > Preferences: Open Workplace Settings (JSON)
    {
	    "editor.defaultFormatter": "esbenp.prettier-vscode",
	    "editor.formatOnSave": true
    }
  
Adicionar .prettierignore
*.md
  
Adicionar arquivo .prettierrc.json
    {
    "trailingComma": "es5",
    "tabWidth": 2,
    "semi": true,
    "singleQuote": true
    }
