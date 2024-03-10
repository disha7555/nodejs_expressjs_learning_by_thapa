const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("hello world")
});
app.get("/about",(req,res)=>{
    res.send("about page");
});
app.listen(8004,()=>{
    console.log("listening on port 8004");
});