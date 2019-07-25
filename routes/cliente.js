let express = require('express');
let router = express.Router();

const clienteController = require('../controllers/clienteController')

router.route('/cliente')
    .get(clienteController.index)
    .post(clienteController.create)

router.route('/cliente/:usuario_id')
    .get(clienteController.find)

module.exports = router;