const express=require("express");
const {cartModel} = require("../models/cart.model");
const cartRouter=express.Router();

cartRouter.get("/",async(req,res)=>{
    const payload=req.body;
    const q=req.query.device1;
    const q2=req.query.device2;
    const userID_in_req=req.body.userID;
    try {
       const posts=await SocialModel.find({"userID":userID_in_req})
       res.send(posts);
        
        
    } catch (error) {
        
    }
})

cartRouter.post("/add",async(req,res)=>{
    const payload=req.body;
    console.log("payload",payload);
    try {
        const new_post=new cartModel(payload);
        await new_post.save();
        res.send("Created the post");
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"});
    }
})

cartRouter.patch("/update/:id",async(req,res)=>{
    const payload=req.body;
    const id=req.params.id;
    const post =await SocialModel.findOne({"_id":id});
    const userID_in_post=post.userID;
    const userID_in_req=req.body.userID;
    try {
        if(userID_in_post!==userID_in_req){
            res.send({"msg":"You are not authorized"});
        }
        else{
          await SocialModel.findByIdAndUpdate({"_id":id},payload)
          res.send("Updated the post");
        }
    } catch (error) {
        console.log(err);
        res.send("something went wrong");
    }
})


cartRouter.delete("/delete/:id",async(req,res)=>{
    // const payload=req.body;
    const id=req.params.id;
    const post =await SocialModel.findOne({"_id":id});
    const userID_in_post=post.userID;
    const userID_in_req=req.body.userID;
    try {
        if(userID_in_post!==userID_in_req){
            res.send({"msg":"You are not authorized"});
        }
        else{
          await SocialModel.findByIdAndDelete({"_id":id})
          res.send("Deleted the post the post");
        }
    } catch (error) {
        console.log(err);
        res.send("something went wrong");
    }
})

module.exports={
    cartRouter
}