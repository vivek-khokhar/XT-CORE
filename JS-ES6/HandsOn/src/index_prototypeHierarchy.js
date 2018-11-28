function Account() {
    this.id = 1;
    this.name = 'user account';
    // this.calculateIntrest = function () {
    //     return 20;
    // }
    //this.prototype.balance = 9898;
}

Account.prototype.balance = 1000.00;
//common methods
Account.prototype.calculateIntrest = function(p = 1000,r = 10.5,t = 12) {
    return p*r*t/100;
}

const acc1 = new Account();
acc1.id = 100;
console.dir(acc1);
acc1.balance = 8000;

// method is redefined from parent

acc1.calculateIntrest = 

console.log(acc1.id, acc1.name, acc1.balance, acc1.transLimmit);

const acc2 = new Account();
acc2.id = 999;

console.dir(acc2);

console.log('Default Intrest for acc2', acc2.calculateIntrest());
console.log(acc2.hasOwnProperty('id'));