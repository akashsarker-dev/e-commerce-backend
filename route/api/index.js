const express = require('express')
const router = express.Router()
const authRouter = require('./authentication')
const categoryRouter = require('./category')
const merchantRouter = require('./merchant')

router.use('/athentication', authRouter)
router.use('/category', categoryRouter)
router.use('/merchant', merchantRouter)
module.exports = router