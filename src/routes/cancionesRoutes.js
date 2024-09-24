const express = require('express');
const router = express.Router();
const getAllCanciones = require('../controllers/canciones/getAllCanciones');

router.get('/', getAllCanciones);

module.exports = router;
