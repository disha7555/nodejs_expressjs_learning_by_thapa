const http = require("http");
const server=http.createServer((req,res)=>{
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
     res.write("hi");
     res.end("about pagee");
    //we cant use res.write after writing res.end
    //res.end should be last 
}
else{
    res.writeHead(404, { "Content-type" : "text/html" }); //to change writehead to 400 otherwise it will show 200 
    //(shown in inspect->network [refresh page if dont show])   
     res.end("<h1> error page </h1>");
}
});
server.listen(8002,"127.0.0.1",()=>{
    console.log("listening to port 8002");
});
