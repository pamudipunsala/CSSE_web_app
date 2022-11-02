const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    companyName:{
        type:String,
        required:true
    },
    supplier:{
        type:String,
        required:true
    },
    reqDate:{
        type:Date,
        required:true
    },
    stAddress:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    province:{
        type:String,
        required:true
    },
    zipCode:{
        type:Number,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    adInfo:{
        type:String,
        required:false
    },
    items:[{
        iName:{
            type:String,
            required:true
        },
        quantity:{
            type:Number,
            required:true
        },
        unitPrice:{
            type:Number
        },
    }],
    TotalPrice:{
        type:Number
    },
    status:{
        type:String,
        required:true
    }
});



module.exports = mongoose.model('Order', orderSchema)
