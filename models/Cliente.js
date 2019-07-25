const mongoose = require('mongoose')

const clienteSchema = new mongoose.Schema({
    id: {
        type: String,
        required: [true, 'El id es requerido'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    usuarioId: {
        type: String,
        required: [true, 'El id de usuario es necesario']
    }
})

let cliente = mongoose.model('Cliente', clienteSchema)
module.exports = cliente