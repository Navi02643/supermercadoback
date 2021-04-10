const registroModel = require("../models/registro");
const registroCtrl = {};

registroCtrl.getRegistro = async (req, res) => {
  const users = await user.find();
  res.json(users);
};

registroCtrl.createRegistro = async (req, res) => {
  const user = new registroModel(req.body);
  const usuarioEncontrado = await registroModel.findOne({
    correo: { $regex: `^${user.correo}$`, $options: "i" },
  });
  if (usuarioEncontrado)
    return res.status(400).json({
      ok: false,
      resp: 400,
      msg: "El correo del usuario que desea registrar ya se encuentra en uso.",
      cont: {
        Correo: usuarioEncontrado.correo,
      },
    });

  console.log(req.body);
  const registro = new registroModel({
    nombre: req.body.nombre,
    correo: req.body.correo,
    contrasena: req.body.contrasena,
    tipo: req.body.tipo,
  });
  await registro.save();
  res.json({
    estado: "Usuario registrado",
  });
  console.log(req.body);
};

registroCtrl.updateRegistro = async (req, res) => {
  const { id } = req.params;
  const newUsr = {
    name: req.body.name,
    role: req.body.role,
    password: req.body.password,
    user: req.body.user,
  };
  await user.findByIdAndUpdate(id, { $set: newUsr }, { new: true });
  res.json({
    status: "Usuario actualizado",
  });
};

registroCtrl.deleteRegistro = async (req, res) => {
  await user.findByIdAndRemove(req.params.id);
  res.json({
    status: "Usuario eliminado",
  });
};
module.exports = registroCtrl;
