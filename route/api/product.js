const express = require('express')
const {productController, createProduct} = require('../../controller/productController')
const router = express.Router()

router.post('/createproduct', productController, createProduct)

module.exports = router