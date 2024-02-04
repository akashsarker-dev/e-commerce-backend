const express = require('express')
const {createCategoryController,categoryStatus, createSubCategory, subCategoryStatus, getAllCategory} = require('../../controller/categoryController')
const router = express.Router()

router.post('/createcategory', createCategoryController)
router.post('/categorystatus', categoryStatus)
router.post('/createsubcategory', createSubCategory)
router.post('/subcategorystatus', subCategoryStatus)
router.get('/getallcategory', getAllCategory)
module.exports = router