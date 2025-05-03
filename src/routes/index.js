const express = require("express");
const routerUser = require("./router/user.router");
const { verifyJWT } = require("../middlewares/verifyJWT");
const routerTodo = require("./router/todo.router");
const router = express.Router();

// colocar las rutas aquí
//router.use('/users ', userRouter)
router.use("/users", routerUser);
router.use("/todos", verifyJWT, routerTodo); //aqui estoy usando el jwt mucho antes de las rutas asi todas estan privadas

module.exports = router;
