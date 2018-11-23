/// Numbers
var price = 10;
console.log(`The Price is ${price}`);
var lightspeed = 999999999999999999999999999999999999999999999999999999999999999999900000000000000000000000000000000000000000000000000000000000000;
console.log(lightspeed);

var stockValue = 89.7890;
console.log(stockValue);

var hexValue = 0xFF;
console.log(hexValue);

var qty ="10";

// implicit conversion
var totalPrice = qty * price;
console.log(`Total price is ${totalPrice}`);

// explicit conversion
var tPrice = parseInt(qty, 10) * price;
console.log(`Total price is 2 ${tPrice}`)