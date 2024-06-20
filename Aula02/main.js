//string
//boolan
//int
//float

var numero1 = 10
var numero2 = 14

var soma = numero1 + numero2
var subtração = numero1 - numero2
var multiplicação = numero1 * numero2
var divisao = numero1 / numero2


console.log("Soma dos valores:", soma)
console.log("Subtrção dos valores:", subtração)
console.log("Multiplicação dos valores", multiplicação)
console.log("Divisão dos valores:", divisao)

for (let i = 1; i <= 10; i++) {
    console.log("Tabuada do", i + ":");
    for (let j = 1; j <= 10; j++) {
        console.log(i + " x " + j + " = " + (i * j));
    }
    console.log("-----------------------");
}

var multiplicador = 1
for (let i = 1; i <= 10; i++) {
    let resultado = multiplicador * i;
    console.log( x," x " + i + " = " + resultado);
}