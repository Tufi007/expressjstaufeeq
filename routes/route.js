const express=require('express');
const uxi = require('./uxi');
const router=express.Router();
router.get("/",async function(req,res){
    res.send('ready to go');
});
router.get("/a",async function(req,res){
    res.send(`<h1> itchuuuuubfdghbsr</h1>`);
})
router.use('/',uxi);
module.exports= router;