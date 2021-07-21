const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const PORT = 8000;

// middlewares
app.use(bodyParser.json());   //parses the request body
app.use(cookieParser());



app.get("/ram",(req,res)=>{
    return res.status(200).json({
        message: "HOME PAGE pr welcome h"
    });
});





app.listen(PORT, ()=>{
    console.log("SERVER IS UP AND RUNNING AT PORT ",PORT);
})