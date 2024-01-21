const express = require('express')
const registration = require('../../controller/registration')
const emailVerificationControler = require('../../controller/emailVerificationControler')
const loginController = require('../../controller/loginController')
const router = express.Router()

router.post('/registration', registration)
router.post('/verification', emailVerificationControler)
router.post('/login', loginController)

module.exports = router