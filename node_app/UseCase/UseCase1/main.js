const service = require('./service');
//import OrderService from ('./service');
class EntryClass{
    constructor(service){
        this.service = service;
        this.orderId = 0;
    }

    addOrder (userName, orderValue) {
        let order = {
            userName: userName,
            orderValue: orderValue,
            orderId : ++this.orderId
        }
        this.service.saveOrder(order).then(
            data => console.log(data)
        );
    }

    getReport (userName) {
        this.service.getReport(userName).then((report) => {

            console.log(`Name: ${report.Name} 
            orders Array : ${JSON.stringify(report.orders)}
            orderTotal: ${report.ordersTotal}`)
        });
    }

    getAllOrders() {
        this.service.getAllOrders().then((data) => console.log(JSON.stringify(data)));
    }
}
const service1 = new service();
const test = new EntryClass(service1);

test.addOrder('test1', 10);
test.addOrder('test2', 10);
test.addOrder('test3', 10);
test.addOrder('test1', 10);
test.addOrder('test2', 10);
test.addOrder('test2', 10);

test.getReport('test1');
test.getReport('test2');
test.getReport('test3');
test.getAllOrders();
