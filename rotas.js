import express from 'express'
import controlador from './controlador.js'
const router = express.Router()

router.get('/lista',controlador.getlist)

router.get('/id/:id', controlador.getId)

router.post('/creat', controlador.create)

router.post('/cadastro', controlador.createLogin)

//router.post('/logar', controlador.logar)

router.get('/procurarUser', controlador.procurarUser)

export default router;