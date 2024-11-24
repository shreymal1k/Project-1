let currentInput = '';
let operator = null;
let previousInput = '';

// Update the display with the current input value
function updateDisplay() {
    document.getElementById('display').value = currentInput || '0';
}

// Append a number to the current input
function appendNumber(number) {
    currentInput += number.toString();
    updateDisplay();
}

// Set the operator and store the current input as the previous input
function setOperation(op) {
    if (currentInput === '') return; // Avoid setting an operator with an empty input
    if (previousInput !== '') {
        calculateResult(); // If there's already a previous operation, calculate it first
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

// Calculate the result based on the operator and previous input
function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Cannot divide by zero!");
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    previousInput = '';
    updateDisplay();
}

// Clear the input display
function clearDisplay() {
    currentInput = '';
    operator = null;
    previousInput = '';
    updateDisplay();
}
