console.log("App conncted...");
// function add(a, b) {
//   return a + b;
// }

const HISTORY = document.querySelector("#history");
const OUTPUT = document.querySelector("#output-text");

const BTN_CNTNR = document.getElementById(".buttons-container");

let values = [0, 10, 20];
let outputValue = values[values.length - 1];
let currentValue;
let operatorValue;

OUTPUT.innerHTML = outputValue;
HISTORY.innerHTML = values.join(" ");

BTN_CNTNR.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn")) {
    // Retrieve the data-number attribute and convert it to a number
    const number = parseInt(event.target.getAttribute("data-number"), 10);

    // Now you can use the number in your logic
    console.log("Number from button:", number);
    // ... Your code to handle the number ...
  }
});

// Ouput something to the screen

// Handle Inputs and pass to function

//Generate a random rounded number between 0 and 10.
let aRand = Math.floor(Math.random() * 10);

//Generic examples.
const thisIsTheResult = add(aRand, aRand);
console.log("The result is", thisIsTheResult);

const anotherResult = add(aRand, aRand);
console.log("Another result is", thisIsTheResult);

// Calculator Fun!

// Utility functions
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function subtract(a, b) {
  return a - b;
}
function add(a, b) {
  return a + b;
}

// Main calculator function
function calculate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  } else {
    return "Please supply two numbers and an operator (+, -, *, /) seperated by commas.";
  }
}

// Switch version of the calculator
function switchCalculator(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "Please supply two numbers and an operator (+, -, *, /) seperated by commas.";
  }
}

// Final results
console.log("The result is", switchCalculator(aRand, aRand, "+"));
console.log("The result is", switchCalculator(aRand, aRand, "-"));
console.log("The result is", switchCalculator(aRand, aRand, "*"));
console.log("The result is", switchCalculator(aRand, aRand, "/"));
