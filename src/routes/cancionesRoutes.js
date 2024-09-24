const express = require('express');
const router = express.Router();
const getAllCanciones = require('../controllers/canciones/getAllCanciones');
const addCancion = require('../controllers/canciones/addCancion');

router.get('/', getAllCanciones);
router.post('/add', addCancion )

module.exports = router;
