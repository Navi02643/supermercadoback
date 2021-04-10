const express = require('express');
const router = express.Router();
const app = express();
const registroCtrl = require('../controllers/registro.controller');

router.post('/', registroCtrl.createRegistro);
router.get('/',registroCtrl.getRegistro)
router.put('/:id',registroCtrl.updateRegistro);
router.delete('/:id',registroCtrl.deleteRegistro);

module.exports = router;