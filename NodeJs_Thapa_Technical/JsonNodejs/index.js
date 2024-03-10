//task 
//1.convert js boj. to json obj.
//2.add json obj. to new file
//3.read and get file data
//4.convert filedata to js obj
//5.show jsobj on console
const fs=require("fs");
//given obj. is below
const bioData={
    "name":"disha",
    age:21,
    "gender":"female"
}
const jsonData=JSON.stringify(bioData);
//console.log(jsonData);
fs.writeFileSync("newFile.json",jsonData);
const fileData=fs.readFileSync("newFile.json");
const JsObj=JSON.parse(fileData);
console.log(JsObj);