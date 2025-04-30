const express = require('express');
const router = express.Router();
const connection = require('./banco');

// Rota de teste
router.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});

// Rota de cadastro
router.post('/enviar', (req, res) => {
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

module.exports = router;
