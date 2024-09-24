const db = require('../../db/db');

// Obtener todas las canciones
const getAllCanciones = async (req, res, next) => {
  try {
    const result = await db.query('SELECT * FROM canciones ORDER BY titulo');
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
};

module.exports = getAllCanciones;
