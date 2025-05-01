// este es el middlewares para el login para poder verificar si la contraseña y el email es correcto ono
const bcrypt = require("bcrypt");
const { getUserServices } = require("../services/user.services");

const credentials = async (req, res, next) => {
  const { email, password } = req.body; //desestructuro el res.bod que vidne el cliente en las claves
  const user = await getUserServices(email); //aqui hace la consulta a la base de datos
  //retornar mensaje de error, Esta es la validacion del email
  if (!user)
    return res.status(401).json({
      error:
        "Invalid credentials resp paul zaruma -- user, Email invalido o no exist",
    });
  //aqui retorna el res pero en un archivo json

  //validacion del password
  //este es el uso del COMPARE compara dos incriptaciones si son las mismas retrona un valor truthy y no son iguales retorna un valor falsy
  const isValid = await bcrypt.compare(password, user.password); //bcrypt es una libreria 1: el primer parametro recibe la contraseña sin incriptar, 2: obtiene la cotrasña incripitada
  if (!isValid)
    return res.status(401).json({
      error:
        "Invalid credentials resp paul zaruma -- isValid, la contraseña es incorecta",
    });

  req.userLogin = user; // AQUI SE ASIGNA el nuevo valor al req que viene con los datos del cliente
  next(); // esto es para pasar al siguiente middleware en el router
};

module.exports = credentials;
