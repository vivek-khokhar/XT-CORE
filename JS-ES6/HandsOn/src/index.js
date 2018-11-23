function myFunction () {
    console.log('inside function my Function')
}

//////////////////////////////////////////////////////////////////
// agruments is in function
function add (a,b) {
    const result = a+ b;
    console.log(result);
}
//parameter are passed
console.log('a : 10, b : 20');
add(10,20);

console.log('a : none, b : none');
add();

console.log('a : "none", b : 20');
add("no", 10);

console.log('a : "10", b : 20');
add("10", 10);

//return value

function substract(a, b) {
    return a-b;
}

const result1 = substract(10,1);
console.log(result1);

function isValid() {
    return;
}

const status = isValid() ? 'Valid' : 'Invalid';

console.log(status);

function login(username, password) {
    if(username === 'admin' && password ==='admin'){
        return true;
    }
    
}

const loinas = login('admin', 'admin');
const testFun = login('admin1', 'admin1');

console.log(loinas);
console.log(testFun);

function addwithDefaultES5(a,b) {
    //debugger;
    a = a || 0;
    b = b || 0;
    const result = parseInt(a) + parseFloat(b);
    console.log( 'ES5 default values:- ' +result);
}

function addwithDefaultES6(a = 0,b = 0) {
    const result = parseInt(a) + parseFloat(b);
    console.log( 'ES6 default values:- ' +result);
}

addwithDefaultES5(0 , 'fr');
addwithDefaultES6(undefined, undefined);

function log() {
    console.log(arguments);
}
log('hello');
log('Hi', 'welcome', 'to', 'the', 'training 1');

/// rest operator
function logES6 (...args) {
    console.log(args);
}


logES6('Hi', 'welcome', 'to', 'the', 'training 2');

function doWeblog(page, ...args) {
    console.log(page, args);
}

doWeblog('first param fixed','Hi', 'welcome', 'to', 'the', 'training 3');