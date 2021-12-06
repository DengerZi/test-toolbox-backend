export default {
  definition: {
    openapi: `3.0.1`,
    info: {
      title: `Sheriff API`,
      version: `0.0.1`,
      description: `Sheriff backend API`,
      license: {
        name: `MIT`,
        url: `https://spdx.org/licenses/MIT.html`,
      },
      contact: {
        name: `Keiron`,
        url: `https://keiron.cl`,
        email: `contacto@keiron.cl`,
      },
    },
    servers: [
      {
        url: `http://localhost:4000/api/v1`,
      },
      {
        url: `https://api.sheriff.keiron.cl/api/v1`,
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: `http`,
          scheme: `bearer`,
          bearerFormat: `JWT`,
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: [`./controllers/*/swagger/index.js`, `./utils/response.js`],
}
