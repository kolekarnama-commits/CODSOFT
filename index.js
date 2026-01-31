let display = document.querySelector(".input");
let buttons = document.querySelectorAll(".button");

let expression = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let value = button.innerText;

        if (value === "C") {
            expression = "";
            display.value = "";
        }
        else if (value === "=") {
            try {
                expression = eval(expression).toString();
                display.value = expression;
            } catch {
                display.value = "Error";
                expression = "";
            }
        }
        else if (value === "+/-") {
            expression = (-eval(expression)).toString();
            display.value = expression;
        }
        else {
            expression += value;
            display.value = expression;
        }
    });
});
