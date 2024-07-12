/*1. Chiedere all'utente dove deve andare (i chilometri da fare)*/

const TravelStart = prompt('Quanti km devi percorrere?');
console.log('km', TravelStart, typeof TravelStart);
const NumberKm = parseInt(TravelStart);
console.log('NumberKm', NumberKm, typeof NumberKm);

/*2. Chiedere l'età del passeggero*/
const age = prompt('Quanti anni hai?');
console.log('age', age, typeof age);
const NumberAge = parseInt(age);
console.log('NumberAge', NumberAge, typeof NumberAge);

/*3. Calcolo il prezzo base del biglietto*/
if (age < 18){
    const price = NumberKm * 0.21;
    console.log('price', price, typeof price);

    const discount = (price / 100) * 20;
    console.log('discount', discount, typeof discount);

    const finalprice = price - discount;

    alert('[RIDOTTO MINORENNE] Il prezzo del biglietto è: €' + price.toFixed(2));

}
else if (age > 65){
    const price = NumberKm * 0.21;
    console.log('price', price, typeof price);

    const discount = (price / 100) * 40;
    console.log('discount', discount, typeof discount);

    const finalprice = price - discount;

    alert('[RIDOTTO OVER 65] Il prezzo del biglietto è: €' + price.toFixed(2));
}
else {
    const price = NumberKm * 0.21;
    console.log('price', price, typeof price);

    alert('Il prezzo del biglietto è: €' + price.toFixed(2));
}