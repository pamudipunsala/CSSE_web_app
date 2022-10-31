const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://csseWebApp:12345@cluster0.8ozyfc7.mongodb.net/?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

       console.log('DB Connection Success'); 
    } catch(err){
        console.log(err);
    }
};

module.exports = connectDB;