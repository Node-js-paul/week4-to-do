const { where } = require("sequelize");
const ToDo = require(`../models/ToDo`);

const getAllServices = async (userId) => {
  console.log("esto es el getAll del todo");
  //esto esta hacineod la consulta  donde solo me da como respuesta de los id de los usuarios que estan registrados
  return await ToDo.findAll({ where: { userId } }); // findAll() estos son los metodos de sequilize
};

const createServices = async (toDo) => {
  return await ToDo.create(toDo);
};

const getOneServices = async (id) => {
  return await ToDo.findByPk(Number(id));
};

const removeServices = async (id) => {
  return await ToDo.destroy({ where: { id } });
};

const updateServices = async (id, toDo) => {
  console.log("estas ejecutando el update");
  console.log(id, toDo);
  return await ToDo.update(toDo, { where: { id }, returning: true });
};

module.exports = {
  getAllServices,
  createServices,
  getOneServices,
  removeServices,
  updateServices,
};
