const path=require('path');
console.log(path.dirname('C:/Users/Welcome/Desktop/NodeJs_Thapa_Technical/PathModule/path.js'));
console.log(path.extname('C:/Users/Welcome/Desktop/NodeJs_Thapa_Technical/PathModule/path.js'));
console.log(path.basename('C:/Users/Welcome/Desktop/NodeJs_Thapa_Technical/PathModule/path.js'));

const parse=path.parse('C:/Users/Welcome/Desktop/NodeJs_Thapa_Technical/PathModule/path.js');
console.log(parse);
console.log(parse.base);
console.log(parse.dir);
console.log(parse.ext);
console.log(parse.name);
console.log(parse.root);