const express = require("express");
const app = express();
const PORT = 3000;

app.get("/",(req,res,next)=>{
    res.status(200).send("This is the home page")
})

app.listen(PORT ,()=>{
    console.log("Listening on PORT: " + PORT)
})