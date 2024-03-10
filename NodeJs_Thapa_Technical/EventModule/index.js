const EventEmitter=require("events");
const event=new EventEmitter();

event.on("sayName",()=>{
    console.log("disha");
});
event.on("sayName",()=>{
    console.log("kashmira");
});
event.on("sayName",()=>{
    console.log("kaurang");
});

event.emit("sayName");

//events with mutiple parameters

event.on("checkPage",(status,msg)=>{
    console.log(`status code is ${status} and message is ${msg}`);
});

event.emit("checkPage",200,"ok");