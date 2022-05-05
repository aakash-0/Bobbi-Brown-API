const express = require("express");
const User = require("../models/UserModel");
const Product = require("../models/ProductsModel");
const authenticate = require("../middlewares/authenticate");
const testingUser = require("../middlewares/testingUser");
const router = express.Router();

router.post("/:id",authenticate,testingUser,async(req,res)=>{
    try {
        await req.user.addToCart(req.params.id)
        res.redirect("/")
        
    } catch (error) {
        console.log(error);
    }
    
})
router.post("/remove/:id",authenticate,testingUser,async (req,res)=>{
    try {
        await req.user.removeCartItem(req.params.id)
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
})
router.post("/delete/:id",authenticate,testingUser,async (req,res)=>{
    try {
        await req.user.deleteCartItem(req.params.id)
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
})


module.exports = router;