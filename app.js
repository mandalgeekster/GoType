const express = require("express");
const bodyparser = require("body-parser");
const _ = require("lodash");

const session = require("express-session");
const passport = require("passport");
const passportlocalmongoose = require("passport-local-mongoose");

const mongoose = require("mongoose");

const app = express();
app.use(express.static("public"));
app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended : true}));

app.use(session({
    secret: "this is my secret",
    resave:false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb+srv://kartik:kartik123@cluster0.8ou8ajo.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log("mongo connected")).catch(err => console.log(err));

const userschema =  new mongoose.Schema({
    username : String,
    password : String,
});
userschema.plugin(passportlocalmongoose);

const usermodel = mongoose.model("GoType",userschema);

passport.use(usermodel.createStrategy());

passport.serializeUser(usermodel.serializeUser()); 
passport.deserializeUser(usermodel.deserializeUser());


app.route("/")
.get(function(req,res){
    res.render("home");
});

app.route("/login")
.get(function(req,res){
    res.render("login",{error_mess: ""});
})
.post(function(req,res){
    
    const user = new usermodel({
        username: req.body.username,
        password: req.body.password
    });

    req.login(user,function(err){
        if(err)
            console.log(err);
        else
        {
            passport.authenticate("local",function(err,user,info){
                if(err)
                    console.log(err);
                if(!user)
                {
                    res.render("login",{error_mess: "Invalid User ID or Password"});
                }
                    
                else    
                    res.redirect("/");
            })(req,res);
        }
    });

});

app.route("/signup")
.get(function(req,res){
    res.render("signup");
})
.post(function(req,res){
    
    usermodel.register({username: req.body.username},req.body.password,function(err,user){
        if(err)
        {
            console.log(err);
            res.redirect("/signup");
        } 
        else
        {
            passport.authenticate("local")(req,res,function(){
                res.redirect("/");
            }); 
        }
    });  
});;

app.route("/userprofile")
.get(function(req,res){
    if(req.isAuthenticated())
        res.render("userprofile");
    else
        res.redirect("/login");
});

app.listen("3000",function(req,res){
    console.log("server started");
});
