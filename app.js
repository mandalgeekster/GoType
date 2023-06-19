const express = require("express");
const bodyparser = require("body-parser");
const _ = require("lodash");

const app = express();
app.use(express.static("public"));
app.set('view engine','ejs');

app.get("/",function(req,res){
    res.render("home");
});

app.listen("3000",function(req,res){
    console.log("server started");
});
