function aggiungiSimbolo(elemento){
    //let simbolo = elemento.textContent;
    let simbolo = elemento.getAttribute('data-simbolo');
    let display = document.querySelector('.display');
    console.log(simbolo);
    display.textContent += simbolo;
}

function totale(){
    let display = document.querySelector('.display');
    display.textContent = eval(display.textContent);
    console.log(display.textContent);
}


const button = document.getElementById('btn');
console.log(button);



const ac_key = document.querySelector(".clear");

ac_key.addEventListener("click", clear_display);

function clear_display(e) {
    console.log(e.target.value);
    document.querySelector(".display").innerText = "";
}