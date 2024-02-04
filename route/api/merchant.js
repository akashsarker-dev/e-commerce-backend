const express = require('express')
const router = express.Router()
const beComeMerchant = require('../../controller/merchantController')


router.post('/becomemerchant', beComeMerchant)


module.exports = router