const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const ToDo = sequelize.define("toDo", {
  task: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  iscompleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  //userid  esta es la id pero es de la relacion va con en el index
});

module.exports = ToDo;
