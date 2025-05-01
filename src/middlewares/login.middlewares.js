// Middleware para el login: verifica si el email y la contraseña son correctos.
const bcrypt = require("bcrypt");
const { getUserServices } = require("../services/user.services");

const credentials = async (req, res, next) => {
  // Desestructuramos `req.body` para obtener los datos enviados por el cliente.
  const { email, password } = req.body;

  // Se consulta a la base de datos para verificar si el usuario existe.
  const user = await getUserServices(email);

  // Si el usuario no existe, enviamos una respuesta de error 401 (No autorizado).
  if (!user)
    return res.status(401).json({
      error:
        "Invalid credentials resp paul zaruma -- user, Email inválido o no existe",
    });

  // Validación de la contraseña:
  // `bcrypt.compare()` compara la contraseña ingresada con la encriptada en la base de datos.
  // Devuelve `true` si coinciden, o `false` si son diferentes.
  const isValid = await bcrypt.compare(password, user.password);

  // Si la contraseña es incorrecta, enviamos una respuesta de error 401.
  if (!isValid)
    return res.status(401).json({
      error:
        "Invalid credentials resp paul zaruma -- isValid, la contraseña es incorrecta",
    });

  // Asignamos el usuario validado al `req` para que esté disponible en los siguientes middlewares.
  req.userLogin = user;

  // Pasamos la ejecución al siguiente middleware en la ruta.
  next();
};

// Exportamos el middleware para usarlo en el router.
module.exports = credentials;
