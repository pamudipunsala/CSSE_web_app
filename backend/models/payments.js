const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    orderid:{
        type:String,
        unique: true,
        required:true
    },
    supplierid:{
        type:String,
        required:true
    },
    sname:{
        type:String,
        required:true
    },
    accid:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
});

module.exports = mongoose.model('payment', paymentSchema)