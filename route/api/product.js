const express = require('express')
const {productController, createProduct, createVariants, getallproduct, getVariants, deleteProduct} = require('../../controller/productController')
const router = express.Router()
const multer  = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix + `.${file.originalname.split(".")[1]}`);
      },
  })
  
  const upload = multer({ storage: storage })

// router.post('/createproduct', productController, createProduct)
router.post('/createproduct',productController, createProduct)
router.post('/createvariants',upload.single('avatar'), createVariants)
router.get('/getvariants', getVariants)
router.get('/getallproduct', getallproduct)
router.post('/deleteproduct', deleteProduct)

module.exports = router