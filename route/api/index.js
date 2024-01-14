const express = require('express')
const router = express.Router()
const authRouter = require('./authentication')

router.use('/athentication', authRouter)
module.exports = router