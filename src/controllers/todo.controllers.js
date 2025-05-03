//EN LOS CONTROLADORES SON SOLO LOS CONSUMOS DE LOS SERVICIOS
//LOS REQUIRES ESTAN en los archivos services es decir que ahy se hace la logica para comunicarse con la base de datos
const {
  getOneServices,
  getAllServices,
  createServices,
  removeServices,
  updateServices,
} = require("../services/todo.services");
const catchError = require("../utils/catchError");

const getAll = catchError(async (req, res) => {
  const results = await getAllServices();
  return res.json(results);
});

const create = catchError(async (req, res) => {
  const user = req.user;
  console.log(user);
  const newBody = { ...req.body, userId: user.id };
  const result = await createServices(newBody);
  return res.status(201).json(result);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await getOneServices(id);
  if (!result) res.sendStatus(404);
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
  const result = await updateServices(id, res.body);
  if (result[0] === 0) return res.sendStatus(404);
  return res.json(result[1][0]);
});

module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update,
};
