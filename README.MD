<div align="center">

  <img src="./assets/blue-saiyan-bg.png" alt="Logo" height="200">
  <h1 align="center"><strong>Minimalist API - Formula 1</strong></h1>
  <p align="center">
	  A minimalist API with data from Formula 1 teams and drivers.<br> Project built during the Node.js course at <b>DIO</b>, based on the classes of <b>Felipe Aguiar (Felipão)</b>.
  </p>

</div>

<br />

  <!-- Badges -->
<div align="center">
  
  [![TypeScript version][ts-badge]][typescript-5-4]
  [![Node.js version][nodejs-badge]][nodejs]

</div>

# 🚀 Technologies

This project was developed with the following technologies and packages:

### 📦 Dependencies

- [typescript][typescript-npm] - Superset for application scale JavaScript development
- [tsx][tsx-npm] - TypeScript Execute (tsx): Enable Node.js to run TypeScript
- [tsup][tsup-npm] - Bundle your TypeScript library with no config, powered by esbuild
- [@types/node][@types/node-npm] - type definitions for node
- [fastify](https://fastify.dev/) - Fast and low overhead web framework, for Node.js
- [@fastify/cors](https://github.com/fastify/fastify-cors) - CORS plugin for Fastify

### 📄 Files

- `.gitignore` - Ignore folders like node_modules
- `.env` - Enviroment variables
- `tsconfig.json` - Typescript configure Options

### ⚡ Scripts

- `npm run dist`: Compiles TypeScript files to JavaScript in the dist directory.
- `npm run start:dev`: Runs the server in development mode with environment variables loaded from the .env file.
- `npm run start:watch`: Runs the server in development mode with support for automatic reload on file changes.
- `npm run start:dist`: Compiles the project and runs the compiled version from the dist directory.

## 🛣️ API Routes

- `GET /teams`: Returns the list of all Formula 1 teams (Constructors).
- `GET /drivers`: Returns the list of all drivers.
- `GET /drivers/:id`: Returns the data of a specific driver based on the provided numeric `id`.

# 👨‍💻 How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v20+](https://nodejs.org/en/) + [NPM v10+](https://nodejs.org/en/) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/MariaAlineMees/API-F1-Minimalista-Node

# Go into the repository
$ cd project-formula-1

# Install dependencies
$ npm install
```

## Author

👩🏻‍💻 Project developed by [Maria Aline Mees](https://github.com/MariaAlineMees/)

# Credits

- Node classes and Boilerplate based on the content of professor [Felipe Aguiar (Felipão)](https://github.com/felipeAguiarCode).
- Project carried out on the [DIO (Digital Innovation One)](https://www.dio.me/) platform.

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
