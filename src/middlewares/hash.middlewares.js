
const bcrypt = require("bcrypt")
const hash = async (req, res, next) => {

    // console.log('soy el primer middlewares creado en clases')

    // return res.status(404).json('soy el primer middlewares creado en  clases ')

    const { password } = req.body

    const hash = await bcrypt.hash(password, 10)
    req.passwordHash = hash


    next()
}

module.exports = hash 