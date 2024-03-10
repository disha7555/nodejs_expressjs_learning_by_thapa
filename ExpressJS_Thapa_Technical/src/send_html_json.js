const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.write("<h1>Hi..</h1>");
    res.write("<h1>from disha</h1>");
    res.send();
});
app.get("/about",(req,res)=>{
    res.send({
        id:1,
        name:"a",
    });
});
app.get("/about",(req,res)=>{
    res.json({
        id:1,
        name:"a",
    });
    
});
app.listen(8005,()=>{
    console.log("listening on port 8005");
});