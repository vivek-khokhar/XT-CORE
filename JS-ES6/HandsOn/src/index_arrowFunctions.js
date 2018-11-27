// Arrow 

const greet = function (a, b) {
    console.log('greet');
}

const greetArrow = () => {
    console.log('greet from arrow');
}

greet();
greetArrow();

//suppose if I have only one line of body

const hi = () => console.log('hi');

// Arguments and parameters : single arg + without default args
const greetMe = (name) => console.log(name);
const greetMeAgain = name => console.log(name);

greetMe();
greetMeAgain();

// Single parameter with default value

const greetMeDefault = (name = 'name') => console.log(name);
greetMeDefault();
// more than one value with or without default values args

const greetDefaultParams = (name='test', get = 'uwhdi') => console.log(name, get);
greetDefaultParams();

// return values
const add = () => {
    return 10 + 10;
}

// if function returns only value /variable /expression , no more body. You can skip, {} and return statement
const subtract = () => 10-10;
console.log(subtract());

// if function gets single param without default args and return the same
const isActive = active => active;
console.log(isActive(true));
const toggle = hidden => !hidden;
console.log(toggle());

// if no args and parameters: empty brackets
const tap = _ => console.log('fetching records');
tap();
