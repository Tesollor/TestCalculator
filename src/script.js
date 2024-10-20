let displayValue = "";
let operator = "";
let firstOperand = "";
let secondOperand = "";
let isDarkTheme = false;
let operatorClicked = false;
let maxDisplayLength = 16;

window.appendToDisplay = function (value) {
    if (operatorClicked) {
        displayValue = ""; // очищаем для второго операнда после ввода оператора
        operatorClicked = false;
    }

    // если длина превышает максимум, удаляем старшие цифры
    if (displayValue.length >= maxDisplayLength) {
        displayValue = displayValue.slice(1);
    }

    displayValue += value; // добавляем новую цифру
    updateDisplay();
};

window.appendOperator = function (op) {
    if (firstOperand === "") {
        firstOperand = displayValue; // сохраняем первый операнд
    } else if (operator && !operatorClicked) {
        // если оператор уже был введен, производим промежуточное вычисление
        secondOperand = displayValue;
        const result = performCalculation(
            firstOperand,
            secondOperand,
            operator,
        );
        firstOperand = result; // результат становится первым операндом
        displayValue = result; // отображаем результат
        updateDisplay();
    }

    operator = op; // сохраняем оператор
    operatorClicked = true; // отмечаем, что оператор был нажат
    displayValue = `${firstOperand} ${operator}`; // отображаем первый операнд и оператор
    updateDisplay();
};

window.clearDisplay = function () {
    displayValue = "";
    firstOperand = "";
    secondOperand = "";
    operator = "";
    operatorClicked = false;
    updateDisplay();
};

window.calculate = function () {
    if (firstOperand !== "" && operator !== "" && displayValue !== "") {
        secondOperand = displayValue; // сохраняем второй операнд
        const result = performCalculation(
            firstOperand,
            secondOperand,
            operator,
        );
        displayValue = result;
        firstOperand = "";
        secondOperand = "";
        operator = "";
        operatorClicked = false;
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
