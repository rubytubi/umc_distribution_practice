import SwaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'UMC Study API',
      version: '1.0.0',
      description: 'UMC Study API with express, API 설명'
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/*.js', './swagger/*'],
};

export const specs = SwaggerJsdoc(options);
