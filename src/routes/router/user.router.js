const { getAll, create, getOne, remove, update, login } = require('../../controllers/user.controllers');
const express = require('express');
const hash = require('../../middlewares/hash.middlewares');

const routerUser = express.Router();

routerUser.route('/')
    .get(getAll)
    .post(hash, create);

routerUser.route('/login').post(login)

routerUser.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerUser;