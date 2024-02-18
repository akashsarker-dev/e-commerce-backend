const mongoose = require('mongoose') 
const { Schema } = mongoose;

const productSchema = new Schema({
    name:{
        type: String,
        require:true,
    },
    description:{
        type: String,
        require:true,
    },
    price:{
        type: String,
        require:true,
    },
    image:{
        type: String,
        ref:"UserInfo"
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