fetchTheme("salad").then(applyTheme);

const display = document.querySelector(".display > .digit");
display.textContent = 0;

const operatorDisplay = document.querySelector(".display > .operator");
operatorDisplay.textContent = "";


const ac = document.querySelector(".ac");
ac.addEventListener("click", (e) => {
    display.textContent = 0;
    operatorDisplay.textContent = "";
});

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", updateDisplayScreen);
});


function updateDisplayScreen(e){
    const number = e.target;
    let displayNumber = display.textContent;
    displayNumber += number.textContent;
    displayNumber = +displayNumber;

    if (displayNumber.toString().length <= 12) {
        display.textContent = displayNumber;
    }
}

