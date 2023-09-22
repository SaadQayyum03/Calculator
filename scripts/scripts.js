fetchTheme("salad").then(applyTheme);
let themeIndex = 0;
const themes = ["salad", "robotboy", "spiderman", "spongebob", "joker"];
const display = document.querySelector(".display > .digit");
display.textContent = 0;

const operatorDisplay = document.querySelector(".display > .operator");
operatorDisplay.textContent = "";

let runningTotal = 0;
let currentOperator = null;
let clearScreen = false;

const ac = document.querySelector(".ac");
ac.addEventListener("click", () => {
    display.textContent = 0;
    operatorDisplay.textContent = "";
    runningTotal = 0;
    currentOperator = null;
    clearScreen = false;
});

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", updateDisplayScreen);
});

const opp = document.querySelectorAll(".opp");
opp.forEach((op) => {
    op.addEventListener("click", operatorUpdate);
});

const equal = document.querySelector(".eq");
equal.addEventListener("click", performEquals);

document.addEventListener("keydown", updateDisplayWindow);
document.body.addEventListener("click", (e)=>{
    console.log("hello");
    if (e.target === document.body) {
        themeIndex++;
        if (themeIndex >= themes.length){
            themeIndex = 0;
        }
        fetchTheme(themes[themeIndex]).then(applyTheme);
    }
});

function updateDisplayScreen(e) {
    const number = e.target.textContent;

    if (clearScreen || display.textContent === '0') {
        display.textContent = number;
        clearScreen = false;
    } else {
        display.textContent += number;
    }

    if (display.textContent.length > 12) {
        display.textContent = display.textContent.slice(0, 12);
    }
}


function operatorUpdate(e) {
    if (currentOperator) {
        performOperation();
        display.textContent = runningTotal;
    } else {
        runningTotal = Number(display.textContent);
    }

    currentOperator = e.target.textContent;
    operatorDisplay.textContent = currentOperator;
    clearScreen = true;
}

function performOperation() {
    switch (currentOperator) {
        case "+":
            runningTotal += Number(display.textContent);
            break;
        case "-":
            runningTotal -= Number(display.textContent);
            break;
        case "*":
            runningTotal *= Number(display.textContent);
            break;
        case "/":
            runningTotal /= Number(display.textContent);
            break;
    }
}

function performEquals() {
    if (currentOperator) {
        performOperation();
        display.textContent = runningTotal;
        currentOperator = null;
        operatorDisplay.textContent = "";
    }
    clearScreen = true;
}

function updateDisplayWindow(e) {
    const keys = ["Digit0", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9"];
    const numpads = ["Numpad0", "Numpad1", "Numpad2", "Numpad3", "Numpad4", "Numpad5", "Numpad6", "Numpad7", "Numpad8", "Numpad9"];
    const operators = {
        "NumpadAdd": "+",
        "NumpadSubtract": "-",
        "NumpadMultiply": "*",
        "NumpadDivide": "/"
    };
    const pressedKey = e.code;

    if (keys.includes(pressedKey) || numpads.includes(pressedKey)) {
        const number = pressedKey.slice(-1);
        updateDisplayScreen({ target: { textContent: number } });
    } else if (pressedKey === "Backspace") {
        let displayNumber = display.textContent;
        if (displayNumber.length === 1) {
            displayNumber = "0";
        } else {
            displayNumber = displayNumber.slice(0, -1);
        }
        display.textContent = displayNumber;
    } else if (Object.keys(operators).includes(pressedKey)) {
        operatorUpdate({ target: { textContent: operators[pressedKey] } });
    } else if (pressedKey === "Enter" || pressedKey === "NumpadEnter") {
        performEquals();
    }
}
