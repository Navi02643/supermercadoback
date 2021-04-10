const express = require('express');
const router = express.Router();

const ropasCtrl = require('../controllers/ropas.controller');

router.get('/', ropasCtrl.getRopas);
router.post('/', ropasCtrl.createRegistro);
router.get('/:id', ropasCtrl.getRopa);
router.post('/edit', ropasCtrl.updateRopa);
router.delete('/:id',ropasCtrl.deleteRopa);

module.exports = router;