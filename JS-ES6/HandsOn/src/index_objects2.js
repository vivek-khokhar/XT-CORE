// Object augmentation: instance level
// Object from function, literal, class can be augmented.

function Employee() {

}
const emp = new Employee();
// Augmentation: Add
emp.id = 1;
emp.name = 'viev';
emp.city = 'Delhi';
emp.calculate = function(a,b) {
    return a + b;
}
console.log(emp);

const emp1 = new Employee();
console.log(emp1);

// Augmentation Update

emp.name = 'Bhalu';
console.log(emp);
// Augmentation delete

    delete emp.name;
    console.log(emp);

    // augmentation : iteration

    for(var key in emp) {
        console.log(key);
        console.log(emp[key]);
        
    }

    console.log(emp['city']);
    console.log(emp.city);

    // literal object creation

    const acc= {
        id: 1,
        name : 'ydwidwo'
    }
    //or

    const account1 = new Object();
    account1.name = 'account1';
    account1.city = 'delhi';

    console.log(acc);
    console.log(account1);

