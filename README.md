# xkcd-strips
This app is a simple React app with TypeScript and Vite. which showcase the comics from the [xkcd](https://xkcd.com/) API.
We proxy the API requests to the xkcd API and display the comics in a list. proxy is setup in vite.config.ts


## Tooling

- [Vite](https://vitejs.dev/) - Next generation Vite v2 with HMR
- [TypeScript](https://www.typescriptlang.org/) - TypeScript language service
- [biomejs](https://biomejs.dev/) - javascript linter and formatter
- [styled-components](https://styled-components.com/) - CSS-in-JS library
- [@tanstack/react-query](https://tanstack.com/query/latest) - React Query to fetch data
- [vitest](https://vitest.dev/) - Testing framework

## Recommended IDE and plugins
[VSCode](https://code.visualstudio.com/)  

Install the following extensions:

[Biomejs](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)  
[styled-components](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components)  
[vitest](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)  


## Getting Started

Install dependencies

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## Build

To build the app:

```bash
npm run build
```

## Test

To run the tests:

```bash
npm run test
```