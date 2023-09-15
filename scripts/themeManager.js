function fetchTheme(name) {
    return fetch(`./themes/${name}.json`)
        .then(response => response.json());
}

function applyTheme(theme) {
    const body = document.querySelector("body");
    body.style.color = theme["body-color"];
    body.style.backgroundColor = theme["body-background-color"];

    const canvas = document.querySelector(".canvas");
    canvas.style.backgroundColor = theme["canvas-background-color"];
    canvas.style.boxShadow = theme["canvas-box-shadow"];
    canvas.style.borderColor = theme["canvas-border-color"];

    const solars = document.querySelectorAll(".solar");
    solars.forEach(solar => solar.style.borderColor = theme["solar-border-color"]);

    const brand = document.querySelector(".brand");
    brand.style.color = theme["brand-font-color"];

    const displays = document.querySelectorAll(".display");
    displays.forEach(display => {
        display.style.backgroundColor = theme["display-background-color"];
        display.style.color = theme["display-color"];
        display.style.borderColor = theme["display-border-color"];
        display.style.boxShadow = theme["display-box-shadow"];
    });

    const digits = document.querySelectorAll(".digit");
    digits.forEach(digit => digit.style.color = theme["digit-color"]);

    const operators = document.querySelectorAll(".operator");
    operators.forEach(operator => operator.style.color = theme["operator-color"]);

    const operations = document.querySelectorAll(".operation");
    operations.forEach(operation => {
        operation.style.backgroundColor = theme["operation-background-color"];
        operation.style.boxShadow = theme["operation-box-shadow"];
        operation.style.borderColor = theme["operation-border-color"];
    });

    const buttons = document.querySelector(".buttons");
    buttons.style.boxShadow = theme["buttons-box-shadow"];
    buttons.style.borderColor = theme["buttons-border-color"];

    const btns = document.querySelectorAll(".btn");
    btns.forEach(button => {
        button.style.backgroundColor = theme["btn-background-color"];
        button.addEventListener("mouseover", () => {
            button.style.boxShadow = theme["btn-hover-box-shadow"];
            button.style.backgroundColor = theme["btn-hover-background-color"];
            button.style.color = theme["btn-hover-color"];
        });
        button.addEventListener("mouseout", () => {
            button.style.boxShadow = "";
            button.style.backgroundColor = theme["btn-background-color"];
            button.style.color = "";
        });
    });
}
