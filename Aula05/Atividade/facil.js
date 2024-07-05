console.log("=========================================================")
//Imprimir números de 1 a 10
numero = 1

while(numero <= 10){
    console.log(numero)
    numero ++
}
console.log("=========================================================")
//Imprimir números pares de 1 a 20
numero = 1

while (numero <= 20){
    if (numero % 2 == 0) {
    console.log(numero)
  }
    numero++
}
console.log("=========================================================")
//Somar números de 1 a 100
numero = 1
soma = 0

while (numero <= 100) {
  soma += numero
  numero++
}

console.log("A soma dos números de 1 a 100 é:", soma)
console.log("=========================================================")
//Tabuada do 5
contador = 1

while (contador <= 10){
    console.log("5 X", contador, "=", contador * 5)
    contador++
}
console.log("=========================================================")
//Imprimir uma frase 10 vezes
contador = 1

while (contador <= 10) {
  console.log("Esta é a frase que será impressa 10 vezes.")
  contador++
}
console.log("=========================================================")