//este middleware se usa para modificar cambiar edita codigo mucho antes que se llegue al controlado en este caso lo usamos para poder encriptar una contraseña
const bcrypt = require("bcrypt");
const hash = async (req, res, next) => {
  // console.log('soy el primer middlewares creado en clases')

  // return res.status(404).json('soy el primer middlewares creado en  clases ')

  const { password } = req.body;

  const hash = await bcrypt.hash(password, 10); //codigo para encriptar la contraseña
  req.passwordHash = hash;

  next(); // este metodo hace que se ejecute el siguiente archivo dnetro del post
};

module.exports = hash;
