// Chiedere all'utente il numero di chilometri che vuole percorrere
var kmPercorsi, userAge, kmPrice, prezzo, scontoVenti, scontoVecchi;

kmPercorsi = Number(prompt("Quanti km devi percorrere?"));

//E l'età del passeggero.
userAge = Number(prompt("Quanti anni hai?"));

// Calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
kmPrice = 0.21;

// va applicato uno sconto del 20% per i minorenni
scontoVenti = kmPercorsi * kmPrice * 0.2;

// va applicato uno sconto del 40% per gli over 65
scontoVecchi = kmPercorsi * kmPrice * 0.4;

//Siamo gentili e arrotondiamo per difetto ;)

if (userAge >= 18 && userAge < 65) {
  prezzo = Math.floor(kmPercorsi * kmPrice);
} else if (userAge < 18) {
  prezzo = Math.floor(kmPercorsi * kmPrice - scontoVenti);
} else if (userAge >= 65) {
  prezzo = Math.floor(kmPercorsi * kmPrice - scontoVecchi);
}

console.log(kmPrice, kmPercorsi, userAge, prezzo, scontoVenti, scontoVecchi);
document.getElementById("price").innerHTML = "Il tuo biglietto costa: " + prezzo + "€, arrivederci e buon viaggio!";
