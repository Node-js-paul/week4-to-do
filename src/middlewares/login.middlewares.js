const credentials = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await getUserServices(email);
  if (!user) return res.status(401).json({ error: "invalid credentials pz" }); //aqui se le enviar un erro de las claves incorrectas 401 significa que no tiene autirizacion

  //USO DE la libreria bcrypt para segurirdad de contraseñas
  //recibe dos parametros la contraseña y la contraseña incliptada
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid)
    return res.status(401).json({ error: "invalid credentials pz" }); //aqui se le enviar un erro de las claves incorrectas 401 significa que no tiene autirizacion

  req.userLogin = user;
};

module.exports = credentials;
