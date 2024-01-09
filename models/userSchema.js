const mongoose = require('mongoose') 
const { Schema } = mongoose;


const userSchema = new Schema({
    firstname: {
        type: String,
        require:true,
    },
    lastname: {
        type: String,
        require:true,
    },
    email: {
        type: String,
        require:true,
    },
    telephone: {
        type: String,
        require:true,
    },
    address: {
        type: String,
        require:true,
    },
    city: {
        type: String,
        require:true,
    },
    postcode: {
        type: String,
        require:true,
    },
    division: {
        type: String,
        require:true,
    },
    district: {
        type: String,
        require:true,
    },
  }); 

  module.exports = mongoose.model("UserInfo", userSchema)