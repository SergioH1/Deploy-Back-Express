# Serve Node-Express-TypeScrip-Jest

## Express

-   Framework minimalista para crear servidores Node
    -   especialmente APIs
    -   patron: chain of responsibility
    -   implementado con middleware

## Instalación

```shell
npm i express @types/express
```

## Utilización

### Directamente

```ts
import express from 'express';

const app = express();
const port = 3800;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
```

### En un server de node

-   index.ts -> http.server(app)
-   app.ts -> export const app = express()

### Midleware

-   Elementos de terceros

-   Morgan: logger
-   CORS: Cross-Origin Resource Sharing
-   Parse.json() // incluido en Express

#### Utilización

app.use()
