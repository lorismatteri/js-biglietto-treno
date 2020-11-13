// Chiedere all'utente il numero di chilometri che vuole percorrere
var kmPercorsi, userAge, prezzo;

kmPercorsi = Number(prompt("Quanti km devi percorrere?"));

//E l'età del passeggero.
userAge = Number(prompt("Quanti anni hai?"));

// Calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65
if (x = 0.21) {
  prezzo = kmPercorsi * x;
}


document.getElementById("price").innerHTML = prezzo;
