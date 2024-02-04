const express = require('express')
const {createCategoryController,categoryStatus, createSubCategory, subCategoryStatus, getAllCategory, getAllSubCategory } = require('../../controller/categoryController')
const router = express.Router()

router.post('/createcategory', createCategoryController)
router.post('/categorystatus', categoryStatus)
router.post('/createsubcategory', createSubCategory)
router.post('/subcategorystatus', subCategoryStatus)
router.get('/getallcategory', getAllCategory)
router.get('/getallsubcategory', getAllSubCategory)
module.exports = router