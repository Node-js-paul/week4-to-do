const User = require("../models/User");

//tiene como proposito separar la logica que tiene comunicacion con la base de datos
const getAllServices = async () => {
  return await User.findAll();
};

const createServices = async (user) => {
  return await User.create(user);
};
const getOneServices = async (id) => {
  return await User.findByPk(id);
};

const removeServices = async (id) => {
  return await User.destroy({ where: { id } });
};

const updateServices = async (id, user) => {
  return await User.update(user, { where: { id }, returning: true });
};
module.exports = {
  getAllServices,
  createServices,
  getOneServices,
  removeServices,
  updateServices,
};
