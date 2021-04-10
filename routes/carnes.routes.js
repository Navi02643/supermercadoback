const express = require('express');
const router = express.Router();

const carnesCtrl = require('../controllers/carnes.controller');

router.get('/:id', carnesCtrl.getcarne);
router.get('/', carnesCtrl.getCarnes);
router.post('/', carnesCtrl.createRegistro);
router.post('/edit', carnesCtrl.updateRegistro);
router.delete('/:id',carnesCtrl.deleteRegistro);

module.exports = router;