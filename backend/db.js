const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/paytm");

const userSchema =new mongoose.Schema({
    firstName : {
        type: String,
        maxLength : 50,
        trim: true, 
        required: "First Name is required"
    },
    lastName : {
        type : String,
        maxLength : 50,
        trim : true,
        required : "Last Name is required"
    },
    username : {
        type : String,
        unique : true,
        lowercase : true,
        minLength : 6,
        maxLength : 30,
        trim : true,
        required : "Username/Email is required"
    },
    password : {
        type : String,
        minLength : 8,
        required : "Password is required"
    }
});

const accountSchema = new mongoose.Schema({
    userId : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "User",
      required : true
    },
    balance : {
      type : Number,
      required : true
    }
});

const Account = mongoose.model("Account", accountSchema);
const User = mongoose.model("User", userSchema);

module.exports = {
    User,
    Account,
};