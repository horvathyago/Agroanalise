const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./db.js');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Rota de teste
app.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});

// Rota para receber formulário
app.post('/enviar', (req, res) => {
    const { nome, email, senha } = req.body;
  
    const sql = 'INSERT INTO Usuarios (nome, email, senha) VALUES (?, ?, ?)';
    connection.query(sql, [nome, email, senha], (err, result) => {
      if (err) {
        console.error('❌ Erro ao inserir no banco:', err.sqlMessage || err.message);
        return res.status(500).send('Erro ao cadastrar: ' + (err.sqlMessage || err.message));
      }
  
      res.send('✅ Usuário cadastrado com sucesso!');
    });
  });
  

// Iniciar servidor
app.listen(3000, () => {
  console.log('🚀 Servidor rodando em http://localhost:3000');
});
const path = require('path');

// Servir o arquivo HTML
app.get('/formulario', (req, res) => {
  res.sendFile(path.join(__dirname, 'formulario.html'));
});
