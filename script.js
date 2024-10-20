/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
let displayValue = "";
let operator = "";
let firstOperand = "";
let secondOperand = "";
let isDarkTheme = false;

window.appendToDisplay = function (value) {
    displayValue += value;
    updateDisplay();
};

window.appendOperator = function (op) {
    if (firstOperand === "") {
        firstOperand = displayValue;
        operator = op;
        displayValue = "";
        updateDisplay();
    }
};

window.clearDisplay = function () {
    displayValue = "";
    firstOperand = "";
    secondOperand = "";
    operator = "";
    updateDisplay();
};

window.calculate = function () {
    if (firstOperand !== "" && operator !== "" && displayValue !== "") {
        secondOperand = displayValue;
        const result = performCalculation(
            firstOperand,
            secondOperand,
            operator,
        );
        displayValue = result;
        firstOperand = "";
        secondOperand = "";
        operator = "";
        updateDisplay();
    }
};

window.performCalculation = function (a, b, op) {
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
};

window.toggleSign = function () {
    if (displayValue !== "" && displayValue !== "Ошибка") {
        displayValue = (parseFloat(displayValue) * -1).toString();
        updateDisplay();
    }
};

window.calculatePercentage = function () {
    if (displayValue !== "" && displayValue !== "Ошибка") {
        displayValue = (parseFloat(displayValue) / 100).toString();
        updateDisplay();
    }
};

window.updateDisplay = function () {
    document.getElementById("display").value = displayValue;
};

window.toggleTheme = function () {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle("dark-theme", isDarkTheme);
};
