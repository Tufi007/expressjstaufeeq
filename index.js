const express = require('express');
  
const app = express();
const PORT = 8011;
  
app.get('/', (req, res)=>{
    res.status(200);
    res.send("This is from root tufiiiiii rehmannnnnnnnnnnnnnnnnnnnnnnn");
});
app.get('/u', (req, res)=>{
    res.status(200);
    res.send("This is from root tufiiiiiiioioioioiio");
});

  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running and App is listening on port " + PORT);
    else console.log("Error occurred, server can't start", error);
    }
);module.exports= app;