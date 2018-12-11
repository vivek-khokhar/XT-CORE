//console.log("hello Node!");

const NEFTTransferServic = require("./services/NEFTTransferService");

console.log("-------------------------------------------------");
const txrService = new NEFTTransferServic();
console.log("-------------------------------------------------");


console.log("-------------------------------------------------");
txrService.transfer(100.00, "1", "2");
console.log();
txrService.transfer(100.00,"2","1");
console.log("-------------------------------------------------");