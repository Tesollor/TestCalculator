(()=>{var __webpack_modules__={"./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/()=>{eval('var displayValue = "";\nvar operator = "";\nvar firstOperand = "";\nvar secondOperand = "";\nvar isDarkTheme = false;\nvar operatorClicked = false;\nvar maxDisplayLength = 16;\nwindow.appendToDisplay = function (value) {\n  if (operatorClicked) {\n    displayValue = ""; // очищаем для второго операнда после ввода оператора\n    operatorClicked = false;\n  }\n\n  // если длина превышает максимум, удаляем старшие цифры\n  if (displayValue.length >= maxDisplayLength) {\n    displayValue = displayValue.slice(1);\n  }\n  displayValue += value; // добавляем новую цифру\n  updateDisplay();\n};\nwindow.appendOperator = function (op) {\n  if (firstOperand === "") {\n    firstOperand = displayValue; // сохраняем первый операнд\n  } else if (operator && !operatorClicked) {\n    // если оператор уже был введен, производим промежуточное вычисление\n    secondOperand = displayValue;\n    var result = performCalculation(firstOperand, secondOperand, operator);\n    firstOperand = result; // результат становится первым операндом\n    displayValue = result; // отображаем результат\n    updateDisplay();\n  }\n  operator = op; // сохраняем оператор\n  operatorClicked = true; // отмечаем, что оператор был нажат\n  displayValue = "".concat(firstOperand, " ").concat(operator); // отображаем первый операнд и оператор\n  updateDisplay();\n};\nwindow.clearDisplay = function () {\n  displayValue = "";\n  firstOperand = "";\n  secondOperand = "";\n  operator = "";\n  operatorClicked = false;\n  updateDisplay();\n};\nwindow.calculate = function () {\n  if (firstOperand !== "" && operator !== "" && displayValue !== "") {\n    secondOperand = displayValue; // сохраняем второй операнд\n    var result = performCalculation(firstOperand, secondOperand, operator);\n    displayValue = result;\n    firstOperand = "";\n    secondOperand = "";\n    operator = "";\n    operatorClicked = false;\n    updateDisplay();\n  }\n};\nwindow.performCalculation = function (a, b, op) {\n  a = parseFloat(a);\n  b = parseFloat(b);\n  var result = 0;\n  switch (op) {\n    case "+":\n      result = a + b;\n      break;\n    case "-":\n      result = a - b;\n      break;\n    case "*":\n      result = a * b;\n      break;\n    case "/":\n      result = b !== 0 ? a / b : "Ошибка";\n      break;\n  }\n  return result.toString();\n};\nwindow.toggleSign = function () {\n  if (displayValue !== "" && displayValue !== "Ошибка") {\n    displayValue = (parseFloat(displayValue) * -1).toString();\n    updateDisplay();\n  }\n};\nwindow.calculatePercentage = function () {\n  if (displayValue !== "" && displayValue !== "Ошибка") {\n    displayValue = (parseFloat(displayValue) / 100).toString();\n    updateDisplay();\n  }\n};\nwindow.updateDisplay = function () {\n  document.getElementById("display").value = displayValue;\n};\nwindow.toggleTheme = function () {\n  isDarkTheme = !isDarkTheme;\n  document.body.classList.toggle("dark-theme", isDarkTheme);\n};\n\n//# sourceURL=webpack://testcalculator/./src/script.js?')}},__webpack_exports__={};__webpack_modules__["./src/script.js"]()})();