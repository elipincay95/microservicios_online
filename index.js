const express = require('express');
const app = express();
const PORT = 3000;

app.use('/clientes', require('./rutas/clientes'));

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}/clientes`);
});