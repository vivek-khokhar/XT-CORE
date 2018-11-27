/**
 * If function is for Object template then name should be noun
 * Data initalization:
 *  -> hardcoded
 *  -> after object creation
 *  -> during object creation(using constructor parameters)
 */

 function Employee(id =1, name='default', salary=1) {
     //instance members:
     this.id = id;
     this.name = name;
     this.salary = salary;

     // methods

     this.calculateSalary = function() {
         return 1000 * this.salary;
     }
 }

 let emp = new Employee();
 console.log(emp);
 emp.name = 'test';
 // how to log / get object properties

 console.log(emp.id, emp.name, emp.salary);

 console.log( emp.calculateSalary());

 // constructor parameters
    let emp1 = new Employee(12, 'Jugaad', 1000);
    console.log(emp1);
///////////////////////////////////////////////////////////////////////////////////////////////////
// Literal pattern
let customer = {
    id:1,
    name: 'ram',
    calculator: function(param = 100){
        return param * 5;
    }
};
console.log(customer);
console.log(customer.calculator(14));

/***********************************************************************************************************************************
 * es 6 cLASS: TO CREATE OBJECT
 */

 class Account {
     constructor (id =1, name='default') {
        this.id = id;
        this.name = name;
     }
     withdraw () {
         return 'withdraw';
     }
     deposit() {
         return 'deposit';
     }
 }

 var acc1 = new Account();
 console.log(acc1);