const fs = require('fs');

const options = {
    encoding:'UTF8'
}
const callBack = (err, data) => {
    if(err) throw err;
    console.log(data);
}
console.log('start...');
fs.readFile('../node_app/practice_code/test.txt',options, callBack);
console.log('end...');