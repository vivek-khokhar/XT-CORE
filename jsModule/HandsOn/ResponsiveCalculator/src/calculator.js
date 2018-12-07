window.onload = function () {
    let savedValue, savedOperator;
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
                default:
                alert("Operation under progress");
                return;
    
        }
    }
    let inputVal = document.querySelector("#userInput");
    document.querySelectorAll("input[type='button'].number").forEach(
        num => {
            num.addEventListener('click', (e) => {
                inputVal.value = inputVal.value === "0" ? e.target.value : inputVal.value + e.target.value;
                if(savedOperator && savedValue) {
                    savedValue = operation(savedOperator,parseInt(savedValue), parseInt(inputVal.value));
                }
            })
        }
    )

    document.querySelectorAll("input[type='button'].operator").forEach(
        operator => {
            operator.addEventListener('click', (e) => {
                savedValue = savedValue ? operation(e.target.value, parseInt(savedValue), parseInt(inputVal.value)) : inputVal.value;
                savedOperator = e.target.value;
                inputVal.value = "0";
            })
        }
    )

    document.querySelector("#equal").addEventListener("click", (e) => {
       // savedValue = savedValue ? operator(e.target.value, savedValue, inputVal.value) : inputVal.value;
                inputVal.value = savedValue;
                savedValue = "";
    })
}