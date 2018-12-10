window.onload = function () {
    let savedValue, savedOperator, interimValue;
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
                return "0";
                return;
    
        }
    }
    let inputVal = document.querySelector("#userInput");
    document.querySelectorAll("input[type='button'].number").forEach(
        num => {
            num.addEventListener('click', (e) => {
                inputVal.value = inputVal.value === "0" ? e.target.value : inputVal.value + e.target.value;
                // if(savedOperator && savedValue) {
                //     savedValue = operation(savedOperator,parseInt(savedValue), parseInt(inputVal.value));
                // }
                document.querySelector("#textOutput").innerHTML += e.target.value; 
            })
        }
    )

    document.querySelectorAll("input[type='button'].operator").forEach(
        operator => {
            operator.addEventListener('click', (e) => {
                savedValue = savedValue ? operation(e.target.value, parseInt(savedValue), parseInt(inputVal.value)) : inputVal.value;
                savedOperator = e.target.value;
                inputVal.value = "0";
                document.querySelector("#textOutput").innerHTML += e.target.value; 
            })
        }
    )

    document.querySelector("#equal").addEventListener("click", (e) => {
        savedValue = savedValue ? operation(savedOperator, parseInt(savedValue), parseInt(inputVal.value)) : inputVal.value;
                inputVal.value = savedValue;
                savedValue = "";
                document.querySelector("#textOutput").innerHTML += e.target.value; 
    })
}