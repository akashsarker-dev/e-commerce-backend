function createCategoryController(req ,res) {
    const {name ,description} = req.body;
    res.send(name)
}

module.exports = createCategoryController