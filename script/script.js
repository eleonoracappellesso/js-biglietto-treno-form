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
const ticketDetails = document.getElementById('ticketDetails')
const resetButton = document.getElementById('resetButton');

let message;
let finalPrice;

// myTicket.addEventListener("submit", function (event) {

//     const totKm = parseInt(km.value);
//     console.log(totKm);
//     const passengerAge = parseInt(age.value);
//     console.log(passengerAge);

//     const totPrice = totKm * priceKm;
//     console.log(totPrice);

//     if (passengerAge <= junior) {
//         finalPrice = totPrice - ((totPrice * juniorDiscount) / 100);
//         message = "E' stato applicato uno sconto del 20% riservato ai minorenni. Il costo finale del tuo biglietto è di €" + finalPrice.toFixed(2);
//     } else if (passengerAge >= senior) {
//         finalPrice = totPrice - ((totPrice * seniorDiscount) / 100);
//         message = "E' stato applicato uno sconto del 40% riservato agli over 65. Il costo finale del tuo biglietto è di €" + finalPrice.toFixed(2);
//     } else {
//         message = "Il costo del tuo biglietto è di €" + totPrice.toFixed(2);
//     }
//     event.preventDefault();
//     result.innerHTML = message;
// });


myTicket.addEventListener("submit", function (event) {
    ticketDetails.classList.remove('d-none');

    const ticketNameLastname = document.querySelector('.nameLastname');
    const ticketAge = document.querySelector('.selectedAge');
    const ticketDistance = document.querySelector('.distance');
    const ticketType = document.querySelector('.ticketType');
    const ticketDiscount = document.querySelector('.discount');
    const ticketPrice = document.querySelector('.totalPrice');

    const totKm = parseInt(km.value);
    const passengerAge = parseInt(age.value);
    const ticketPassengerName = passengerName.value; 

    const totPrice = totKm * priceKm;
    console.log(totPrice);

    if (passengerAge <= junior) {
        finalPrice = totPrice - ((totPrice * juniorDiscount) / 100);
        ticketNameLastname.innerHTML = ticketPassengerName;
        ticketAge.innerHTML = passengerAge;
        ticketDistance.innerHTML = totKm;
        ticketType.innerHTML = "Biglietto JUNIOR";
        ticketDiscount.innerHTML = juniorDiscount + "%";
        ticketPrice.innerHTML = '€' + finalPrice.toFixed(2);

    } else if (passengerAge >= senior) {
        finalPrice = totPrice - ((totPrice * seniorDiscount) / 100);
        ticketType.innerHTML = "Biglietto SENIOR";
        ticketDiscount.innerHTML = seniorDiscount + "%";
        ticketPrice.innerHTML = '€' + finalPrice.toFixed(2);

    } else {
        ticketType.innerHTML = "Biglietto STANDARD";
        ticketDiscount.innerHTML = "Nessuno sconto applicato";
        ticketPrice.innerHTML = '€' + finalPrice.toFixed(2);
    }
    ticketNameLastname.innerHTML = ticketPassengerName;
    ticketAge.innerHTML = passengerAge;
    ticketDistance.innerHTML = totKm;
    event.preventDefault();
});

resetButton.addEventListener('click', function(event){
    ticketDetails.classList.add('d-none');
});