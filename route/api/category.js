const express = require('express')
const createCategoryController = require('../../controller/createCategoryController')
const router = express.Router()

router.post('/createcategory', createCategoryController)
module.exports = router