import express from 'express'
import bodyParser from 'body-parser'
import rotas from './rotas.js'

const app = express()
app.use(bodyParser.json())


app.use('/produtos', rotas)

app.use('/clientes',rotas)


const port = 8000 

app.listen(port,()=>{
    console.log("Servidor rodando na porta 8000")
})