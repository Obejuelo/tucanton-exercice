const Usuario = require('../models/Usuario')

const index = (req, res) => {
    Usuario.find()
        .then(data => {
            res.json(data)
        })
    
}

const find = (req, res) => {
    let equipoId = req.params.id
	Usuario.fin({equipoId})
		.then(data => {
			res.json(data)
		})
		.catch(err => {
			res.status(300).json(err)
			console.log(err)
		})
}

const findByDevice = (req, res) => {
    let equipoId = req.params.id
    Usuario.find({equipoId})
        .then(data => {
            res.json(data)
        })
}

const create = (req, res) => {
    let body = req.body
    Usuario.create({
        id: body.id,
        nombre: body.nombre,
        equipoId: body.equipoId
    }).then(data => {
        res.json(data)
    }).catch(err => {
        res.status(300).json(err)
    })
}

module.exports = {index, create, find, findByDevice}