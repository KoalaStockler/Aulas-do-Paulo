/*Escreva um programa que receba duas variáveis de números inteiros e realize as quatro operações básicas (adição, subtração, multiplicação e divisão). 
Mostre os resultados*/

function operacoesBasicas(numero1, numero2) {
    var adicao = numero1 + numero2
    
    var subtracao = numero1 - numero2
    
    var multiplicacao = numero1 * numero2
    
    var divisao = numero1 / numero2
    
    return {
        adicao: adicao,
        subtracao: subtracao,
        multiplicacao: multiplicacao,
        divisao: divisao
    }
}

var num1 = 10
var num2 = 20

var resultados = operacoesBasicas(num1, num2)
console.log("Adição:", resultados.adicao)
console.log("Subtração:", resultados.subtracao)
console.log("Multiplicação:", resultados.multiplicacao)
console.log("Divisão:", resultados.divisao)