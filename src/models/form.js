const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true 
    },
    password: {
        type: String,
        required: true
    }
});

// Creating the collection

const Login = new mongoose.model("Login", formSchema);

module.exports = Login;