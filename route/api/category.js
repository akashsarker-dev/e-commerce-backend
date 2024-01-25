const express = require('express')
const {createCategoryController,categoryStatus} = require('../../controller/categoryController')
const router = express.Router()

router.post('/createcategory', createCategoryController)
router.post('/categorystatus', categoryStatus)
module.exports = router