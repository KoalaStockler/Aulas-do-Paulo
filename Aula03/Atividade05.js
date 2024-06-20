/*Crie um programa que calcule o preço final de um produto após um desconto de 10%, a variável deve receber o valor total da venda*/

function calcularPrecoFinal(valorTotal) {
    var desconto = valorTotal * 0.10

    var precoFinal = valorTotal - desconto

    return precoFinal
}

var valorTotalVenda = 100
var precoFinal = calcularPrecoFinal(valorTotalVenda)
console.log("O preço final após o desconto de 10% é: " + precoFinal)