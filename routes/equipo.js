let express = require('express');
let router = express.Router();

const equipoController = require('../controllers/equipoController')

router.route('/equipo')
    .get(equipoController.index)
    .post(equipoController.create)

router.route('/equipo/:id')
    .get(equipoController.find)

module.exports = router;