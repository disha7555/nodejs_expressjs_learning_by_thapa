const Chalk=require("chalk");
const validator=require("validator");
console.log(Chalk.blue("hello"));
console.log(Chalk.blue.inverse("world"));
console.log(Chalk.blue.underline("hello"));

const res=validator.isEmail("disha123@gmail.com");
console.log(res ? Chalk.green.inverse(res) : Chalk.red.inverse(res));
