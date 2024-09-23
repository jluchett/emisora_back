const { Pool } = require('pg');
const dotenv = require('../config/dotenv');

// Crear una nueva instancia del pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Función para ejecutar consultas
const query = (text, params) => pool.query(text, params);

module.exports = { query };
