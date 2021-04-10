const mongoose = require('mongoose');
const { Schema } = mongoose;

const CarnesSchema = new Schema({
    nombre: { type: String, required: false },
    marca: { type : String, required: false },
    precio: { type : Number, required: false },
    caducidad: { type : String, required: false },
    existencia: { type : Boolean, default: true }
});

module.exports = mongoose.model('Carnes', CarnesSchema);