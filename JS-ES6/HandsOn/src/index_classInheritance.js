function Person(name = "default") {
    console.log(`Person is called`);
    this.name = name;
}

function Employee(name) {
    //Person.call(this, name);
    console.log('Employee is called');
}

//Employee.prototype = Object.create(Person.prototype);

const emp1 = new Employee('Test ka User');
emp1.__proto__ = new Person();
console.log(emp1.name);

const emp2 = new Employee('Monkey D Luffy');
console.log(emp2.name);

const emp3 = new Employee('Nagraj');
console.log(emp3.name);

/////////////////////////////////////////////////////////////////////

class Base {
    constructor(){
        //base2 = 'base';
        console.log('Base constructor');
        this.jugaad();
    }
    jugaad() {
        console.log('Jugaad');
    }
    base = 'base';
    jugaad1 = function() {
        console.log('Jugaad1');
    }
}

class Account extends Base {
    constructor(balance = 1000) {
        super();
        console.log('Account constructor');
        this.balance = balance;
        this.balance1 = 1000;
    }
}

class SavingsAccount extends Account {
    constructor(accNo = 1, name = 'default user', balanece) {
        super(balanece);
        this.accNo = accNo;
        this.name = name;
        console.log('Saving Account');
    }
}

const sa = new SavingsAccount(891, 'doglus', 3500);
console.log(sa);
console.log(sa.hasOwnProperty('balance1'));

//////////////////////////////////////////////////////////////////////

const parent = {
    id:1
}
const child = Object.create(parent);
child.name = 'Superman';
console.log (child);

const hero = Object.create(null);
hero.name = 'Spider Man';
console.log(hero);

/////////////////////////////////////////////////////////////////////////////////////////////////////

const favFood = {
    name: "rice",
    toString() {
        return this.name;
    }
}
console.log(favFood.toString());