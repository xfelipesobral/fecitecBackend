const express = require('express')
const rotas = require('./src/routes')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors({ origin: '*', exposedHeaders: '*' }))
app.use('/api', rotas)

app.listen(process.env.PORT || 3300, () => {
    console.log('🟢 Servidor iniciado')
})