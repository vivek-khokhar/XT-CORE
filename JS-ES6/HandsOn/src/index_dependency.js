// ES 5 Syntax

function Address(doorNo=1, street='street', city='city',zipcode = 'zipcode', state = 'state') {
    this.doorNo = doorNo;
    this.street = street;
    this.city =city;
    this.zipCode= zipcode;
    this.state= state;
}

function Employee(id = 1, name = '', address = new Address()) {
    this.id = id;
    this.name = name;
    this.address = address;
}
let emp = new Employee();
console.log(emp.id, emp.name, emp.address.city);

let address = new Address ('1', 'windsor street', 'Delhi', '110001', 'New Delhi');

let employee = new Employee(89, 'TestUser', address);
console.log(employee.id, employee.name, employee.address.city);


/*****************************************************************************************************************************/
class Order {
    constructor(orderId ='00AA', value=0) {
        this.orderId = orderId;
        this.value = value;
    }
}

class Customer {
    constructor(id=1, name='name',order = new Order()) {
        this.id = id;
        this.name = name;
        this.order = order;
    }
}



// UI
class CustomerComponent {
    constructor() {
        console.log(`Customer UI is called`);
    }

    render(){
        let order = new Order('Q101', 1000.98);
        let customer = new Customer(200, 'Test wala User', order);
        
        console.log(customer);
    }
}

new CustomerComponent().render();