let firstNumber;
let secondNumber;
let operation = "";

function input(number) {
  const output = document.getElementById("output");

  const previousValue = output.value;
  const newValue = previousValue + number;

  output.value = newValue;
}

function equalTo() {
  const output = document.getElementById("output");
  const secondNumber = Number(output.value);

  let result;

  if (operation == "add") {
    result = firstNumber + secondNumber;
  } else if (operation == "subtract") {
    result = firstNumber - secondNumber;
  } else if (operation == "divide") {
    result = firstNumber / secondNumber;
  } else if (operation == "multiply") {
    result = firstNumber * secondNumber;
  } else {
    result = "invalid";
  }

  output.value = result;
}

function operate(type) {
  const output = document.getElementById("output");
  firstNumber = Number(output.value);
  operation = type;
  output.value = "";
}

function reset() {
  const output = document.getElementById("output");
  output.value = "";
}
