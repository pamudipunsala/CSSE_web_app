const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({

    orderid:{
        type:String,
        unique: true,
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
        type:String,
        required:true
    },
    TotalPrice:{
        type:String,
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