const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({

    sname:{
        type:String,
        required:true
    },
    semail:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    spwd:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Suppliers', supplierSchema);