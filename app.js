// const yourName = prompt("What is your name?");

// function sayHello(yourName) {
//   console.log("Hello " + yourName + "!");
// }

// sayHello(yourName);

// function add(a, b) {
//   return a + b;
// }

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
