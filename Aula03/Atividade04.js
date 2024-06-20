/*Faça um programa que converta metros para centímetros. A variavel deve receber o valor em metros*/ 

function metrosParaCentimetros(metros) {
    var centimetros = metros * 100
    return centimetros
}

var metros = 5
var resultado = metrosParaCentimetros(metros)
console.log(metros + " metros é igual a " + resultado + " centímetros.")