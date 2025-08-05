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

// let i = 10;

// while (i < 4) {
//   console.log("Value of I is " + i);
//   i++;
// }

// // while (condition) {
// //   // code
// //   // increment
// // }

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// for (variable; condition; increment) {
//   //   code;
// }

for (var i = 10; i > -3; i--) {
  console.log(i);
  if (i >= 5) {
    continue;
  }
}

const submit = confirm("Are you sure you want to submit?");
if (submit) {
  alert("Submitted successfully");
} else {
  alert("Submission cancelled");
}
