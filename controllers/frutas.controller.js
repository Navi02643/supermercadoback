const frutasModel = require("../models/frutas");
const frutasCtrl = {};

frutasCtrl.getFrutas = async (req, res) => {
  const frutas = await frutasModel.find();
  res.json(frutas);
};

frutasCtrl.getFruta = async (req,res) => {
  const find = await frutasModel.findById(req.params.id);
  res.json(find);
};

frutasCtrl.createRegistro = async (req, res) => {
  console.log(req.body);
  const registros = new frutasModel({
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

frutasCtrl.updatefruta = async (req, res) => {
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

frutasCtrl.deletefruta = async (req, res) => {
  await frutasModel.findByIdAndRemove(req.params.id);
  res.json({
    status: "Fruta eliminada",
  });
};

module.exports = frutasCtrl;
