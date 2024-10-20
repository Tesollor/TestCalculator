/* eslint-disable no-unused-vars */
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
    // webpackBootstrap
    /******/ var __webpack_modules__ = {
        /***/ "./script.js":
            /*!*******************!*\
  !*** ./script.js ***!
  \*******************/
            /***/ () => {
                eval(
                    '/* eslint-disable no-unused-vars */\nvar displayValue = "";\nvar operator = "";\nvar firstOperand = "";\nvar secondOperand = "";\nvar isDarkTheme = false;\nfunction appendToDisplay(value) {\n  displayValue += value;\n  updateDisplay();\n}\nfunction appendOperator(op) {\n  if (firstOperand === "") {\n    firstOperand = displayValue;\n    operator = op;\n    displayValue = "";\n    updateDisplay();\n  }\n}\nfunction clearDisplay() {\n  displayValue = "";\n  firstOperand = "";\n  secondOperand = "";\n  operator = "";\n  updateDisplay();\n}\nfunction calculate() {\n  if (firstOperand !== "" && operator !== "" && displayValue !== "") {\n    secondOperand = displayValue;\n    var result = performCalculation(firstOperand, secondOperand, operator);\n    displayValue = result;\n    firstOperand = "";\n    secondOperand = "";\n    operator = "";\n    updateDisplay();\n  }\n}\nfunction performCalculation(a, b, op) {\n  a = parseFloat(a);\n  b = parseFloat(b);\n  var result = 0;\n  switch (op) {\n    case "+":\n      result = a + b;\n      break;\n    case "-":\n      result = a - b;\n      break;\n    case "*":\n      result = a * b;\n      break;\n    case "/":\n      result = b !== 0 ? a / b : "Ошибка";\n      break;\n  }\n  return result.toString();\n}\nfunction toggleSign() {\n  if (displayValue !== "" && displayValue !== "Ошибка") {\n    displayValue = (parseFloat(displayValue) * -1).toString();\n    updateDisplay();\n  }\n}\nfunction calculatePercentage() {\n  if (displayValue !== "" && displayValue !== "Ошибка") {\n    displayValue = (parseFloat(displayValue) / 100).toString();\n    updateDisplay();\n  }\n}\nfunction updateDisplay() {\n  document.getElementById("display").value = displayValue;\n}\nfunction toggleTheme() {\n  isDarkTheme = !isDarkTheme;\n  document.body.classList.toggle("dark-theme", isDarkTheme);\n}\n\n//# sourceURL=webpack://testcalculator/./script.js?',
                );

                /***/
            },

        /******/
    };
    /************************************************************************/
    /******/
    /******/ // startup
    /******/ // Load entry module and return exports
    /******/ // This entry module can't be inlined because the eval devtool is used.
    /******/ var __webpack_exports__ = {};
    /******/ __webpack_modules__["./script.js"]();
    /******/
    /******/
})();
