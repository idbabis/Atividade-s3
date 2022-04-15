// 1 - Elabore um algoritmo que receba um número (1-7) 
//e devolva o dia da semana correspondente.

function diaDaSemana(dia, um, dois, tres, quatro, cinco, seis, sete) {  
    let resultado
        if (dia === 'um') {
            resultado = segunda-feira
            return resultado
        }
         else if (dia === 'dois') {
            resultado = terça-feira
            return resultado
        } 
        else if (dia === 'tres') {
            resultado = quarta-feira
            return resultado
        } 
        else if (dia === 'quatro') {
            resultado = quinta-feira
            return resultado
        } 
        else if (dia === 'cinco') {
            resultado = sexta-feira
            return resultado
        } 
        else if (dia === 'seis') {
            resultado = sábado
            return resultado
        } 
        else if (dia === 'sete') {
            resultado = domingo
            return resultado
        } 
        else {
            return `O dia da semana é ${resultado} .`
        }
}

    let resultado = diaDaSemana(dois) 
    console.log(diaDaSemana)

// esta com erro na linha 4 e não sei como fazer, esta retornando que dois não esta definido
//como estou muito cansada e tenho que entrar os exercícios, entrego com esse erro.
//não estou conseguindo encontrar o erro, talvez a professora me ajude.