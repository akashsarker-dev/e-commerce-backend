const express = require('express')
const {productController, createProduct, createVariants, getallproduct, getVariants, deleteProduct} = require('../../controller/productController')
const router = express.Router()

// router.post('/createproduct', productController, createProduct)
router.post('/createproduct',productController, createProduct)
router.post('/createvariants', createVariants)
router.get('/getvariants', getVariants)
router.get('/getallproduct', getallproduct)
router.post('/deleteproduct', deleteProduct)

module.exports = router