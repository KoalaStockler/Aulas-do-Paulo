/*Crie um programa que resolva a equação quadrática (ax² + bx + c = 0) e informe as raízes, se existirem.*/
let a = 1
let b = -5
let c = 6

let baskhara = b * b - 4 * a * c;

if (baskhara > 0) {
    let x1 = (-b + Math.sqrt(baskhara)) / (2 * a);
    let x2 = (-b - Math.sqrt(baskhara)) / (2 * a);
    console.log(`As raízes da equação são x1 = ${x1} e x2 = ${x2}`);
} else if (baskhara === 0) {
    let x = -b / (2 * a);
    console.log(`A equação possui uma raiz dupla em x = ${x}`);
} else {
    console.log('A equação não possui raízes reais.');
}
