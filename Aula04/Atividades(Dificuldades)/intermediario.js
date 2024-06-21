console.log("=====================================================================================================================")
/*Crie um programa que leia três números e determine qual é o maior.*/ 
num1 = 10
num2 = 5
num3 = 30

if (num1 > num2 && num1 > num3){
    console.log(num1, "é o maior")
} else if (num2 > num1 && num2 > num3){
    console.log(num2, "é o maior")
} else {
    console.log(num3, "é o maior")
}
console.log("=====================================================================================================================")

/*Escreva um programa que verifique se uma letra fornecida pelo usuário é uma vogal ou uma consoante.*/
letra = "a"

if (letra == "a" || "e" || "i" || "o" || "u"){
    console.log("Essa letra é uma vogal")
} else {
    console.log("Essa letra é uma consoante")
}
console.log("=====================================================================================================================")

/*Faça um programa que leia a nota de um aluno e informe se ele está aprovado (nota maior ou igual a 7), em recuperação (nota entre 5 e 7) ou reprovado (nota menor que 5).*/
nota = 10

if (nota > 7){
    console.log("Aprovado")
} else if (nota >= 5 <= 7){
    console.log("Recuperação")
} else {
    console.log("Reprovado")
}
console.log("=====================================================================================================================")

/*Escreva um programa que leia dois números e uma operação (adição, subtração, multiplicação, divisão) e realize a operação entre os dois números.*/
numero1 = 10
numero2 = 2
operacao = "/"

if (operacao == "+" || "-" || "*" || "/"){
    if(operacao == "+"){
        console.log(numero1, "+", numero2, " = ", numero1 + numero2)
    }
    if(operacao == "-"){
        console.log(numero1, "-", numero2, " = ", numero1 - numero2)
    }
    if(operacao == "*"){
        console.log(numero1, "x", numero2, " = ", numero1 * numero2)
    }
    if(operacao == "/"){
        console.log(numero1, "/", numero2, " = ", numero1 / numero2)
    }
}
console.log("=====================================================================================================================")

/*Crie um programa que determine se um ano é bissexto.*/
ano = 2024

if (ano % 4 == 0){
    if (ano % 100 == 0){
        if (ano % 400 == 0){
            console.log("Esse ano é bissexto")
        } else {
            console.log("Esse ano não é bissexto")
        }
    } else {
        console.log("Esse ano é bissexto")
    }
} else {
    console.log("Esse ano não é bissexto")
}
console.log("=====================================================================================================================")

/*Escreva um programa para verificar se o número fornecido pelo usuário é primo.*/
numPrimo = 4
limite = (numPrimo / 2) || 0
divisores = 0

if (numPrimo <= 1) {
    console.log("Esse número não é primo");
} else {
    for (var i = 2; i <= limite; i++) {
        if (numPrimo % i == 0) {
            divisores++
        }
    }

    if (divisores > 0) {
        console.log("Esse número não é primo");
    } else {
        console.log("Esse número é primo");
    }
}
console.log("=====================================================================================================================")

/*Escreva um programa que leia o peso e a altura de uma pessoa e calcule seu IMC, informando se está abaixo do peso, no peso normal, acima do peso ou obeso.*/
peso = 71
altura = 1.82
imc = peso / (altura * altura)

if (imc < 18.5) {
    mensagem = "Abaixo do peso";
} else if (imc >= 18.5 && imc < 25) {
    mensagem = "Peso normal";
} else if (imc >= 25 && imc < 30) {
    mensagem = "Acima do peso";
} else {
    mensagem = "Obeso";
}

console.log(mensagem)
console.log("=====================================================================================================================")

/*Escreva um programa que leia um mês do ano e informe quantos dias ele tem.*/
mes = "junho"
meses = {
    "janeiro": 31,
    "fevereiro": 28,
    "março": 31,
    "abril": 30,
    "maio": 31,
    "junho": 30,
    "julho": 31,
    "agosto": 31,
    "setembro": 30,
    "outubro": 31,
    "novembro": 30,
    "dezembro": 31
}
dias = meses[mes]

if (dias != undefined) {
    console.log("O mês de", mes, "tem", dias, "dias")
} else {
    console.log("Mês inválido")
}
console.log("=====================================================================================================================")

/*Faça um programa que verifique se um triângulo é equilátero, isósceles ou escaleno com base nos comprimentos de seus lados.*/
lado1 = 10
lado2 = 10
lado3 = 10

if (lado1 == lado2 && lado2 == lado3){
    console.log("O triângulo é equilátero")
} else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
    console.log("O triângulo é isósceles")
} else {
    console.log("O triângulo é escaleno")
}
console.log("=====================================================================================================================")

/*Crie um programa que simule um jogo de adivinhação, onde o usuário tem que adivinhar um número entre 1 e 100 gerado aleatoriamente pelo programa, com dicas de "maior" ou "menor" após cada palpite.*/
let numeroAleatorio = Math.floor(Math.random() * 100) + 1
let tentativas = 0
console.log(numeroAleatorio)

while (true) {
    let palpite = 10 

    tentativas++

    if (palpite == numeroAleatorio) {
        console.log("Parabéns! Você acertou o número em", tentativas, "tentativa(s).")
        break
    } else if (palpite < numeroAleatorio) {
        console.log("O número é maior. Tente novamente.")
    } else {
        console.log("O número é menor. Tente novamente.")
    } break
}
console.log("=====================================================================================================================")