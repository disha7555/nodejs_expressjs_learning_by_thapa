//method1:without destructuring

// const operator=require('./operator');
// console.log(operator.add(5,5));
// console.log(operator.sub(10,5));
// console.log(operator.mul(5,1));
// console.log(operator.name);

//method2:with destructuring
const {add,sub,mul,name}=require('./operator');
console.log(add(5,5));
console.log(sub(10,5));
console.log(mul(5,1));
console.log(name);