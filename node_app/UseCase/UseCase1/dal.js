const fs = require('fs');
 class DataAccessLayer {
    constructor(fileStream = fs) {
        this.fileStream = fileStream;
        this.data = [];
        this.fileLocation = "./ordersData.json";
    }

      saveData(orderDetails) {
         //this.data = this.getData();
        this.data.push(orderDetails);
        this.fileStream.writeFileSync(this.fileLocation, JSON.stringify(this.data),'UTF8');
    }

     getData() {
        try {
            //this.data = console.log(this.fileStream.readFileSync(this.fileLocation,'UTF8'));
            return this.fileStream.readFileSync(this.fileLocation,'UTF8');
        } catch (error) {
            throw error; 
        }
    }

    getOrderValue(userName){
        const filtered = this.data.filter((item) =>  item.userName === userName);
        let returnObj = {
            Name : userName,
            orders : [],
            ordersTotal: 0
        };
        returnObj['Name'] = userName;
        filtered.forEach((item )=> {
            returnObj.orders.push({orderId: item.orderId, ordervalue: item.orderValue});
            returnObj.ordersTotal += parseFloat(item.orderValue); 
        })
        return returnObj;
    }
}

module.exports = DataAccessLayer;