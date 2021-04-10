const carnesModel = require('../models/carnes');
const carnesCtrl = {};


carnesCtrl.getCarnes = async (req, res) => {
    const carnes = await carnesModel.find();
    res.json(carnes);
};

carnesCtrl.getcarne = async (req,res) => {
    const find = await CarnesModel.findById(req.params.id);
    res.json(find);
};

carnesCtrl.createRegistro = async (req, res) => {
    console.log(req.body)
    const registros = new carnesModel({
        nombre: req.body.nombre,
        marca: req.body.marca,
        precio: req.body.precio,
        caducidad: req.body.caducidad
    });
    await registros.save();
    res.json({
        'estado': 'Producto registrado'
    });
    console.log(req.body);
};

carnesCtrl.updateRegistro = async (req, res) => {
    const id = mongoose.mongo.ObjectId(req.body._id);
  const newProducto = {
    nombre: req.body.nombre,
    marca: req.body.marca,
    precio: req.body.precio,
    caducidad: req.body.caducidad,
  };
  //(id, objeto nuevo, si no existe, crealo)
  await productoModel.findByIdAndUpdate(
    id,
    { $set: newProducto },
    { new: true }
  );
  res.json({
    status: "Actualizado",
  });
}

carnesCtrl.deleteRegistro = async (req,res) =>{
    await carnesModel.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Carne eliminada'
    });
}

module.exports = carnesCtrl;
