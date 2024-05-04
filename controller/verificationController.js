var jwt = require('jsonwebtoken');
const UserInfo = require('../models/userSchema')



async function verificationController(req,res) {
 const {id} = req.params
const decoded = jwt.verify(id, 'orebi');
console.log(decoded, 'ggggggg');
if(decoded){
    const updateUser = await UserInfo.findOneAndUpdate(
        {email: decoded.email},
        {verified: true},
        {new: true}
       )
       res.json ({success: 'user verified'})
}
}
module.exports = verificationController