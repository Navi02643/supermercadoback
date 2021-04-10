const libroModel = require('../models/libros');
const librosCtrl = {};


librosCtrl.getLibros = async (req, res) => {
    const libros = await libroModel.find();
    res.json(libros);
};
     
module.exports = librosCtrl;