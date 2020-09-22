var express = require('express');
var router = express.Router();
var animalesController = require('../controller/animalesController');

router.get('/', animalesController.usuarios_list);

router.post('/', animalesController.consulta_animales);


module.exports = router;