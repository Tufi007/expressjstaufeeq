const express = require("express");
const uxi = express.Router();
uxi.get("/uxi", async function (req, res) {
  res.send(`<h1> uuuuuuuuuuuuuuuuuuuuuuuuuuuu</h1>`);
});
module.exports=uxi;
