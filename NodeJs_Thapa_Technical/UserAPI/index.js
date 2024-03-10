const http = require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{
    const userApiData=fs.readFileSync("UserAPI1.json");
    console.log(req.url);
if(req.url==="/")
{
     res.end('hello');
}
 else if(req.url==="/contact")
{
    res.end("contact page");
}
 else if(req.url==="/about")
{
     res.end("about page");
}
else if(req.url==="/userapi")
{
    res.writeHead(200, { "Content-type" : "application/json" }); 
    res.end(userApiData);
}
else
{
    res.writeHead(404, { "Content-type" : "text/html" }); 
    res.end("<h1> error page </h1>");
}
});
server.listen(8002,"127.0.0.1",()=>{
    console.log("listening to port 8002");
});
