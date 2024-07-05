let contador = 0

while (contador < 100) {
    contador = contador + 1
    let resultado = contador * 7

    if (resultado % 2 == 0) {
        console.log("7 x", contador, "=", resultado, "Azul")
    } else {
        console.log("7 x", contador, "=", resultado, "Vermelha")
    }
}