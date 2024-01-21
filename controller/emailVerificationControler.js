var jwt = require('jsonwebtoken');
const UserInfo = require('../models/userSchema')
async function emailVerificationControler(req, res) {

    const {authorization} = req.headers
    console.log(authorization);
   const decoded = jwt.verify(authorization, process.env.TOKEN_KEY);
   console.log(decoded, 'ggggggg');

   const updateUser = await UserInfo.findOneAndUpdate(
    {email: decoded.email},
    {verified: true},
    {new: true}
   )
   res.send(updateUser)
}
module.exports = emailVerificationControler