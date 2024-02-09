const Merchant = require("../models/merchantSchema");
const userInfo = require("../models/userSchema");


async function beComeMerchant(req, res) {
    console.log('ssssssss');
    const {storeName,officialEmail,address,owner,products} = req.body
    console.log(storeName,officialEmail,address,owner,products);

    const store = new Merchant({
        storeName,
        officialEmail,
        address,
        owner,
        products
    })
   await userInfo.findOneAndUpdate(
        {_id:owner},
        {role:"merchant"},
        {new:true},
        )
    store.save();
    // res.json({sucess: 'merchant create sucessfull'})
    res.json(store)
    
}
module.exports = beComeMerchant