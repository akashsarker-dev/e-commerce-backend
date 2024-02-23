const mongoose = require('mongoose') 
const { Schema } = mongoose;

const productSchema = new Schema({
    name:{
        type: String,
        required:true,
    },
    description:{
        type: String,
        required:true,
    },
    price:{
        type: String,
        // required:true,
    },

    image:{
        type: String,
        ref:"UserInfo"
    },
    variants:{
        type: Schema.Types.ObjectId,
        ref:"Variants"
    },
    store:{
        type: Schema.Types.ObjectId,
        ref:"Store"
    },
    created:{
        type:Date,
        default: new Date()
    },
    update:{
        type:Date,

    }
})

module.exports = mongoose.model('Product' ,productSchema)