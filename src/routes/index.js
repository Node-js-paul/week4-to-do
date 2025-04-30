const express = require("express");
const routerUser = require("./router/user.router");
const router = express.Router();

// colocar las rutas aquí
//router.use('/users ', userRouter)
router.use("/users", routerUser);

module.exports = router;
