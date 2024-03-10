const fs=require("fs");
fs.writeFile("read.txt","hello",(err)=>{
    console.log("file created");
    console.log(err);
});
fs.appendFile("read.txt","world",()=>{
    console.log("data appended");
});

fs.readFile("read.txt","utf-8",(err,data)=>{
    console.log(data);
    console.log(err);
});