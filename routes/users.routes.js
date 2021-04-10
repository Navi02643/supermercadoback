const express = require('express');
const router = express.Router();
const app = express();
const loginCtrl = require('../controllers/user.controller');

router.get('/',loginCtrl.loginUser);


module.exports = router;