const catchError = require("../utils/catchError");
const bcrypt = require("bcrypt");
const {
  getAllServices,
  createServices,
  getOneServices,
  removeServices,
  updateServices,
  getUserServices,
} = require("../services/user.services");
const { json } = require("sequelize");
const User = require("../models/User");
const { error } = require("shelljs");
const jwt = require("jsonwebtoken");

const getAll = catchError(async (req, res) => {
  console.log("📌 4)-----ID recibido en el controlador:", req.params.id);

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
  console.log("📌 ID recibido en la solicitud:", id);

  const result = await getOneServices(id);
  console.log("🔍 Resultado de la consulta:", result);

  if (!result) {
    console.log("🚨 Usuario no encontrado. Enviando 404.");
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

const logged = catchError(async (req, res) => {
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
