fetchTheme("defaulr").then(applyTheme);

const display = document.querySelector(".display > .digit");
display.textContent = 0;

const operatorDisplay = document.querySelector(".display > .operator");
operatorDisplay.textContent = "";


const ac = document.querySelector(".ac");
ac.addEventListener("click", (e) => {
    display.textContent = 0;
    operatorDisplay = "";
});