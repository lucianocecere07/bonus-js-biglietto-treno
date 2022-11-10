let Totale = document.getElementById("totale");

Totale.addEventListener('click', function(){

    let km = document.getElementById("input-km").value;
    let eta = document.getElementById("input-eta").value;

    let prezzo = km * 0.21
    let prezzoDecimali = prezzo.toFixed(2)

    let scontoMinore = prezzo * 20 / 100
    let scontoOver = prezzo * 40 / 100

    document.getElementById("totaleSconto").innerHTML = prezzoDecimali;

    console.log(
        `
        ------Dati del passeggero------
            Chilometri del percorso: ${km}
            Età del passeggero: ${eta}
        ------Prezzo del biglietto------
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
});
