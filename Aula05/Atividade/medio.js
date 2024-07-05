console.log("=========================================================")
//Fatorial de um número
numero = 5
fatorial = 1
contador = 1

while (contador <= numero){
    fatorial *= contador
    contador++
    }
    console.log("O fatorial de", numero, "é:", fatorial)
console.log("=========================================================")
//Sequência de Fibonacci
a = 0
b = 1
contador = 0

while (contador < 10){
    console.log(a)
    proximo = a + b
    a = b
    b = proximo
    contador++
}
console.log("=========================================================")
//Números primos até 50
num = 2

while (num <= 50) {
    let isPrime = true
    let divisor = 2

    while (divisor < num){
        if (num % divisor === 0) {
            isPrime = false
            break
        }
        divisor++
    } if (isPrime){
        console.log(num)
    }
    num++
}
