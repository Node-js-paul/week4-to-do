const catchError = require("../utils/catchError");
const user = require("../models/User");
const {
  getAllServices,
  createServices,
  getOneServices,
  removeServices,
  updateServices,
} = require("../services/user.services");

const getAll = catchError(async (req, res) => {
  console.log("📌 4)-----ID recibido en el controlador:", req.params.id);

  const results = await getAllServices();
  return res.json(results);
});

const create = catchError(async (req, res) => {
  const result = await createServices(req.body);
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
  const { email, password } = req.body;

  return res.json({
    email,
    password,
  });
});

module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update,
  login,
};
