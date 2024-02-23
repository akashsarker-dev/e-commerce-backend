const express = require('express')
const {productController, createProduct, createVariants} = require('../../controller/productController')
const router = express.Router()

router.post('/createproduct', productController, createProduct)
router.post('/createvariants', createVariants)

module.exports = router