const mongoose = require('mongoose') 
const { Schema } = mongoose;

const storeSchema = new Schema({
    storeName:{
        type: String,
        require:true,
    },
    officialEmail:{
        type: String,
        require:true,
    },
    address:{
        type: String,
        require:true,
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref:"UserInfo"
    },
    products:[
        {
        type: Schema.Types.ObjectId,
        ref:"Product"
    }
],
})

module.exports = mongoose.model('Store' ,storeSchema)