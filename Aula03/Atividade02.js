/*Crie um programa que converta uma temperatura de Fahrenheit  para Celsius. A fórmula de conversão é: C = (F - 32 ) / 1,8*/ 

function fahrenheitParaCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) / 1.8
    return celsius
}

var temperaturaFahrenheit = 68
var temperaturaCelsius = fahrenheitParaCelsius(temperaturaFahrenheit)
console.log(temperaturaFahrenheit + " Fahrenheit é igual a " + temperaturaCelsius.toFixed(2) + " Celsius.")