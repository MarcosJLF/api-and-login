import express from 'express'
import controlador from './controlador.js'
const router = express.Router()

router.get('',controlador.hello)

export default router;