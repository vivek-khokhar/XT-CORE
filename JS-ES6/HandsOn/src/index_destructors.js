'use strict'

// Object Destructruting

function getEmployee({id, name, salary}) {
    //ES5 Pattern
    // const id = employee.id;
    // const name = employee.name;
    // const salary = employee.salary;

    // console.log(`ID ${id}`);
    // console.log(`Name ${id}`);
    // console.log(`Salary ${id}`);

    //ES6 pattern

    //const {id, name,salary} = employee;
     console.log(`ID ${id}`);
    console.log(`Name ${id}`);
    console.log(`Salary ${id}`);

}

getEmployee({
    id: 1,
    name: 'test',
    salary: 100
});

const getStocks = (id, value, symbol) => ({
    id: id,
    value: value,
    symbol: symbol
})

// both key and value identifier is same , make it one
const getStocks1 = (id =1, value=7.9, symbol="DTF") => ({
    id: id,
    value: value,
    symbol: symbol
})

console.log(getStocks(3, 900, "DSF"));

console.log(getStocks1(13,1900, "DSF"));

const getCustomers = ({id, address: {city, NCT}}) => {
   // console.log(id, address.city);
    console.log(id, city, NCT);
}
const customer = {
    id:1,
    address: {
        city:"delhi",
        NCT:"Capital"
    }
}
getCustomers(customer);