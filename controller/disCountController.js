const disCountSchema = require("../models/disCountSchema");

function discountController(req, res) {
  const { cash, percent, flat, product,category,subCategory } = req.body;
    const discount = new disCountSchema({
        cash,
        percent,
        flat,
        product,
        category,
        subCategory
    })
    discount.save()
    res.json({success: 'Discount created successfully'})
}

async function getdiscount(req, res) {
    const data = await disCountSchema.find({}).populate(['product','category','subCategory'])

    res.send(data)
    
}

module.exports = {discountController, getdiscount}
