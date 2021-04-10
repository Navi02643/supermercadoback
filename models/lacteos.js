const mongoose = require('mongoose');
const { Schema } = mongoose;

const LacteosSchema = new Schema({
    nombre: { type: String, required: true },
    marca: { type : String, required: true },
    precio: { type : Number, required: true },
    caducidad: { type : String, required: true },
    existencia: { type : Boolean, default: true }
});

module.exports = mongoose.model('Lacteos', LacteosSchema);