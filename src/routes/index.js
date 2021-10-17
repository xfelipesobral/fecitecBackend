const { Router } = require('express')

const contato = require('../contato')

const rotas = Router()

rotas.route('/contato').post(contato)

module.exports = rotas