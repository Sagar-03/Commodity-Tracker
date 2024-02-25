const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const collection = require('./config.js');

const app = express();


app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home");
});

// app.get("/home", (req, res) => {
//     res.render("home");
// });

app.get("/home", (req , res) => {
    res.render("home");
});

app.get("/admin", (req, res) => {
    res.render("admin");
});

app.get("/report", (req, res) => {
    res.render("report");
});


app.get("/alogin", (req, res) => {
    res.render("alogin");
});

app.get("/traderdata", (req, res) => {
    res.render("traderdata")
});

app.get("/trader", (req, res) => {
    res.render("trader")
});


app.get("/history", (req, res) => {
    res.render("history")
});


app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.post("/signup", async (req, res) => {

    const data = {
        name: req.body.username,
        phone: req.body.phone,
        password: req.body.password,
        tln: req.body.tln
    }

        const userData = await collection.insertMany([data]); // Changed to insertMany with array
        console.log(userData);
         
        const existingUser = await collection.findOne({tln: data.tln});
if(existingUser) {
    res.render("traderdata");
}else {
    const saltRounds = 10;
    const hashPassword = await bycrypt.hash(data.password, saltRounds);

    data.password = hashPassword;
    const userData = await collection.insertMany(data);
    console.log("userData");
}

});

app.post("/login", async (req, res) => {
    try {
        const check = await collection.findOne({tln: req.body.tln});
        if(!check) {
            res.send("User cannot be found");
        }
        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if(isPasswordMatch) {
            res.render("traderdata");
        }else{
            req.send("wrong password");
        }
    }catch{
           res.send("wrong details");
    }
});


const port = 5000;
app.listen(port, () => {
    console.log(`Server running on ${port}`);
})
