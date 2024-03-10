const express=require("express");
const path=require("path");
const app=express();
const hbs=require("hbs");

//app.use(express.static(path.join(__dirname, "/public")));
const staticPath=path.join(__dirname,"../public");
const templatePath=path.join(__dirname,"../src/Templates/views");
const partialsPath=path.join(__dirname,"../src/Templates/partials");
// console.log(staticPath);
// console.log(templatePath);
app.use(express.static(staticPath));

app.set('view engine','hbs');
app.set('views','templatePath');
hbs.registerPartials(partialsPath);

app.get("",(req,res)=>{
    res.render("index",{
        name:"disha",
    });
});
app.get("/",(req,res)=>{
    res.send("hello")
});
app.get("/about",(req,res)=>{
    res.send("about page");
});
app.listen(8008,()=>{
    console.log("listening on port 8008");
});