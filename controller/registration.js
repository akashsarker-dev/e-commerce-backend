const emailTemplete = require('../helpers/emailTemplete');
const emailValidation = require('../helpers/emailValidation');
const sendEmail = require('../helpers/sendEmail');
const UserInfo = require('../models/userSchema')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

async function registration(req,res) {
      const{firstname,lastname,email,telephone,address,city,postcode,division,district, password} = req.body


      if (!firstname || !lastname) {
        return res.send({erroe: "First & last Name are required"})
      }
      if (!email) {
        return res.send({erroe: "email is required"})
      }
      if (!emailValidation(email)) {
        return res.json({error : "Email Is not valid"})
      }
      if (!password) {
        return res.send({erroe: "Please inter you pasword"})
      }
      if (!telephone) {
        return res.send({erroe: "telephone is required"})
      }
      const existingEmail = await UserInfo.findOne({email})
        if (existingEmail) {
          return res.send({error: 'email is already use'})
        }
      
        var token = jwt.sign({ email}, process.env.TOKEN_KEY);
  // console.log(req.body);
  bcrypt.hash(password, 10, function(err, hash) {
    const users = new UserInfo({
      firstname,
      lastname,
      email,
      password: hash,
      telephone,
      // address,
      // city,
      // postcode,
      // division,
      // district,
      token : email
    })
    users.save()
    // var token = jwt.sign({ email}, process.env.TOKEN_KEY);
    sendEmail(email, "Email Verification", emailTemplete(token))
    res.send({
      success: 'Registration Successfull',
        data : users
    })
});

}
module.exports = registration