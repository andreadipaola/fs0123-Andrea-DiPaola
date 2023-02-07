function greetings() {
    let person = prompt("Please enter your name", "Inserisci il tuo nome");
    if (person != null) {
        document.getElementById("greeting").innerHTML =
            "Ciao " + person + "! Come stai?";
    }
}