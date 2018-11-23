// false value
var isActive = false;
if (isActive) {
    console.log(`Active`);
} else{
    console.log("Inactive");
}

// empty string check
var myName = '';
if (myName) {
    console.log("Active");
} else {
    console.log("Inactive");
}

// 0 number check
var myNum = 0;
if (myNum) {
    console.log("Active");
} else {
    console.log("Inactive");
}

// infinity check
var myNum1 = 10;
if (myNum1/0) {
    console.log("Active");
} else {
    console.log("Inactive");
}

// NaN check
if (myNum1 - 'a') {
    console.log("Active");
} else {
    console.log("Inactive");
}

// undefined check
var myNum2;
if (myNum2) {
    console.log("Active");
} else {
    console.log("Inactive");
}

// null value check
var myNum3 = null;
if (myNum) {
    console.log("Active");
} else {
    console.log("Inactive");
}
if (myNum1/0 == myNum1/0) {
    console.log('null equal');
} else {
    console.log('2 NaN values are not equal.')
}