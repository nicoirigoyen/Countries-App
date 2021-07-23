require("dotenv").config();
const Express = require('express');
const app = Express();
const server = require('./src/app.js');
const {conn} = require('./src/db.js');
const {PORT} = require('./src/utils/middleware/config');


//Aca seteamos el listening del server
conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log("conexión con la base de datos correcta");
    console.log("%s listening at 3001");  // eslint-disable-line no-console
  });
});
