function Employee() {

}

/**
 * emp is pointer / reference to employee Object
 */
let emp = new Employee();
console.dir(emp);
console.log(Employee.prototype);
console.log(emp.__proto__);
console.log(Object.getPrototypeOf(emp));