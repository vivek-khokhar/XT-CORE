const Orders = [{
    orderId:1,
    value: 200
},
{
    orderId:2,
    value:500
}]

const addOrder = (order) => {
    Orders.push(order);
}

module.exports = {Orders, addOrder};