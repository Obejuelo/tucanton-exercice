let express = require('express');
let router = express.Router();

const usuarioController = require('../controllers/usuarioController')

router.route('/usuario')
    .get(usuarioController.index)
    .post(usuarioController.create)

// router.route('/usuario/:id')
//     .get(usuarioController.find)

router.route('/usuario/:id')
    .get(usuarioController.findByDevice)

module.exports = router;