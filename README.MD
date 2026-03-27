<div align="center">

  <img src="./.assets/blue-saiyan-bg.png" alt="Logo" height="200">
  <h1 align="center"><strong>API Minimalista - Fórmula 1</strong></h1>
  <p align="center">
	  Uma API minimalista com dados de equipes e pilotos da Fórmula 1.<br> Projeto construído durante o curso de Node.js da <b>DIO</b>, utilizando como base as aulas do <b>Felipe Aguiar (Felipão)</b>.
  </p>

</div>

<br />

  <!-- Badges -->
<div align="center">
  
  [![TypeScript version][ts-badge]][typescript-5-4]
  [![Node.js version][nodejs-badge]][nodejs]

</div>

# 🚀 Technologies

Este projeto foi desenvolvido com as seguintes tecnologias e pacotes:

### 📦 Dependencies

- [typescript][typescript-npm] - Superset for application scale JavaScript development
- [tsx][tsx-npm] - TypeScript Execute (tsx): Enable Node.js to run TypeScript
- [tsup][tsup-npm] - Bundle your TypeScript library with no config, powered by esbuild
- [@types/node][@types/node-npm] - type definitions for node
- [fastify](https://fastify.dev/) - Framework web rápido e de baixo custo para Node.js
- [@fastify/cors](https://github.com/fastify/fastify-cors) - Plugin CORS para o Fastify

### 📄 Files

- `.gitignore` - Ignore folders like node_modules
- `.env` - Enviroment variables
- `tsconfig.json` - Typescript configure Options

### ⚡ Scripts

- `npm run dist`: Compiles TypeScript files to JavaScript in the dist directory.
- `npm run start:dev`: Runs the server in development mode with environment variables loaded from the .env file.
- `npm run start:watch`: Runs the server in development mode with support for automatic reload on file changes.
- `npm run start:dist`: Compiles the project and runs the compiled version from the dist directory.

## 🛣️ Rotas da API

- `GET /teams`: Retorna a lista de todas as equipes (Construtores) da Fórmula 1.
- `GET /drivers`: Retorna a lista de todos os pilotos.
- `GET /drivers/:id`: Retorna os dados de um piloto específico baseado no `id` numérico fornecido.

# 👨‍💻 How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v20+](https://nodejs.org/en/) + [NPM v10+](https://nodejs.org/en/) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone <sua-url-do-repositorio-aqui>

# Go into the repository
$ cd project-formula-1

# Install dependencies
$ npm install
```

## Author

👩🏻‍💻 Projeto desenvolvido por [Maria Aline Mees](https://github.com/MariaAlineMees/)

# Credits

- Aulas e Boilerplate Node baseados no conteúdo do professor [Felipe Aguiar (Felipão)](https://github.com/felipeAguiarCode).
- Projeto realizado na plataforma [DIO (Digital Innovation One)](https://www.dio.me/).

[typescript]: https://www.typescriptlang.org/
[typescript-5-4]: https://www.typescriptlang.org/
[ts-badge]: https://img.shields.io/badge/TypeScript-5.4-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2020.00-blue.svg
[nodejs]: https://nodejs.org/
[dribble-icon]: https://dribbble.com/Schakalwal
[typescript-npm]: https://www.npmjs.com/package/typescript
[tsx-npm]: https://www.npmjs.com/package/tsx
[tsup-npm]: https://www.npmjs.com/package/tsup
[@types/node-npm]: https://www.npmjs.com/package/@types/node
