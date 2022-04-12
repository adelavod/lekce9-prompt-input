
let vyska = prompt("Zadej výšku");
let sirka = prompt("Zadej šířku");
let hloubka = prompt("Zadej hloubku");

function porovnejPracky() {
    if ((parseFloat(vyska) <= 70) && (parseFloat(sirka) <= 62) && (parseFloat(hloubka) <= 80)) {
        document.getElementById('pracka').innerHTML ="Pračka splňuje rozměrové parametry.";
        
    } else {document.getElementById('pracka').innerHTML ="Pračka nesplňuje rozměrové parametry.";

}};

porovnejPracky();
