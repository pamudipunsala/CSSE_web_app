const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    rcode:{
        type:String,
        required:true
    },
    name:{
        type:Date,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    dueDate:{
        type:Date,
        required:true
    },
});

module.exports = mongoose.model('request', requestSchema)