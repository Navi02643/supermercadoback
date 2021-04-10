const mongoose = require('mongoose');
const { Schema } = mongoose;

const RegistroSchema = new Schema({
    nombre: { type: String, required: true },
    correo: { type : String, required: true },
    contrasena: { type : String, required: true },
    tipo: {type : String, default: 'User'}
});

module.exports = mongoose.model('Registro', RegistroSchema,"registro");