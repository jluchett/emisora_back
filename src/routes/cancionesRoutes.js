const express = require('express');
const router = express.Router();
const getAllCanciones = require('../controllers/canciones/getAllCanciones');
const addCancion = require('../controllers/canciones/addCancion');
const updateCancion = require('../controllers/canciones/updateCancion');
const deleteCancion = require('../controllers/canciones/deleteCancion');

router.get('/', getAllCanciones);
router.post('/add', addCancion );
router.put('/update/:id', updateCancion);
router.delete('/delete/:id', deleteCancion);

module.exports = router;
