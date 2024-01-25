const categoryList = require("../models/categorySchema");

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

module.exports = {createCategoryController, categoryStatus};
