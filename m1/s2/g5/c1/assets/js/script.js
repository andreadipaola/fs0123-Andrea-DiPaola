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

function clear(){
    let display = document.querySelector('.display');
    display.textContent = "";
    console.log(display.textContent);

}