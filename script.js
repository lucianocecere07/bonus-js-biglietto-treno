let km = prompt("Inserire quanti chilometri da percorrere");
let eta = prompt("Inserire età del passeggero");

let prezzo = km * 0.21
let prezzoDecimali = prezzo.toFixed(2)

let scontoMinore = prezzo * 20 / 100
let scontoOver = prezzo * 40 / 100

console.log(
    `
    ------Dati del passeggero------
        Chilometri da percorrere: ${km}
        Età del passeggero: ${eta}
    ------Prezzo pieno------
        Prezzo pieno: ${prezzoDecimali} €
    ------Totale (con sconto dove disponibile)------
    `
);

if(eta < 18){
    minore = prezzo - scontoMinore
    minoreDecimali = minore.toFixed(2)
    console.log ("Totale (sconto minorenne): " + minoreDecimali + " €");
} else if(eta >= 65){
    over = prezzo - scontoOver
    overDecimali = over.toFixed(2)
    console.log ("Totale (sconto over 65): " + overDecimali + " €");
} else{
    console.log ("Totale: " + prezzoDecimali + " €");
}