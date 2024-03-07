const express=require('express');
const uxi = require('./uxi');
const router=express.Router();
router.get("/",async function(req,res){
    res.send(`<h1> heloo from rute</h1>`);
});
router.use('/',uxi);
module.exports= router;