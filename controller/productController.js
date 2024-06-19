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
      // if (userPassword == "123456") {
        if (user[0].role == "merchant") {
          next();
        // }
      } else {
        res.json({ error: "password not match" });
      }
    } else {
      res.json({ error: "You are not avalable product upload" });
    }
  }
}

function createProduct(req, res) {
  const{name,description,image,store} = req.body

  const product = new productSchema({
    name,
    description,
    // price,
    // image,
    store })
  product.save()
  res.json({ success: "Product create successfully" });
}

async function deleteProduct(req, res) {
  const data = await productSchema.findByIdAndDelete(req.body.id)
  res.send(data)
}

async function getallproductID(req, res) {
  const { id } = req.params;
  const product = await productSchema.findById(id).populate('store').populate('variants');
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
}
async function getallproduct(req, res) {
  const product = await productSchema.find({}).populate('store').populate('variants'); 
  res.send(product)
}
async function createVariants(req, res) {
  const { color, price, quantity, stroage, product, image } = req.body;
  console.log(req.file);
  const variant = new variantsSchema({
    color,
    image: `http://localhost:3000/uploads/${req.file.filename}`,
    price,
    quantity,
    stroage,
    product
  });

  variant.save();
  await productSchema.findOneAndUpdate(
    { _id: variant.product },
    { $push: { variants: variant._id } },
    { new: true }
  );
  res.send({ success: "Variant create successfully done" });
}

async function getVariants(req, res) {
  const variant = await variantsSchema.find().populate('product') 
  res.send(variant)
}

module.exports = { productController, createProduct ,createVariants,getallproductID,getVariants,deleteProduct, getallproduct};
