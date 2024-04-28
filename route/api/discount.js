const express = require('express')
const {discountController, getdiscount} = require('../../controller/disCountController')
const router = express.Router()


router.post('/creatediscount', discountController)
router.get('/getdiscount', getdiscount)
module.exports = router