//2 - Elabore um algoritmo que receba dois números e determine qual é o maior 
//entre eles, se os números forem iguais, mostre uma 
//mensagem no console "Os números são iguais".

let num1 = 10
let num2 = 20

if (num1 < num2) {
    console.log(`${num1} é menor`)
} else if (num2 > num1) {
    console.log(`${num2} é maior`)
} else if (num1 === num2) {
    console.log(`Os números são iguais`)
} else {
    console.log(`Digite algo válido`)
}

