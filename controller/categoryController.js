const categoryList = require("../models/categorySchema");
const subCategoryList = require("../models/subCategory");

async function createCategoryController(req, res) {
    const { name, description } = req.body;

    const duplicateCategory = await categoryList.find({ name });

    if (duplicateCategory.length > 0) {
        console.log('Category already exists');
        res.json({ error: 'This Category Already Exists' })
    } else {
        const category = new categoryList({
            name,
            description,
        });

        res.json({ success: 'Category created successfully' });
        category.save();
    }
}

async function categoryStatus(req, res) {
    const { name, status } = req.body;
    res.json(status)
    if (status == 'rejected' || status == 'waiting') {
        const updateCategory = await categoryList.findOneAndUpdate(
            {name},
            {status: status, isActive:false},
            {new: true}
        )
    } else if (status == 'approved') {
        const updateCategory = await categoryList.findOneAndUpdate(
            {name},
            {status: status, isActive:true},
            {$set: {status: status, isActive:true}},
            {new: true}
        )
    }
}

// Sub category

async function createSubCategory(req, res) {
    const { name, description, category } = req.body;

    const duplicateSubCategory = await subCategoryList.find({ name });

    if (duplicateSubCategory.length > 0) {
        console.log('Category already exists');
        res.json({ error: 'This Category Already Exists' })
    } else {
        const subCategory = new subCategoryList({
            name,
            description,
            category
        });

        const updateCategory = await categoryList.findOneAndUpdate(
            {_id : subCategory.category},
            // {status: status, isActive:true},
            {$push: {subCategory: subCategory._id}},
            {new: true}
        )

        res.json({ success: 'Sub Category created successfully' });
        subCategory.save();
    }
}


async function subCategoryStatus(req, res) {
    const { name, status } = req.body;
    res.json(status)
    if (status == 'rejected' || status == 'waiting') {
        const updateCategory = await subCategoryList.findOneAndUpdate(
            {name},
            {status: status, isActive:false},
            {new: true}
        )
    } else if (status == 'approved') {
        const updateCategory = await subCategoryList.findOneAndUpdate(
            {name},
            {status: status, isActive:true},
            {$set: {status: status, isActive:true}},
            {new: true}
        )
    }
}
// get all category

async function getAllCategory(req, res) {
        const data = await categoryList.find({});
        res.json(data)
}

module.exports = {createCategoryController, categoryStatus, createSubCategory, subCategoryStatus, getAllCategory};
