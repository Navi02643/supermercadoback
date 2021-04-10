const mongoose = require('mongoose');
const { Schema } = mongoose;

const RopasSchema = new Schema({
    nombre: { type: String, required: true },
    marca: { type : String, required: true },
    precio: { type : Number, required: true },
    caducidad: { type : String, required: true },
    existencia: { type : Boolean, default: true }
});

module.exports = mongoose.model('Ropas', RopasSchema);