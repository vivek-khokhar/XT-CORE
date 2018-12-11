const SQLAccountRepository = require("../repository/SQLAccountRepository");

class NEFTTransferService {
    constructor() {
        console.log("NEFTTransferService instance created..");
    }

    transfer (amount, fromAccountNum, toAccountNum) {
        console.log("TXr begains...");
        const sqlRepository = new SQLAccountRepository();
        const fromAccount = sqlRepository.loadAccount(fromAccountNum);
        const toAccount = sqlRepository.loadAccount(toAccountNum);

        fromAccount.balance -= amount;
        toAccount.balance += amount;

        sqlRepository.updateAccount(fromAccount);
        sqlRepository.updateAccount(toAccount);
        console.log("Txr success...");

    }
}

module.exports = NEFTTransferService;