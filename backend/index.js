require('./config/conexao')
const express = require('express')
const app = express()
const porta = 3000

//utilizar arquivo no formato json
app.use(express.json())

//criar variável para armazenar todas as rotas definidas
const rotasTransferencia = require('./rotas')

//USE para todas as rotas previamente definidas no arquivo (rotas), deve ser considerado o caminho/trsnferência
app.use('/transferencia', rotasTransferencia)

app.listen(porta, ()=>{
    console.log("servidor está rodando")
})