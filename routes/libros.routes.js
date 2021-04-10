const express = require('express');
const router = express.Router();

const librosCtrl = require('../controllers/libros.controller');

router.get('/', librosCtrl.getLibros);


module.exports = router;