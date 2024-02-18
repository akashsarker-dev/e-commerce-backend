const userList = require("../models/userSchema");
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
  const{name,description,price,image} = req.body
  console.log(name,description,price,image);
  // res.json({ success: "Product create successfully" });
}

module.exports = { productController, createProduct };
