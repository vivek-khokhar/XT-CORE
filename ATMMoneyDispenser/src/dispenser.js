window.onload = function() {
  let value1 = document.querySelector("#valueOne");
  let value2 = document.querySelector("#valueTwo");
  let value5 = document.querySelector("#valueFive");
  let value10 = document.querySelector("#valueTen");
  let value20 = document.querySelector("#valueTwenty");
  let value50 = document.querySelector("#valueFifty");
  let value100 = document.querySelector("#valueHundred");
  let value200 = document.querySelector("#valueTwoHundred");
  let value500 = document.querySelector("#valueFiveHundred");
  let value2000 = document.querySelector("#valueTwoK");
  let totalNotes = document.querySelector("#totalNotes");
  let amount = document.querySelector("#amount");

  let currencyValueRef = {
    "2000": 0,
    "500": 0,
    "200": 0,
    "100": 0,
    "50": 0,
    "20": 0,
    "10": 0,
    "5": 0,
    "2": 0,
    "1": 0
  };

  let currencyValue;

  function atm_dispenser(amount, currencyKey, index = 0, result = {}) {
    let value = currencyKey[index];
    let count = Math.floor(amount / value);
    result[value] = count;
    index += 1;
    result["total"] = result["total"]
      ? result["total"] + count
      : Math.floor(amount / value);
    if (parseInt(value) === 1) {
      return result;
    }
    if (parseInt(amount) >= parseInt(value)) {
      return atm_dispenser(amount % value, currencyKey, index, result);
    } else {
      return atm_dispenser(amount % value, currencyKey, index, result);
    }
  }
  function submitHandler() {
    currencyValue = Object.assign({}, currencyValueRef);
    let keys = Object.keys(currencyValue).reverse();
    currencyValue = atm_dispenser(amount.value, keys);
    value1.innerHTML = currencyValue["1"];
    value2.innerHTML = currencyValue["2"];
    value5.innerHTML = currencyValue["5"];
    value10.innerHTML = currencyValue["10"];
    value20.innerHTML = currencyValue["20"];
    value50.innerHTML = currencyValue["50"];
    value100.innerHTML = currencyValue["100"];
    value200.innerHTML = currencyValue["200"];
    value500.innerHTML = currencyValue["500"];
    value2000.innerHTML = currencyValue["2000"];
    totalNotes.innerHTML = currencyValue["total"];
    console.log(JSON.stringify(currencyValue));
  }
  document.querySelector("#inputForm").addEventListener("submit", e => {
    e.preventDefault();
    submitHandler()
  });
  document.querySelector("#getMoney").addEventListener("click", submitHandler );
};
