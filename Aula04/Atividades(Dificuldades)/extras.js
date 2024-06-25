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
num1 = 72
num2 = 6

if (num1 % num2 == 0){
    console.log(num1, "é múltiplo de", num2)
} else {
    console.log(num1, "não é múltiplo de", num2)
}
console.log("=====================================================================================================================")

//Faça um programa que leia o nome de um aluno e suas três notas, calcule a média e informe se ele está aprovado (média maior ou igual a 7) ou reprovado.
nota1 = 10
nota2 = 10
nota3 = 4
media = (nota1 + nota2 + nota3) / 3

if (media >= 7){
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}
console.log("=====================================================================================================================")

//Escreva um programa que leia o salário de um funcionário e aplique um aumento de acordo com a seguinte regra: salários menores que R$1000 recebem 20% de aumento, entre R$1000 e R$2000 recebem 15%, e acima de R$2000 recebem 10%.
salario = 15000
novoSalario = salario * 0.20

if (salario < 1000){
    console.log("Com um salário de R$", salario, "teve um aumento de 20% ficando com um novo salário de R$", novoSalario + salario) 
} else if (salario <= 2000){
    console.log("Com um salário de R$", salario, "teve um aumento de 20% ficando com um novo salário de R$", novoSalario + salario)
} else {
    console.log("Com um salário de R$", salario, "teve um aumento de 20% ficando com um novo salário de R$", novoSalario + salario)
}
console.log("=====================================================================================================================")