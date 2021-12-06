import express from 'express'
import mainRouter from './main'

const router = express.Router()
router.use(`/main`, mainRouter)

export default router
