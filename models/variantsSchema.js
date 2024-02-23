const mongoose = require('mongoose')
const { Schema } = mongoose;

const variantsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        // required: true,
        
    },
    quantity: {
        type: String,
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    },

    // variants:{
    //     type: Schema.Types.ObjectId,
    //     ref:"Option"
    // },
    created: {
        type: Date,
        default: new Date()
    },
    update: {
        type: Date,

    }
})

module.exports = mongoose.model('Variant', variantsSchema)