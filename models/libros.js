const mongoose = require('mongoose');
const { Schema } = mongoose;

const LibrosSchema = new Schema({
    anio: { type: Number, required: false },
    autor: { type : String, required: false },
    titulo: { type : String, required: false },
    editorial: { type : String, required: false },
    paginas: { type : Number, required: false },


});

module.exports = mongoose.model('Libros', LibrosSchema);