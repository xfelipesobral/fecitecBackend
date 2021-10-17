const email = require('../functions/email')
const TemplateEmail = require('../templates/email')

const contato = (request, response) => {

    const html = new TemplateEmail

    html.paragrafo('Teste')

    response.send(html.imprimir())
}

module.exports = contato