const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({

    orderid:{
        type:String,
        required:true
    },
    iName:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    deliveryPrice:{
        type:Number,
        required:true
    },
    TotalPrice:{
        type:Number,
        required:true
    },
    stAddress:{
        type:String,
        required:true
    },
    deliveryDate:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('delivery', deliverySchema);