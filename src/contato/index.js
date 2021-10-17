const enviarEmail = require('../functions/email')
const TemplateEmail = require('../templates/email')

const verificarCampos = ({ nome, email, telefone, titulo, mensagem }) => {
    if (!nome) return 'É necessário informar o nome referente ao contato'
    if (!email) return 'E-mail para contato não informado'
    if (!telefone) return 'Telefone para contato não informado'
    if (!titulo) return 'Assunto do contato não definido'
    if (!mensagem) return 'Mensagem do contato não informada'
}

const contato = (request, response) => {
    const { nome, email, telefone, titulo, mensagem } = request.body
    const erroCampo = verificarCampos({ nome, email, telefone, titulo, mensagem })

    if (erroCampo) {
        response.status(500).json({
            erro: erroCampo
        })
        return
    }

    const html = new TemplateEmail

    html.titulo('Contato')  
    html.paragrafo('Nome: '+nome)
    html.paragrafo('E-mail: '+email)
    html.paragrafo('Telefone: '+telefone)
    html.linha()
    html.paragrafo('Assunto: '+titulo)
    html.paragrafo('Mensagem: '+mensagem)

    enviarEmail({
        para: email,
        titulo: 'Contato: '+titulo,
        html: html.imprimir()
    })
    .then(() => {
        response.status(200).send()
    })
    .catch((erro) => {
        console.log(erro)
        
        response.status(500).json({
            erro: 'Erro interno, tente novamente mais tarde.'
        })
    })
}

module.exports = contato