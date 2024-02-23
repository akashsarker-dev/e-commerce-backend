const productSchema = require("../models/productSchema");
const userList = require("../models/userSchema");
const variantsSchema = require("../models/variantsSchema");
async function productController(req, res, next) {
  console.log(req.headers.authorization.split("@"));

  const userId = req.headers.authorization.split("@")[1];
  const userPassword = req.headers.authorization.split("@")[2];
  if (!req.headers.authorization) {
    return res.json({ error: "UnAuthorization" });
  } else {
    const user = await userList.find({ _id: userId });
    if (user.length > 0) {
      if (userPassword == "123456") {
        if (user[0].role == "merchant") {
          next();
        }
      } else {
        res.json({ error: "password not match" });
      }
    } else {
      res.json({ error: "You are not avalable product upload" });
    }
  }
}

function createProduct(req, res) {
  const{name,description,price,image,store} = req.body

  const product = new productSchema({
    name,
    description,
    price,
    image,
    store

  })
  product.save( )


  res.json({ success: "Product create successfully" });
}
async function createVariants(req, res) {
  const{ name,
    description,
    price,
    option,
    product,} = req.body;

  const variant = new variantsSchema({
    name,
    description,
    price,
    option,
    product,
  })
  variant.save();

await  productSchema.findOneAndUpdate(
    { _id : variant._id},
    {$push : {variants: variant.product}},
    { new : true},
    
    )
}
module.exports = { productController, createProduct ,createVariants};
