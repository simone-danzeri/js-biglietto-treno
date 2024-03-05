// Chiedere numero chilometri da percorrere
let userKm = parseInt(prompt('Ciao! Quanti km dovrai fare?'));
console.log(userKm);

// Chiedere età passeggero
let userAge = parseInt(prompt('Quanti anni hai?'));
console.log(userAge);

// Calcolare prezzo del biglietto in base a quanti chilometri dovrà fare
const ticketFare = 0.21;

let ticketPrice = ticketFare * userKm;

console.log(ticketPrice);
// Confrontare età passeggero con eventuali sconti
// Calcolare eventuali sconti
// Arrotondare prezzo finale
// Stampare output prezzo finale arrotondato