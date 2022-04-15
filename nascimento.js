//5 - Crie uma função que recebe o ano de nascimento da pessoa 
//informando se ela é maior de idade ou menor.

const anoAtual = new Date().getFullYear();
const anoInformado = 1970;
const idade = (anoAtual - anoInformado);
 if (idade > 18) { 
    resposta = "Você é maior de idade, possui mais de 18 anos."
} else if (idade < 18) {
    resposta = "Você não é maior de idade, possui menos de 18 anos."
}

console.log(resposta)

