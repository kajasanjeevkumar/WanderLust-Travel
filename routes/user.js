const express=require('express');
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync");
const User=require("../models/user.js");
const passport = require('passport');
const { saveRedirectUrl } = require("../middleware.js");
const userControoler=require("../controllers/users.js");

router.route("/signup")
.get(userControoler.renderSignUp)
.post(wrapAsync(userControoler.signup));

router.route("/login")
.get(userControoler.renderLoginForm)
.post(saveRedirectUrl ,passport.authenticate("local",{failureRedirect:'/login',failureFlash:true}),userControoler.login);


// router.get("",userControoler.renderSignUp);
// router.post("/signup",wrapAsync(userControoler.signup));


// router
// router
router.get("/logout",userControoler.logout);
module.exports=router;