"use strict";
const express=require("express");
const bodyParser=require("body-parser");
const vehicles=require("./routes/vehicles.js");
const app=express();
const server=app.listen(3000);
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static("public"));
app.use("/vehicles",vehicles);

