const express = require('express')
const router = express.Router()
const authRouter = require('./authentication')
const categoryRouter = require('./category')
const merchantRouter = require('./merchant')
const productRouter = require('./product')
const discountRouter = require('./discount')
const userRouter = require('./user')
const paymentRouter = require('./payment')

router.use('/athentication', authRouter)
router.use('/category', categoryRouter)
router.use('/merchant', merchantRouter)
router.use('/product', productRouter)
router.use('/discount', discountRouter)
router.use('/alluser', userRouter)

router.use('/payment', paymentRouter)
module.exports = router