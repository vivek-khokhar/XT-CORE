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

///////////////////////////////////////////////////////////////////////////////////var isWorking = true;
var isWorking = true;
var hasProject = true;
var workStatus = isWorking || hasProject;

console.log(workStatus);

/**
 * if first operand is truthy the result will br the first varable 
 **/

 var greetings = ""
 var message = greetings || "hello";
 console.log(message);


 // With & operator

 var test = "test";
 var test2 = test && "its a test";
 console.log(test2);

 ///////////////////////////
 // ternery operators
 //////////////////////////////

 var age = 19;
 var eligiblity = age >=18 ? "adult" : "minor";
 console.log(eligiblity);
 var counter = 0;
 var score = counter ? "you won" : "you lost";
 console.log(score);


 ////////////////////////////////////////// type of operator ///////////////////////////////////////////////////////////

 var num =1;
 var str ='test string';
 var bool = true;
 var xqw;
 var nanType = 100/xqw;
 var infi = 100/0;
 var fn = function () {};
 var obj = {x:1}; 
 var nullType = null;
 console.log(`Type of num is ${typeof num}`);
 console.log(`Type of str is ${typeof str}`);
 console.log(`Type of bool is ${typeof bool}`);
 console.log(`Type of undefined is ${typeof xqw}`);
 console.log(`Type of NaN is ${typeof nanType}`);
 console.log(`Type of infinity is ${typeof infi}`);
 console.log(`Type of function is ${typeof fn}`);
 console.log(`Type of object is ${typeof obj}`);
 console.log(`Type of null is ${typeof nullType}`);

 console.log(`Type of class is ${typeof class{}}`);

 ///////////////////////////////////////////////////////////////////////////////////////////////
    var actionType = "add";
    switch (actionType) {
        case "add":
            console.log('add is called');
            break;
        case "multiply":
            console.log("multiply is called");
            break;
        default:
            console.log("No match found");
    }

    if(actionType === "add") {
        console.log("add is called");
    } else if (actionType === "multiply") {
        console.log("multiply is called");
    } else {
        console.log("No match found");
    }

    console.log(`............................................................while condition without break and return..................`);

    switch (actionType) {
        case "add":
            console.log('add is called');
        case "multiply":
            console.log("multiply is called");
        default:
            console.log("No match found");
    }


//////////////////////////////////////////////////////////////////////////////
//  LOOPS
/////////////////////////////////////////////////

var step;
for (step=0; step < 5; step++) {
    console.log(`walking step by step ${step}`);
}
step = 0;
while(step < 5) {
    console.log(`walking step by step while loop ${step}`);
    step++;
}
step = 0;
do {
    console.log(`walking step by step do while loop ${step}`);
    step++;
} while (step < 5)


 
