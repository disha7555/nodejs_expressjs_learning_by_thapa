const fs=require('fs');

//fs.mkdirSync("./Thapa");
fs.writeFileSync("./Thapa/bio.text","Hello, Disha here");
fs.appendFileSync("./Thapa/bio.text"," good morning");
const data=fs.readFileSync("./Thapa/bio.text","utf-8");
console.log(data);
fs.renameSync("./Thapa/bio.text","./Thapa/mybio.text");
//fs.unlinkSync("../Thapa/mybio.text");
//fs.rmdirSync("../Thapa");