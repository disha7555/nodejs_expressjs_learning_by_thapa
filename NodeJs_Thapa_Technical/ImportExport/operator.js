const add = (a,b)=>{

    return a+b;
}

const sub = (a,b)=>{

    return a-b;
}

const mul = (a,b)=>{

    return a*b;
}

const name="disha";
//for exporting only one thing we can do as follows
//module.exports=add;

//for exporting mutiple things(method:1)
// module.exports.add=add;
// module.exports.sub=sub;
// module.exports.mul=mul;

//second method for exporting mutiple things(method:2)
module.exports={add,sub,mul,name};