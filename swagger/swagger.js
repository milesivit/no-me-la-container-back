// swagger.js
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'No Me La Container API',
      version: '1.0.0',
      description: 'Documentación de API de Transportes hecha con Node.js',
      contact: { name: 'Developer' }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor local'
      }
    ]
  },
  apis: ['./routes/*.js']
};

const specs = swaggerJsdoc(options);
module.exports = specs;
