const mongoose = require('mongoose')

const equipoSchema = new mongoose.Schema({
    id: {
        type: String,
        required:[true, 'El id es necesario'],
        unique: true
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    }
})

let equipo = mongoose.model('Equipo', equipoSchema)
module.exports = equipo