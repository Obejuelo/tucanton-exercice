const Equipo = require('../models/Equipo')

const index = (req, res) => {
    Equipo.find()
        .then(data => {
            res.json(data)
        })
}

const find = (req, res) => {
    let id = req.params.id
	Equipo.findOne({'_id': id})
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
    Equipo.create({
        id: body.id,
        nombre: body.nombre
    }).then(data => {
        res.json(data)
    }).catch(err => {
        res.status(300).json(err)
    })
}

module.exports = {index, create, find}