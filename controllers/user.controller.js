const user = require('../models/registro');
const userCtrl = {};

userCtrl.loginUser = async (req,res, next) => {
    const userData = {
        nombre: req.body.nombre,
        contrasena: req.body.constrasena
    }
    user.findOne({ usuario: userData.nombre }, (err, user) => {
        if (err)  return res.status(500).send('Server error!');
        if (!user) {
            res.status(409).send({ message: 'Algo esta mal' });
          } else {   
            const resultPassword = bcrypt.compareSync(userData.constrasena, user.constrasena);
         if (resultPassword) {
          const accessToken = jwt.sign({ id: user.id });
          const dataUser = {
            nombre: user.nombre,
            usario: user.usario,
            accessToken: accessToken,
        }

            res.send({ dataUser });
        } else {
          res.status(409).send({ message: 'Algo esta mal' });
        }
    }
    });
    
}
module.exports = userCtrl;
