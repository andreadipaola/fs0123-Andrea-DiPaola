const display = document.querySelector("#display"); //seleziono il display
const form = document.querySelector("form"); //seleziono il form
const operandsKeys = document.querySelectorAll("button[data-type=operand]"); //seleziono tutti gli operandi e li salvo in un array
const operatorsKeys = document.querySelectorAll("button[data-type=operator]"); //seleziono tutti gli operatori e li salvo in un array

// Per evitare che ogni volta che clicchiamo un bottone la pagina venga ricaricata ho aggiunto questo evento 
form.addEventListener("submit", (e) => {
    e.preventDefault();
});

let isOperator = false;
let expression = [];


//OPERANDI: TASTI NUMERICI + PUNTO DECIMALE
operandsKeys.forEach((key) => {
    key.addEventListener("click", (e) => {
        if (display.value == "0") {
            display.value = e.target.value; //prendo il valore dal tasto cliccato e lo inserisco nel display
            console.log(display.value);
        } else if (isOperator) {
            isOperator = false;
            display.value = e.target.value; //se precedntemente ho cliccato su un operatore, setto a false la  variabile isOperator le resetto il display a partire dal nuovo valore inserito
            console.log("isOperator");
            console.log(display.value);
        } else if (display.value.includes(".")) {
            // display.value = display.value + e.target.value.replace(".", "");
            display.value = display.value + "" + e.target.value.replace(".", ""); //sostuituisco ulteriori punti decimali con una stringa vuota
            console.log(display.value);
        } else {
            // display.value = display.value + e.target.value;
            display.value = display.value + "" + e.target.value; //vado a concatenare l'attuale valore numerico col precedente
            console.log(display.value);
        }
    });
});


//OPERATORI: TUTTI GLI ALTRI TASTI
operatorsKeys.forEach((key) => {
    key.addEventListener("click", (e) => {
        // e.currentTarget.classList.add("active");

        switch (e.target.value) {
            case "x2":
                display.value = Math.pow(display.value, 2);
                break;
            case "x3":
                display.value = Math.pow(display.value, 3);
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
                // console.log(display.value);
                // display.value = new Function("return 2 * 2");
                expression = [];
                break;
            case "x2":
                display.value = Math.pow(display.value, 2);
                break;
            case "x3":
                display.value = Math.pow(display.value, 3);
                break;
            // case 'xy':
            //     //dispVal to the y power
            //     processOperator(inputObj);
            //     break;
            case "ex":
                display.value = Math.pow(Math.E, display.value);
                break;
            case "10x":
                display.value = Math.pow(10, display.value);
                break;
            case "1x":
                display.value = 1 / display.value;
                break;
            case "2x":
                display.value = Math.sqrt(display.value);
                break;
            case "3x":
                display.value = Math.cbrt(display.value);
                break;
            case "ln":
                display.value = Math.log(display.value);
                break;
            case "log10":
                display.value = Math.log10(display.value);
                break;
            case "x!":
                display.value = factorialize(display.value);
                break;
            case "sin":
                display.value = Math.sin(display.value);
                break;
            case "cos":
                display.value = Math.cos(display.value);
                break;
            case "tan":
                display.value = Math.tan(display.value);
                break;
            case "e":
                display.value = Math.E;
                break;
            case "sinh":
                display.value = Math.sinh(display.value);
                break;
            case "cosh":
                display.value = Math.cosh(display.value);
                break;
            case "tanh":
                display.value = Math.tanh(display.value);
                break;
            case "pi":
                display.value = Math.PI;
                break;
            case "rand":
                display.value = Math.random();
                break;
            default:
                let last_item = expression[expression.length - 1];
                if (["/", "*", "+", "-"].includes(last_item) && isOperator) {
                    expression.pop();
                    expression.push(e.target.value);
                    console.log(expression);
                } else {
                    expression.push(display.value);
                    console.log(expression);
                    expression.push(e.target.value);
                    console.log(expression);
                }
                isOperator = true;
                break;
        }
    });
});


//funzione per trovare il fattoriale di un numero
function factorialize(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
}
