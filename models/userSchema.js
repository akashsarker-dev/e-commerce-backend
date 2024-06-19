const mongoose = require('mongoose') 
const { Schema } = mongoose;


const userSchema = new Schema({
    firstname: {
        type: String,
        required:true,
    },
    lastname: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        required:true,
    },
    password: {
        type: String,
        required:true,
    },
    telephone: {
        type: String,
        required:true,
    },
    address: {
        type: String,
        // requiredd:true,
    },
    city: {
        type: String,
        // requiredd:true,
    },
    postcode: {
        type: String,
        // requiredd:true,
    },
    division: {
        type: String,
        // requiredd:true,
    },
    district: {
        type: String,
        // requiredd:true,
    },
    token: {
        type: String,
    },
    verified: {
        type: Boolean,
        default:false,
    },
    role:{
        type: String,
        default: "member",
        enum:["member", "admin", "merchant"]
    }
  }); 

  module.exports = mongoose.model("UserInfo", userSchema)