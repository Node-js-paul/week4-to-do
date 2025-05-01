const User = require("../models/User");

//tiene como proposito separar la logica que tiene comunicacion con la base de datos
const getAllServices = async () => {
  return await User.findAll();
};

const createServices = async (user) => {
  return await User.create(user);
};
// const getOneServices = async (id) => {
//   return await User.findByPk(id);
// };
const getOneServices = async (id) => {
  const result = await User.findByPk(Number(id)); // Convertimos a número por seguridad
  return result;
};

const removeServices = async (id) => {
  return await User.destroy({ where: { id } });
};

const updateServices = async (id, user) => {
  return await User.update(user, { where: { id }, returning: true });
};

const getUserServices = async (email) => {
  //los servicion son para poder comunicarse con la base de datos pero desde otro archivo en palabras msa sencillas

  return await User.findOne({ where: { email } }); // Convertimos a número por seguridad
};

module.exports = {
  getAllServices,
  createServices,
  getOneServices,
  removeServices,
  updateServices,
  getUserServices,
};
