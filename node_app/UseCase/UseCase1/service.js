const dal = require('./dal');

//import DataAccessLayer from ('./dal');

class OrderService {
    constructor() {
        this.dal = new dal();
    }

     async saveOrder(orderDetails){
         this.dal.saveData(orderDetails);
         return ("data saved with order details "+ JSON.stringify(orderDetails) );
    }

    async getReport(userName) {
        return this.dal.getOrderValue(userName);
    }

    async getAllOrders() {
        return (this.dal.getData());
    }

}

module.exports = OrderService;