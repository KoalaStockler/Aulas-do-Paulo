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
numPrimo = 5
limite = (numPrimo / 2) || 0
if (numPrimo <= 1){
    console.log("Esse número é primo")
} else {
    for (i = 2; i <= limite; i++){
        if (numPrimo % i == 0) {
            console.log("Esse número não é primo")
            break
        }
    }
}