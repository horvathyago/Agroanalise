const express = require('express');
const bodyParser = require('body-parser');
const rotas = require('./rotas.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(rotas);

// Iniciar o servidor
app.listen(3000, () => {
  console.log('🚀 Servidor rodando em http://localhost:3000');
});
