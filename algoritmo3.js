// 3 - Crie um algoritmo que receba três notas de um aluno, 
//calcule sua média e mostre as seguintes mensagens de acordo com cada 
//situação:

//-Se a media for igual ou maior que 7 - Aprovado
//- Se a media for maior e igual a cinco e menor que 7 - Recuperação
//- Se a media for menor que 5 - Reprovado

function resultadoMedia (nota1,nota2,nota3) {
    const media = (nota1 + nota2 + nota3) / 3

    if (media >= 7 && media <= 10) {
        return `Aprovado, sua média é ${media}`
    }   else if (media >= 5 && media < 7) {
        return `Recuperação, sua média é ${media}`
    }   else if (media < 4 && media >= 0) {
        return `Reprovado, sua média é ${media}`
    }

}

console.log(resultadoMedia(7, 8, 9))
