//console.log("Hello world");
//handling file system

const fs=require('fs');

//writing in file
fs.writeFileSync("read.txt","hello world");

//appending in file
fs.appendFileSync("read.txt"," Disha here");

//reading from file 
const buffer_data=fs.readFileSync("read.txt");
console.log(buffer_data);
const original_data=buffer_data.toString();
console.log(original_data);

//renaming file
fs.renameSync("read.txt","readwrite.txt");