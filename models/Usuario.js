const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({
    id: {
        type: String,
        required: [true, 'El id es requerido'],
        unique: true
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    equipoId: {
        type: String,
        required: [true, 'El id de usuario es necesario']
    }
})

let usuario = mongoose.model('Usuario', usuarioSchema)
module.exports = usuario