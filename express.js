import express from 'express';
import SwaggerUi from 'swagger-ui-express';

import {specs} from './config/swagger.config';

const app = express();
const port = 3000;

// Middleware for logging requests
const myLogger = (req, res, next) => {
  console.log('LOGGED');
  next();
};

app.use(myLogger);

app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(specs));

// Route for the root URL
app.get('/', (req, res) => {
  console.log('/');
  res.send('Hello UMC!');
});

// Route for /hello URL
app.get('/hello', (req, res) => {
  console.log('/hello');
  res.send('Hello world!');
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
