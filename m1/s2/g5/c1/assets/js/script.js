const display = document.querySelector("#display");
const form = document.getElementById("form");
const operands_keys = document.querySelectorAll("button[data-type=operand]");
const operators_keys = document.querySelectorAll("button[data-type=operator]");

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

let isOperator = false;
let expression = [];

//TASTI NUMERICI + PUNTO DECIMALE
operands_keys.forEach((key) => {
    key.addEventListener("click", (e) => {
        if (display.value == "0") {
            display.value = e.target.value; //Inserisco il valore del tasto cliccato nel display
        } else if (isOperator) {
            isOperator = false;
            display.value = e.target.value; //Se precedentemento ho cliccato su un operatore, lo resetto e inserisco il nuovo valore numerico
        } else if (display.value.includes(".")) {
            display.value = display.value + "" + e.target.value.replace(".", ""); //sostuituisco ulteriori punti decimali con una stringa vuota
        } else {
            display.value = display.value + "" + e.target.value; //vado a concatenare l'attuale valore numerico col precedente
        }
    });
});


//TASTI OPERATORI
operators_keys.forEach((key) => {
    key.addEventListener("click", (e) => {
        // e.currentTarget.classList.add("active");

        switch (e.target.value) {
            case "?":
                break;
            case "%":
                display.value = parseFloat(display.value) / 100;
                break;
            case "invert":
                display.value = parseFloat(display.value) * -1;
                break;
            case "=":
                expression.push(display.value);
                display.value = eval(expression.join(""));
                expression = [];
                break;
            default:
                let last_item = expression[expression.length - 1];
                if (["/", "*", "+", "-"].includes(last_item) && isOperator) {
                    expression.pop();
                    expression.push(e.target.value);
                } else {
                    expression.push(display.value);
                    expression.push(e.target.value);
                }
                isOperator = true;
                break;
        }
    });
});