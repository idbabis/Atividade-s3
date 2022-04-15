//7 - Crie uma função que recebe 2 parâmetros e retorna o resultado da 
//divisão entre eles. Além disso, se o resto dessa divisão 
//for zero deverá imprimir no console o valor e dizer que ele é par.

function determinaParOuImpar(numero){
    if (numero % 2 ==0) {
        return `${numero} é par`
    } else{
        return `${numero} é impar`
    }
    }
    
    const resultado = determinaParOuImpar(51)  //é par ou impar
    console.log (resultado)

