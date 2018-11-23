function consoleCalculator( value1 = '0', value2 = '0', operator = '+') {
    if(typeof value1 === 'number' && typeof value2 === 'number') {
        const result = operation (operator, value1, value2);
        console.log(`Calculated value for operation ${operator} with values ${value1} and ${value2} is  ${result}`);
    } else {
        console.log("this function accepts parameter in number 1 , number 2 operation you want to perform  format only. e.g. consoleCalculator(10,10.'+')");
    }
}

function operation (operator, value1, value2) {
    switch (operator) {
        case '+':
            return value1 + value2;
            case '-':
            return value1 - value2;
            case '*':
            return value1 * value2;
            case '/':
            return value1 / value2;
            case '%':
            return value1 % value2;
            case '**':
            return value1 ** value2;

    }
}

consoleCalculator();
// output this function accepts parameter in number 1 , number 2 operation you want to perform  format only. e.g. consoleCalculator(10,10.'+')

consoleCalculator(10 , 10 );
// Calculated value for operation + with values 10 and 10 is  20

consoleCalculator(10 , 10, '+' );
// Calculated value for operation + with values 10 and 10 is  20

consoleCalculator(100 , 10, '-' );
// Calculated value for operation - with values 100 and 10 is  90

consoleCalculator(10, 10 , '*');
// Calculated value for operation * with values 10 and 10 is  100

consoleCalculator(100.6, 10 , '/');
// Calculated value for operation / with values 100.6 and 10 is  10.059999999999999


consoleCalculator(100.6, 10 , '%');
// Calculated value for operation % with values 100.6 and 10 is  0.5999999999999943

consoleCalculator(2, 3 , '**');
// Calculated value for operation ** with values 2 and 3 is  8


