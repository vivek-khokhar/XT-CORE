const fs = require('fs');
try {
//const testFile = fs.readFileSync('../node_app/practice_code/test.txt','UTF8');
const testFile = fs.readFileSync('../node_app/test.txt','UTF8');
console.log(testFile);
} catch (err) {
    console.log('something is not right');
}
console.log('end');
//////////////////////////////////////////////////////////////////////////////////////

try {
    const data = 'uigciuewgfcjcgeif iowhsvjkwvjbew lips' ;
    fs.writeFileSync('./test2.txt', data, 'UTF8');
} catch (error) {
    console.log('write operation failed');
}
