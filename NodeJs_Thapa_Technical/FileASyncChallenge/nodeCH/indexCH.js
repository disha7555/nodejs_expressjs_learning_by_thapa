const fs=require('fs');
fs.mkdirSync("./Thapa");
fs.readFile("./Thapa/bio.text","utf-8",(err,data)=>{
    console.log(err);
    console.log(data);
    console.log("reading");
});
fs.writeFile("./Thapa/bio.text","Hello, Disha here",(err)=>{
    console.log(err);
    console.log("writing");
});
fs.appendFile("./Thapa/bio.text"," good morning",(err)=>{
    console.log(err);
    console.log("appending");
});

fs.renameSync("./Thapa/bio.text","./Thapa/mybio.text");
fs.unlinkSync("../Thapa/mybio.text");
fs.rmdirSync("../Thapa");
