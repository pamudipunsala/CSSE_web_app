const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    uname:{
        type:String,
        required:true
    },
    regNo:{
        type:String,
        required:true
    },
    uemail:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    upwd:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Users', userSchema);