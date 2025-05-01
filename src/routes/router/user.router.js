const {
  getAll,
  create,
  getOne,
  remove,
  update,
  login,
  logged,
} = require("../../controllers/user.controllers");
const express = require("express");
const credentials = require("../../middlewares/login.middlewares");
const hash = require("../../middlewares/hash.middlewares");
const { verifyJWT } = require("../../middlewares/verifyJWT");
//el  middleware VERIFYJWT es para hacer los endpoints de publicos a privados
const routerUser = express.Router();

routerUser.route("/").get(verifyJWT, getAll).post(hash, create);

routerUser.route("/login").post(credentials, login);
routerUser.route("/me").get(verifyJWT, logged);
routerUser
  .route("/:id")
  .get(verifyJWT, getOne)
  .delete(verifyJWT, remove)
  .put(verifyJWT, update);

module.exports = routerUser;
