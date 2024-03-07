const express = require('express');
const router  = require('./routes/route');
  
const app=require("./app");
const PORT = 8011;
app.use('/',router);

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running and App is listening on port " + PORT);
    else console.log("Error occurred, server can't start", error);
    }
);module.exports= app;