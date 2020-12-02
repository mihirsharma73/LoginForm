const path = require("path");
const express = require("express");
const app = express();
const {json} = require("express");

require("./db/connect");
const Login = require("./models/form");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post("/", async(req, res) => {
    let Loginn = new Login({
        username: req.body.username,
        password: req.body.password
    });
    Loginn.save(); 
})


// Connecting to server.

const serverpath = path.join(__dirname, "../public");

app.use(express.static(serverpath));

// Creating port.

app.listen(3000, () => {
    console.log('Ready to GO Caption on PORT 3000');
})

