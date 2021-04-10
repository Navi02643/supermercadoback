const lacteosModel = require("../models/lacteos");
const lacteosCtrl = {};

lacteosCtrl.getLacteos = async (req, res) => {
  const lacteos = await lacteosModel.find();
  res.json(lacteos);
};

lacteosCtrl.getLacteo = async (req,res) => {
  const find = await lacteosModel.findById(req.params.id);
  res.json(find);
};

lacteosCtrl.createRegistro = async (req, res) => {
  console.log(req.body);
  const registros = new lacteosModel({
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

lacteosCtrl.updateLacteo = async (req, res) => {
  const { id } = req.params;
  const newlacteo = {
    nombre: req.body.nombre,
    marca: req.body.marca,
    precio: req.body.precio,
    caducidad: req.body.caducidad,
    existencia: req.body.existencia,
  };
  await lacteosModel.findByIdAndUpdate(id, { $set: newlacteo }, { new: true });
  res.json({
    status: "Lacteo actualizado",
  });
};

lacteosCtrl.deleteLacteo = async (req, res) => {
  await lacteosModel.findByIdAndRemove(req.params.id);
  res.json({
    status: "Lacteo eliminado",
  });
};

module.exports = lacteosCtrl;
