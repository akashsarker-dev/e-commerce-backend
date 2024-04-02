const express = require('express')
const router = express.Router()
const {beComeMerchant,getAllStore} = require('../../controller/merchantController')


router.post('/becomemerchant', beComeMerchant)
router.get('/allstore', getAllStore)


module.exports = router
