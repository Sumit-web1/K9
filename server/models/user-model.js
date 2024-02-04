const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Name:{
        type: String,
        require: true,
    },
    phone:{
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
    registrationDate: {
        type: Date,
        default: Date.now, // Set the default value to the current date and time
    },
    rank: {
        type: String,
        default: "Promoter",
    },
    affiliateMembers: {
        type: Number,
        default: 0, // Set the default value to 0
    },
    earning:{
        type: String,
        default: 0.00,  
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
});


const User = new mongoose.model("User", userSchema);

module.exports = User;