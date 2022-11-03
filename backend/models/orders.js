const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    steMan:{
        type:String,
        
    },
    companyName:{
        type:String,
        required:true
    },
    supplier:{
        type:String,
        required:true
    },
    reqDate:{
        type:String,
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
        },
        quantity:{
            type:Number,
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
