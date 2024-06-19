const express = require('express')
const {productController, createProduct, createVariants, getallproduct, getVariants, deleteProduct, getallproductID} = require('../../controller/productController')
const router = express.Router()
const multer  = require('multer')
const productSchema = require('../../models/productSchema')



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
router.post('/createproduct', createProduct)
router.post('/createvariants',upload.single('image'), createVariants)
// router.post('/createvariants', createVariants)
router.get('/getvariants', getVariants)
router.get('/getallproduct/:id', getallproductID)
router.get('/getallproduct', getallproduct)
router.post('/deleteproduct', deleteProduct)


router.get('/search', async (req, res) => {
  const query = req.query.q; // This will get the 'q' parameter from the query string

  try {
    const products = await productSchema.find({
      $or: [
        { name: { $regex: query, $options: 'i' } }, // Case-insensitive search by product name
        { description: { $regex: query, $options: 'i' } }, // Case-insensitive search by product description
      ],
    }).populate('store').populate('variants');

    res.json(products);
  } catch (err) {
    console.error('Error searching products:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router