const catchError = require("../utils/catchError");
const {
  getAllServices,
  createServices,
  getOneServices,
  removeServices,
  updateServices,
  getUserServices,
} = require("../services/user.services");
const jwt = require("jsonwebtoken");

const getAll = catchError(async (req, res) => {
  const results = await getAllServices();
  return res.json(results);
});

const create = catchError(async (req, res) => {
  const body = { ...req.body, password: req.passwordHash };
  const result = await createServices(body);
  return res.status(201).json(result);
});

// const getOne = catchError(async (req, res) => {
//   const { id } = req.params;
//   const result = await getOneServices(id);
//   if (!result) return res.sendStatus(404);
//   return res.json(result);
// });

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await getOneServices(id);
  if (!result) {
    return res.sendStatus(404);
  }

  return res.json(result);
});
const remove = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await removeServices(id);
  if (!result) return res.sendStatus(404);
  return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await updateServices(id, req.body);
  if (result[0] === 0) return res.sendStatus(404);
  return res.json(result[1][0]);
});
//// esto es para acceder al usuario
const login = catchError(async (req, res) => {
  const user = req.userLogin;
  if (!user)
    return res.status(401).json({
      error: "Invalid credentials",
    });

  //trabajamos con jwt
  const token = jwt.sign(
    { user }, //recibe el usuario que va acodificar en formato de objeto
    process.env.TOKEN_SECRET
    // { expiresIn: "5M" } //ESTO ES opcional para poder poner un tiempo de expiracion del token obliga al usuario a poder logiarse pasado un tiempo
  );
  //COMANDO PARA CREAR UN TOKEN EN NODE-CMD
  // require('crypto').randomBytes(64).toString('hex')
  return res.json({ user, token });
});
// esto es solo para hacer la consulta y verficar cual es el usuario que esta loggiado
const logged = catchError(async (req, res) => {
  console.log("valor : >>>>> \n", req.user);
  return res.json(req.user);
});

module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update,
  login,
  logged,
};
