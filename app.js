const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view-engine",'ejs');
app.use(express.static("public"));
