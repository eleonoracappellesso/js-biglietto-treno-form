"use strict";
console.clear();

const priceKm = 0.21;
const juniorDiscount = 20;
const seniorDiscount = 40;
const junior = 17;
const senior = 65;

const km = document.getElementById('totKm');
const age = document.getElementById('age');
const passengerName = document.getElementById('nameLastname');
const result = document.getElementById('finalPrice');
const myTicket = document.getElementById('ticket');

const totKm = parseInt(km.value);
console.log(totKm);
const passengerAge = parseInt(age.value);
console.log(passengerAge);

const totPrice = totKm * priceKm;
console.log(totPrice);

let message;
let finalPrice;

myTicket.addEventListener("submit", function (event) {

    if (passengerAge <= junior) {
        finalPrice = totPrice - ((totPrice * juniorDiscount) / 100);
        message = "E' stato applicato uno sconto del 20% riservato ai minorenni. Il costo finale del tuo biglietto è di €" + finalPrice.toFixed(2);
    } else if (passengerAge >= senior) {
        finalPrice = totPrice - ((totPrice * seniorDiscount) / 100);
        message = "E' stato applicato uno sconto del 40% riservato agli over 65. Il costo finale del tuo biglietto è di €" + finalPrice.toFixed(2);
    } else {
        message = "Il costo del tuo biglietto è di €" + totPrice.toFixed(2);
    }
    event.preventDefault();
    result.innerHTML = message;
});

