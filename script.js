/* eslint-disable no-unused-vars */
let displayValue = "";
let operator = "";
let firstOperand = "";
let secondOperand = "";
let isDarkTheme = false;

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function appendOperator(op) {
    if (firstOperand === "") {
        firstOperand = displayValue;
        operator = op;
        displayValue = "";
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = "";
    firstOperand = "";
    secondOperand = "";
    operator = "";
    updateDisplay();
}

function calculate() {
    if (firstOperand !== "" && operator !== "" && displayValue !== "") {
        secondOperand = displayValue;
        let result = performCalculation(firstOperand, secondOperand, operator);
        displayValue = result;
        firstOperand = "";
        secondOperand = "";
        operator = "";
        updateDisplay();
    }
}

function performCalculation(a, b, op) {
    a = parseFloat(a);
    b = parseFloat(b);
    let result = 0;
    switch (op) {
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
            result = b !== 0 ? a / b : "Ошибка";
            break;
    }
    return result.toString();
}

function toggleSign() {
    if (displayValue !== "" && displayValue !== "Ошибка") {
        displayValue = (parseFloat(displayValue) * -1).toString();
        updateDisplay();
    }
}

function calculatePercentage() {
    if (displayValue !== "" && displayValue !== "Ошибка") {
        displayValue = (parseFloat(displayValue) / 100).toString();
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById("display").value = displayValue;
}

function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle("dark-theme", isDarkTheme);
}
