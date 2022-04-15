
let vyska = prompt("Zadej výšku");
let sirka = prompt("Zadej šířku");
let hloubka = prompt("Zadej hloubku");

let idealniRozmery = [62, 70, 80];

function porovnejPracky() {
    if ((parseFloat(vyska) <= idealniRozmery[0]) && (parseFloat(sirka) <= idealniRozmery[1]) && (parseFloat(hloubka) <= idealniRozmery[2])) {
        document.getElementById('pracka').innerHTML = "Pračka splňuje rozměrové parametry.";

    } else {
        document.getElementById('pracka').innerHTML = "Pračka nesplňuje rozměrové parametry.";
        let zadaneRozmery = [vyska, sirka, hloubka];
        for (let i in zadaneRozmery) {
            if (zadaneRozmery[i] > idealniRozmery[i]) {

                console.log("Rozměr " + zadaneRozmery[i] + " cm je příliš velký.")
            }
        }
    }
};

porovnejPracky();
