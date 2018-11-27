//'use strict';

function print_a() {
    console.log(a);
}

var a = 100;

function run() {
    var a = 99;
    print_a();
}

run();

/**   This Binding **/

// Actor 1: callee
var greet = function() {
    console.log(this);
}

// Actor 2: caller : Default caller window
greet();

// or 

window.greet(); // here method is bound with window object

function getCordinate(name) {
    console.log(`${this} => X : ${this.x} Y: ${this.y} + passed param is ${name}`)
}

// No caller/ No target/ no owner

//getCordinate();

/* binding on map */
const map ={
    x:1000,
    y:7210
}

getCordinate.call(map);

// window cordinates
var x =999;
var y = 1413;

getCordinate.call(window);

getCordinate.call(map, 'Map object');

getCordinate.call(window, 'window object');


function getStockes(...stock1) {
    console.log(`${this.name}  ${stock1} `);
    console.log(stock1);
}

getStockes.apply({name: 'sapient'}, [{id:1,value:100},{id:2, value:112},{id:3,value:107}]);

console.log(`with call`);
getStockes.call({name: 'sapient'}, [{id:1,value:100},{id:2, value:112},{id:3,value:107}]);


/**********************************************************************************************************/

function increment() {
    return this.count++;
}
const CounterApp = {
    count:0
}
const inc = increment.bind(CounterApp);
console.log(`Counter  ${inc()}`);

for (let index = 0; index < 5; index++) {
    console.log(`Counter  ${inc()}`);
    
}

/*************************************************************************************************************** */
name = 'Ravi';
const training =  {
    name: 'test',
    teach: function() {
        console.log('teach ' + this.test);
        let learn = function() {
            console.log('learn ' + this.name);
            //console.log('learn ' + training.name);
        }
        //learn();
        //learn.call(training);
        learn.call(this);
    }
}
training.teach();

/*************************************************************** ************************* */

function sessionStart() {
    function Trainer(name) {
        console.log(this);
        this.name = name;
        this.doTeach = function (sub) {
            console.log(this.name + " teaching " + sub);
            let that = this;
            let notes = ".js-notes";
            let doLearn = function () {
                console.log(this.name + " learning " + sub + " with " + notes + " from " + that.name);
            }
            console.log('teaching ends');
            return doLearn;
        }
    }

    function Employee(name) {
        this.name = name;
    }

    const tnr = new Trainer('Test');
    const e1 = new Employee('E1');
    const e2 = new Employee('E2');
    const doLearn = tnr.doTeach('.js');
    doLearn.call(e1);
    const e2LearnFncn = doLearn.bind(e2);
    e2LearnFncn();
    e2LearnFncn();
    console.log('without new');
    Trainer('Test');
}
sessionStart();

