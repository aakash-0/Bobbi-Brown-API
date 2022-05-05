const express = require("express");
const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.post("/:id",authenticate,async(req,res)=>{
    try {
        await req.user.addToCart(req.params.id)
        res.redirect("/")
        
    } catch (error) {
        console.log(error);
    }
    
})
router.post("/remove/:id",authenticate,async (req,res)=>{
    try {
        await req.user.removeCartItem(req.params.id)
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
})
router.post("/delete/:id",authenticate,async (req,res)=>{
    try {
        await req.user.deleteCartItem(req.params.id)
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
})


module.exports = router;