const express = require('express')
const {createCategoryController,categoryStatus, createSubCategory, subCategoryStatus} = require('../../controller/categoryController')
const router = express.Router()

router.post('/createcategory', createCategoryController)
router.post('/categorystatus', categoryStatus)
router.post('/createsubcategory', createSubCategory)
router.post('/subcategorystatus', subCategoryStatus)
module.exports = router