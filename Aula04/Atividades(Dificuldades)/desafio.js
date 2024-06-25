console.log("=====================================================================================================================")
/*Crie um programa que resolva a equação quadrática (ax² + bx + c = 0) e informe as raízes, se existirem.*/
a = 1
b = -5
c = 6

delta = b * b - 4 * a * c

if (delta > 0) {
    x1 = (-b + Math.sqrt(delta)) / (2 * a)
    x2 = (-b - Math.sqrt(delta)) / (2 * a)
    console.log("As raízes da equação são x1 =", x1, "e x2 =", x2)
} else if (delta == 0) {
    x = -b / (2 * a)
    console.log("A equação possui uma raiz dupla em x =", x)
} else {
    console.log('A equação não possui raízes reais.')
}
console.log("=====================================================================================================================")

/*Escreva um programa que leia um dado (dia, mês, ano) e verifique se é um dado válido.*/
dia = 12
mes = 6
ano = 2006
data = true
bissexto = (ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)

if (mes < 1 || mes > 12){
    data = false
}

if (dia < 1 || dia > 31){
    data = false
} else {
    if (mes == 2) {
        if (bissexto) {
            if (dia > 29) {
                data = false
            }
        } else {
            if (dia > 28) {
                data = false
            }
        }
    } else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
        if (dia > 30) {
            data = false
        }
    }
}

if (data){
    console.log("A data é válida")
} else {
    console.log("A data é inválida")
}
console.log("=====================================================================================================================")

/*Crie um programa que simule uma caixa eletrônica e dê o troco em notas (R$100, R$50, R$20, R$10, R$5, R$2, R$1).*/
valor = 348
nota100 = 0
nota50 = 0
nota20 = 0
nota10 = 0
nota5 = 0
nota2 = 0
nota1 = 0

if (valor >= 100) {
    nota100 = Math.floor(valor / 100)
    valor = valor % 100
} if (valor >= 50) {
    nota50 = Math.floor(valor / 50)
    valor = valor % 50
} if (valor >= 20) {
    nota20 = Math.floor(valor / 20)
    valor = valor % 20
} if (valor >= 10) {
    nota10 = Math.floor(valor / 10)
    valor = valor % 10
} if (valor >= 5) {
    nota5 = Math.floor(valor / 5)
    valor = valor % 5
} if (valor >= 2) {
    nota2 = Math.floor(valor / 2)
    valor = valor % 2
} if (valor >= 1) {
    nota1 = Math.floor(valor / 1)
    valor = valor % 1
}

console.log("Notas de 100: " + nota100);
console.log("Notas de 50: " + nota50);
console.log("Notas de 20: " + nota20);
console.log("Notas de 10: " + nota10);
console.log("Notas de 5: " + nota5);
console.log("Notas de 2: " + nota2);
console.log("Notas de 1: " + nota1);
console.log("=====================================================================================================================")

/*Escreva um programa que leia uma senha e permita até três tentativas para acertar. Caso contrário, bloqueio de acesso.*/
senha = "202o!"
tentativas = 0
maxTentativas = 3
senhaUser = "2020!"

while (tentativas < maxTentativas) {
    if (senhaUser == senha) {
        console.log("Acesso concedido")
        break
    } else {
        tentativas++
        if (tentativas < maxTentativas) {
            console.log("Senha incorreta. Você tem mais", tentativas, "-", maxTentativas, "tentativa(s).")
        } else {
            console.log("Senha incorreta. Acesso bloqueado.")
        }
    }
}
console.log("=====================================================================================================================")

/*Crie um programa que simule um sistema de avaliação de filmes, onde o usuário pode dar uma nota de 1 a 5 para um filme e o programa calcule a média das notas e verifique se o filme está bem avaliado (média maior ou igual a 3).*/
avaliacao1 = 5
avaliacao2 = 3
avaliacao3 = 4
avaliacao4 = 5
avaliacao5 = 4
media = (avaliacao1 + avaliacao2 + avaliacao3 + avaliacao4 + avaliacao5) / 5
bemAvaliado = media >= 3

if (bemAvaliado){
    console.log("O filme está bem avaliado. Média: ", media)
} else {
    console.log("O filme não está bem avaliado. Média: ", media)
}
console.log("=====================================================================================================================")