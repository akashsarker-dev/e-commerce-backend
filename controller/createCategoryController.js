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

        category.save();
        res.json({ success: 'Category created successfully' });
    }
}

module.exports = createCategoryController;
