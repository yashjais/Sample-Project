const mongoose = require('mongoose')
const Schema = mongoose.Schema

const stockSchema = new Schema({
    order_id: {
        type: String,
        required: true,
        unique: true
    },
    stock_name: {
        type: String,
        required: true,
        unique: true
    },
    // quantity: Number, // shorthand for {type: Number}
    quantity: {
        type: Number, 
        required: true
    },
    createdAt: { 
        type: Date,
        default: new Date()
    },
    price: {
        type: Number, 
        required: true
    },
    type: {
        type: String,
        enum: ['Buy', 'Sell']
    },
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref : 'User'
    // }
})

const Stock = mongoose.model('Stock', stockSchema);
module.exports = Stock;