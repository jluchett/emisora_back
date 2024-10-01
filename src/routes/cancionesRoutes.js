const express = require('express');
const router = express.Router();
const getAllCanciones = require('../controllers/canciones/getAllCanciones');
const addCancion = require('../controllers/canciones/addCancion');
const updateCancion = require('../controllers/canciones/updateCancion');

router.get('/', getAllCanciones);
router.post('/add', addCancion );
router.put('/update/:id', updateCancion);

module.exports = router;
