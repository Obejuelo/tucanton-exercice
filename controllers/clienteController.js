const Cliente = require('../models/Cliente')

const index = (req, res) => {
    Cliente.find()
        .then(data => {
            res.json(data)
        })
}

const find = (req, res) => {
    let equipoId = req.params.equipo_id
    let usuarioId = req.params.usuario_id
	Cliente.find({usuarioId})
		.then(data => {
			res.json(data)
		})
		.catch(err => {
			res.status(300).json(err)
			console.log(err)
		})
}

const create = (req, res) => {
    let body = req.body
    Cliente.create({
        id: body.id,
        email: body.email,
        usuarioId: body.usuarioId
    }).then(data => {
        res.json(data)
    }).catch(err => {
        res.status(300).json(err)
    })
}

module.exports = {index, create, find}