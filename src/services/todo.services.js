const ToDo = require(`../models/ToDo`);

const getAllServices = async () => {
  return await ToDo.findAll();
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
  return await ToDo.update(toDo, { where: { id }, returning: true });
};

module.exports = {
  getAllServices,
  createServices,
  getOneServices,
  removeServices,
  updateServices,
};
