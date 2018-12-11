const account = require("../models/Account");

class SQLAccountRepository {
    constructor () {
        console.log("SQLAccountRepository initalized.")
    }

    loadAccount(num) {
        console.log("Loading account " + num);
        return new account(num, 1000.00);
    }

    updateAccount(account) {
        console.log("Updating Account " + account.accountNumber);
    } 
    
}

module.exports = SQLAccountRepository;