const express=require('express');
const router=express.Router();
router.get("/",async function(req,res){
    res.send(`<h1> heloo from rute</h1>`);
});
module.exports= router;