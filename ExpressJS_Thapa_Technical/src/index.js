const express=require("express");
const path=require("path");
const app=express();

const staticPath=path.join(__dirname,"../public");
app.use(express.static(staticPath));
app.get("/",(req,res)=>{
    res.send("hello")
});
app.get("/about",(req,res)=>{
    res.send("about page");
});
app.listen(8006,()=>{
    console.log("listening on port 8006");
});