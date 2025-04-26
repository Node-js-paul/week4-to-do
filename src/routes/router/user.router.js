const { getAll, create, getOne, remove, update } = require('../../controllers/user.controllers');
const express = require('express');
const hash = require('../../middlewares/hash.middlewares');

const routerUser = express.Router();

routerUser.route('/')
    .get(getAll)
    .post(hash, create);

routerUser.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerUser;