import path from 'path'
import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

import { errorHandler, wrapErrors } from './middlewares/errorHandling'
import swaggerConfig from './config/swaggerConfig'
import indexRouter from './routes/index'

import 'dotenv/config'

const app = express()

const swaggerSpecs = swaggerJsdoc(swaggerConfig)

app.use(cors())
app.use(logger(`dev`))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, `public`)))
app.use(`/api/v1`, indexRouter)
app.use(`/doc`, swaggerUi.serve, swaggerUi.setup(swaggerSpecs))
app.use(wrapErrors)
app.use(errorHandler)

export default app
