/* function sectiCisla(a,b) {
let a = 1;
let b = 2;
}; */

function vypocitej(){
    let a = parseFloat(document.querySelector('input[name="a"]').value);
    let b = parseFloat(document.querySelector('input[name="b"]').value);

    console.log(a+b);
    alert (`Jmenuješ se ${a} a je ti ${b}`);
};