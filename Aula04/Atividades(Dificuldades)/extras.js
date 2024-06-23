console.log("=====================================================================================================================")
//Escreva um programa que converta uma temperatura de Celsius para Fahrenheit e vice-versa.
celsius = 0
fahrenheit = 32
fahrenheit = (celsius * 9 / 5) + 32
celsius = (fahrenheit - 32) * 5 / 9

console.log(celsius, "°C é igual a", fahrenheit, "°F")
console.log(fahrenheit, "°F é igual a", celsius, "°C")
console.log("=====================================================================================================================")

//Crie um programa que leia três números e os exiba em ordem crescente.
numero1 = 1
numero2 = 12
numero3 = 123
var menor 
var meio 
var maior

if (numero1 <= numero2 && numero1 <= numero3){
    menor = numero1
    if (numero2 <= numero3) {
        meio = numero2
        maior = numero3
    } else {
        meio = numero3
        maior = numero2
    }
} else if (numero2 <= numero1 && numero2 <= numero3){
    menor = numero2
    if (numero1 <= numero3){
        meio = numero1
        maior = numero3
    } else {
        meio = numero3
        maior = numero1
    }
} else {
    menor = numero3;
    if (numero1 <= numero2){
        meio = numero1
        maior = numero2
    } else {
        meio = numero2
        maior = numero1
    }
}

console.log("Números em ordem crescente: " + menor + ", " + meio + ", " + maior)
console.log("=====================================================================================================================")

//Escreva um programa que verifique se um número fornecido pelo usuário é um múltiplo de outro número fornecido pelo usuário.