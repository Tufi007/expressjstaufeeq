const app= require("../index");
const uxi = require("../routes/uxi");
const router= require('express').Router();
app.use('/api/',uxi);
module.exports=app;