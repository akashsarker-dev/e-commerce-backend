const express = require('express')
const { userDetails } = require('../../controller/userDetails')
const router = express.Router()

router.get('/userdetails', userDetails)
module.exports = router