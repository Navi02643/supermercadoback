const ropasModel = require("../models/ropas");
const ropasCtrl = {};

ropasCtrl.getRopas = async (req, res) => {
  const ropas = await ropasModel.find();
  res.json(ropas);
};

ropasCtrl.getRopa = async (req, res) => {
  const find = await ropasModel.findById(req.params.id);
  res.json(find);
};

ropasCtrl.createRegistro = async (req, res) => {
  console.log(req.body);
  const registros = new ropasModel({
    nombre: req.body.nombre,
    marca: req.body.marca,
    precio: req.body.precio,
    caducidad: req.body.caducidad,
  });
  await registros.save();
  res.json({
    estado: "Producto registrado",
  });
  console.log(req.body);
};

ropasCtrl.updateRopa = async (req, res) => {
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
};

ropasCtrl.deleteRopa = async (req, res) => {
  await ropasModel.findByIdAndRemove(req.params.id);
  res.json({
    status: "Bebida eliminada",
  });
};

module.exports = ropasCtrl;
