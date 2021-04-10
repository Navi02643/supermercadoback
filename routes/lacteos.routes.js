const express = require('express');
const router = express.Router();

const lacteosCtrl = require('../controllers/lacteos.controller');

router.get('/', lacteosCtrl.getLacteos);
router.post('/', lacteosCtrl.createRegistro);
router.get('/:id', lacteosCtrl.getLacteo);
router.post('/edit', lacteosCtrl.updateLacteo);
router.delete('/:id',lacteosCtrl.deleteLacteo);

module.exports = router;