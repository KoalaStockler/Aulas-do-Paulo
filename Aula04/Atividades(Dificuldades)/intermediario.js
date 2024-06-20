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