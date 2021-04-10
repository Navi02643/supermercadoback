const express = require('express');
const router = express.Router();

const frutasCtrl = require('../controllers/frutas.controller');

router.get('/', frutasCtrl.getFrutas);
router.post('/', frutasCtrl.createRegistro);
router.get('/',frutasCtrl.getFruta);
router.post('/edit', frutasCtrl.updatefruta);
router.delete('/:id',frutasCtrl.deletefruta);


module.exports = router;