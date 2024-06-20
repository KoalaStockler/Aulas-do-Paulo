/*Crie um programa que converta uma temperatura de Celsius para Fahrenheit. A fórmula de conversão é: F = C x (9/5) + 32*/

function celsiusParaFahrenheit(celsius) {
    var fahrenheit = celsius * (9/5) + 32
    return fahrenheit
}

var temperaturaCelsius = 0
var temperaturaFahrenheit = celsiusParaFahrenheit(temperaturaCelsius)
console.log(temperaturaCelsius + " Celsius é igual a " + temperaturaFahrenheit + " Fahrenheit.")