let Totale = document.getElementById("totale");

Totale.addEventListener('click', function () {

    let km = document.getElementById("input-km").value;
    let eta = document.getElementById("input-eta").value;

    let prezzo = km * 0.21
    let prezzoDecimali = prezzo.toFixed(2)

    let scontoMinore = prezzo * 20 / 100
    let scontoOver = prezzo * 40 / 100

    document.getElementById("totaleSconto").innerHTML = prezzoDecimali + " € ";

    if (eta < 18) {
        minore = prezzo - scontoMinore
        Decimali = minore.toFixed(2)
    } else if (eta >= 65) {
        over = prezzo - scontoOver
        Decimali = over.toFixed(2)
    } else {
        Decimali = (prezzoDecimali - 0).toFixed(2)
    }

    console.log(
        `
        ------Dati del passeggero------
            Chilometri del percorso: ${km}
            Età del passeggero: ${eta}
        ------Prezzo del biglietto------
            Prezzo pieno: ${prezzoDecimali} €
        ------Totale (con sconto dove disponibile)------
            Totale (con sconto): ${Decimali} €
        `
    );
});