const express = require("express");
const routerUser = require("./router/user.router");
const router = express.Router();

// colocar las rutas aquí
//router.use('/users ', userRouter)
<<<<<<< HEAD
router.use("/users", routerUser);
=======
router.use('/users', routerUser)

>>>>>>> c0bef2335b94f903bd0840ae1cf71edfafdc131c

module.exports = router;
