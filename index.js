const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

app.get('/clientes', (req, res) => {
  db.query('SELECT * FROM clientes', (error, results) => {
    if (error) {
      console.error('Error al consultar clientes:', error);
      return res.status(500).json({ success: false, message: 'Error interno del servidor' });
    }
    res.json({ success: true, datos: results });
  });
});

app.listen(port, () => {
  console.log(`API running on port ${port}`);
});

