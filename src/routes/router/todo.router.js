const {
  getAll,
  create,
  getOne,
  remove,
  update,
} = require("../../controllers/todo.controllers");
const express = require("express");

const routerTodo = express.Router();

routerTodo.route("/").get(getAll).post(create); //🔐 todas estas rutas estan en privado porque esta puesto el middleware en las rutas principales

routerTodo.route("/:id").get(getOne).delete(remove).put(update); //🔐 todas estas rutas estan en privado

module.exports = routerTodo;
