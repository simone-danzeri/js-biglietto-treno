// Chiedere numero chilometri da percorrere
let userKm = parseInt(prompt('Ciao! Quanti km dovrai fare?'));
console.log(userKm);

// Chiedere età passeggero
let userAge = parseInt(prompt('Quanti anni hai?'));
console.log(userAge);

// Calcolare prezzo del biglietto in base a quanti chilometri dovrà fare (arrotondato a 2 decimali)
const ticketFare = 0.21;

let ticketPrice = ticketFare * userKm;

console.log(ticketPrice);

// Calcolare eventuali sconti (arrotondato a 2 decimali)
let underageDiscount;
let elderlyDiscount;

if (userAge < 18) {
    underageDiscount = ticketPrice * 20 /100;
} else if (userAge > 65) {
    elderlyDiscount = ticketPrice * 40 / 100;
}

console.log(underageDiscount);
console.log(elderlyDiscount);

// Applicare eventuali sconti (arrotondato a 2 decimali)
let underagePrice;
let elderlyPrice;

underagePrice = (ticketPrice - underageDiscount).toFixed(2);
elderlyPrice = (ticketPrice - elderlyDiscount).toFixed(2);

console.log(underagePrice);
console.log(elderlyPrice);

// Stampare output prezzo finale
let finalPrice

if (userAge < 18) {

    finalPrice = 'Il tuo biglietto costa: ' + underagePrice;

} else if (userAge > 65) {

    finalPrice = 'Il tuo biglietto costa: ' + elderlyPrice;

} else {

    finalPrice = 'Il tuo biglietto costa: ' + ticketPrice;

}

console.log(finalPrice);

// Effettiva stampa

document.getElementById('user-message').innerHTML = finalPrice;