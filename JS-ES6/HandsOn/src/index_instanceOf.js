class Order {

}
const order = new Order();
class Person {

}

class Employee extends Person {

}

const emp = new Employee();
console.log('Employee instance of Object ', emp instanceof Object);

console.log('Employee instance of Object ', emp instanceof Order);

const a = Object.create(null);
console.log('Employee instance of Object ', a instanceof Object);
