function conta10(){
    let conta = 1
    while (conta <= 10) {
        console.log("Boa noite " + conta);
        conta = conta + 1 //adiciona 1 na variável conta
    }
    console.log("Depois do while " + conta)
    


}

function somaIdades(){

    let cont = 0
    let soma = 0
    let resultado = 0

    let qtde = Number(prompt("Informe a quantidade de idades")) // a funcao prompt recebe um valor do usuário no console

    while((cont < qtde)){
    let idade = Number(prompt("Informe a idade")) // a funcao prompt recebe um valor do usuário no console
    soma = soma + idade
    cont ++

}

    resultado = soma / qtde
    console.log("A média das idades é igual a: " + resultado)

}

function tabuada(){
    let numero = Number(prompt("Informe um numero")) // a funcao prompt recebe um valor do usuário no console
    let cont = 0
    let resultado = 0

    while(cont <= 10){
        resultado = numero * cont
        console.log(" " + numero + " X " + cont + " = " + resultado)
        cont++
    }

}