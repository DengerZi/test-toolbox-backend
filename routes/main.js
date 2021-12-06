import express from 'express'
import { schemaValidator } from 'middlewares'
import { processText } from 'controllers/main'
import mainSchemas from 'controllers/main/schemas'

const router = express.Router()

router.get(`/`, schemaValidator(mainSchemas.proccessText), processText)

export default router
