let number1 = 0;
let operator = '';
let number2 = 0;
let currentInput = '';

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return "Cannot divide by zero";
    return a / b;
}

function operate(operator, a, b) {
    if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return substract(a, b);
    } else if (operator === '*') {
        return multiply(a, b);
    } else if (operator === '/') {
        return divide(a, b);
    } else {
        return "Invalid operator";
    }
}

const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
const button3 = document.querySelector(".btn3");
const button4 = document.querySelector(".btn4");
const button5 = document.querySelector(".btn5");
const button6 = document.querySelector(".btn6");
const button7 = document.querySelector(".btn7");
const button8 = document.querySelector(".btn8");
const button9 = document.querySelector(".btn9");

const equalOp = document.querySelector(".equal");
const addOp = document.querySelector(".add");
const substractOp = document.querySelector(".substract");
const multiplyOp = document.querySelector(".multiply");
const divideOp = document.querySelector(".divide");

button1.addEventListener('click', () => inputNumber(button1.textContent));
button2.addEventListener('click', () => inputNumber(button2.textContent));
button3.addEventListener('click', () => inputNumber(button3.textContent));
button4.addEventListener('click', () => inputNumber(button4.textContent));
button5.addEventListener('click', () => inputNumber(button5.textContent));
button6.addEventListener('click', () => inputNumber(button6.textContent));
button7.addEventListener('click', () => inputNumber(button7.textContent));
button8.addEventListener('click', () => inputNumber(button8.textContent));
button9.addEventListener('click', () => inputNumber(button9.textContent));

equalOp.addEventListener('click', calculateResult);
addOp.addEventListener('click', () => getOperator(equalOp.textContent));
substractOp.addEventListener('click', () => getOperator(equalOp.textContent));
multiplyOp.addEventListener('click', () => getOperator(equalOp.textContent));
divideOp.addEventListener('click', () => getOperator(equalOp.textContent));

function updateDisplay(value) {
    const display = document.querySelector(".current-screen");
    display.textContent = value;
}

function inputNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

function getOperator(selectedOperator) {
    if (currentInput === '') return;

    number1 = parseFloat(currentInput);
    operator = selectedOperator;
    currentInput = '';
}

function calculateResult() {
    if (currentInput === '' || selectedOperator === '') return;

    number2 = parseFloat(currentInput);
    const result = operate(operator, number1, number2);

    updateDisplay(result);
    currentInput = result.toString();
    operator = '';
}