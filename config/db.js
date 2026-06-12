const mongoose = require("mongoose");
const connectDB = async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/notesdb");
        console.log("mongoDB connnected");
    }catch(error){
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;