const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://login-system:MavericKisOP@cluster0.up6lg.mongodb.net/LoginForm", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then (() => {
    console.log(`Connection successful`);
}).catch((e) => {
    console.log(`no connection`)
});