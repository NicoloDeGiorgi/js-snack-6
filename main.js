'use strict';

// il computer dovrà generare un numero random da 0 a 10
const computerNumber = Math.floor(Math.random() * 11);

// creare prompt per utente, far inserire un numero
const userNumber = Number(prompt('Inserisci un numero'));

if (!isNaN(userNumber)) {

    // se il numero è uguale a quello del computer stamapre "Hai vinto"
    if (computerNumber === userNumber) {
        console.log('Hai vinto');
    } else {
        //altrimenti l'utente perde
        console.log('Riprova sarai più fortunato ;)');
    }
    //stampo tutto in console
    console.log(`I numeri sono: ${computerNumber} e ${userNumber}`);
} else {
    console.log('Non hai inserito un numero');
}