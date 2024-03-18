const express = require('express')
const {productController, createProduct, createVariants, getallproduct} = require('../../controller/productController')
const router = express.Router()

router.post('/createproduct', productController, createProduct)
router.post('/createvariants', createVariants)
router.get('/getallproduct', getallproduct)

module.exports = router