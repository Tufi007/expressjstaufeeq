const app= require("../app");
const uxi = require("../routes/uxi");
const router= require('express').Router();
app.use('/',uxi);
module.exports=app;