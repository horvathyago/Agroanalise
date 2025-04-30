require('dotenv').config();
const mysql = require('mysql2');

// Criação da conexão
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.PORT || 3306
});

// Testando conexão
connection.connect((err) => {
  if (err) {
    console.error('❌ Erro ao conectar ao MySQL:', err.message);
  } else {
    console.log('✅ Conectado ao MySQL com sucesso!');
  }
});

module.exports = connection;

