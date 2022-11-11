let totale = document.getElementById("totale");

totale.addEventListener('click', function () {

    let km = document.getElementById("input-km").value;
    let eta = document.getElementById("input-eta").value;

    let prezzo = km * 0.21;
    let prezzoDecimali = prezzo.toFixed(2);

    let scontoMinore = prezzo * 20 / 100;
    let scontoOver = prezzo * 40 / 100;

    let decimali = 0;

    if (eta < 18) {
        minore = prezzo - scontoMinore;
        decimali = minore.toFixed(2);
        document.getElementById("totaleSconto").innerHTML = decimali + " € ";

    } else if (eta >= 65) {
        over = prezzo - scontoOver;
        decimali = over.toFixed(2);
        document.getElementById("totaleSconto").innerHTML = decimali + " € ";
    } else {
        decimali = prezzoDecimali;
        document.getElementById("totaleSconto").innerHTML = decimali + " € ";
    }

    console.log(
        `
        ------Dati del passeggero------
            Chilometri del percorso: ${km}
            Età del passeggero: ${eta}
        ------Prezzo del biglietto------
            Prezzo pieno: ${prezzoDecimali} €
        ------Totale (con sconto dove disponibile)------
            Totale (con sconto): ${decimali} €
        `
    );
});