const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    nombre: { type: String, required: true },
    tipo: { type : String, required: true },
    pass: { type : String, required: true },
});

module.exports = mongoose.model('Users', UserSchema);