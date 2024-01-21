const emailValidation = require("../helpers/emailValidation")
const UserInfo = require("../models/userSchema")
const bcrypt = require('bcrypt');

async function loginController(req, res) {
    const {email, password} = req.body

    if (!email) {
        return res.send({erroe: "email is required"})
      }
     else if (!emailValidation(email)) {
        return res.json({error : "Email Is not valid"})
      }
     else if (!password) {
        return res.send({erroe: "Please inter you pasword"})
      }else{
        const existingEmail = await UserInfo.find({email})
        if (existingEmail.length > 0) {
            bcrypt.compare(password, existingEmail[0].password).then(function(result) {
               if (result) {
                res.json({success: 'Login Success full'})
            }else{
                   res.json({success: 'password not match'})
                
               }
            });
         console.log(existingEmail);
        }else{
          return res.json({error: 'email is not match'})

        }
      }
}

module.exports = loginController