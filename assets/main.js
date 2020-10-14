// Creare un array con un insieme di indirizzi email.
var list_email = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com", "minnie@gmail.com", "mickey@gmail.com"];
console.log(list_email);

// Chiedere all'utente il suo indirizzo email e verificare se è nella lista (tramite un ciclo for).

var tuo_email = prompt("Inserire il tuo email");
console.log("hai inserito " + tuo_email);
for (var i = 0; i < list_email.length; i++) {
    // console.log(list_email[i]);
    if (tuo_email == list_email[i]) {
        console.log("complimenti sei nella lista");
        document.getElementById('welcome').innerHTML = "Welcome"
    }
    else {
        console.log("Sorry, non sei nella lista");
        document.getElementById('welcome').innerHTML = "Sorry you are not in"
    }
}




// Comunicare quindi un messaggio appropriato (sei in lista/non sei in lista)
