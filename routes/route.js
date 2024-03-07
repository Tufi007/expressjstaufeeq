const express=require('express');
const uxi = require('./uxi');
const router=express.Router();
router.get("/",async function(req,res){
    
});
router.get("/a",async function(req,res){
    res.send(`<h1> itchuuuuubfdghbsr</h1>`);
})
router.use('/',uxi);
module.exports= router;