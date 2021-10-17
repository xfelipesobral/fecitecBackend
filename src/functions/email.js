const nodemailer = require('nodemailer')

const conta = () => {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ntlooknetfs@gmail.com',
            pass: 'pojaofutoyzpwxhs'
        }
    })
}

const email = async ({ para, titulo, html }) => {
    const transporter = conta()

    const retorno = await transporter.sendMail({
        from: '"Fecitec" <fecitec@ufpr.br>',
        to: para,
        subject: titulo,
        html: html
    })

    console.log('Email enviado: '+retorno.messageId)
}

module.exports = email