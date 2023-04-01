const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const decimal = document.querySelector(".decimal");

let firstOperand = null;
let secondOperand = null;
let operator = null;
let shouldReset = false;

function updateDisplay(value) {
  if (shouldReset) {
    display.textContent = "";
    shouldReset = false;
  }
  display.textContent += value;
}

function reset() {
  display.textContent = "";
  firstOperand = null;
  secondOperand = null;
  operator = null;
}

function calculate() {
  let result;
  const a = parseFloat(firstOperand);
  const b = parseFloat(secondOperand);

  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    default:
      return;
  }

  display.textContent = result;
  firstOperand = result;
  secondOperand = null;
  operator = null;
  shouldReset = true;
}

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    updateDisplay(number.value);
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (firstOperand === null) {
      firstOperand = display.textContent;
      operator = operator.value;
      shouldReset = true;
    } else if (operator !== null) {
      secondOperand = display.textContent;
      calculate();
      operator = operator.value;
    } else {
      operator = operator.value;
      shouldReset = true;
    }
  });
});

equal.addEventListener("click", () => {
  if (secondOperand !== null) {
    calculate();
  }
});

clear.addEventListener("click", () => {
  reset();
});

decimal.addEventListener("click", () => {
  if (!display.textContent.includes(".")) {
    updateDisplay(decimal.value);
  }
});
