const mongoose = require("mongoose");

const URI = "mongodb://localhost:27017/K9-Admin";

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Database Connected Succesfull");
    } catch (error) {
        console.error("Connecting Database Failed")
        process.exit(0);
    }
};

module.exports = connectDB;
