// Creare un array con un insieme di indirizzi email.
var list_email = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com", "minnie@gmail.com", "mickey@gmail.com"];
console.log(list_email);

var access =  false;

// Chiedere all'utente il suo indirizzo email e verificare se è nella lista (tramite un ciclo for).

var tuo_email = prompt("Inserire il tuo email");
console.log("hai inserito " + tuo_email);
for (var i = 0; i < list_email.length; i++) {
    // console.log(list_email[i]);
    if (tuo_email == list_email[i]) {
        access = true;
    }
}

// Comunicare quindi un messaggio appropriato (sei in lista/non sei in lista)
if (access) {
    console.log("welcome");
    document.getElementById('welcome').innerHTML = "welcome";

}
else {
    console.log("sorry you're not in");
    document.getElementById('welcome').innerHTML = "sorry you're not in"
}
