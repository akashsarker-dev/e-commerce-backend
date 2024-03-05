const mongoose = require('mongoose')
const { Schema } = mongoose;

const variantsSchema = new Schema({
    color: {
        type: String,
    },
    price: {
        type: String,
        required: true,
    },
    quantity: {
        type: String,
        required: true,
    },
    stroage:{
        type: String,
        required: true,
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
    created: {
        type: Date,
        default: new Date()
    },
    update: {
        type: Date,

    }
})

module.exports = mongoose.model('Variant', variantsSchema)