const UserInfo = require('../models/userSchema')

function registration(req,res) {
      const{firstname,lastname,email,telephone,address,city,postcode,division,district} = req.body

  console.log(req.body);

  const users = new UserInfo({
    firstname,
    lastname,
    email,
    telephone,
    address,
    city,
    postcode,
    division,
    district,
  })
  users.save()
}
module.exports = registration