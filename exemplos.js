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

function exe2(){
    let preco = 5.0
    let qtde = 120
    const despesa = 200
    let lucro = 0
    let saida = "<table border='1'> <tr> <th>Preço</th> <th>Quantidade</th> <th>Despesa</th> <th>Lucro</th> </tr>"

    while(preco >= 1.0){
        lucro = (preco * qtde) - despesa
        saida = saida + `<tr> <td>${preco}</td> <td>${qtde}</td> <td>${despesa}</td> <td>${lucro}</td> </tr>`
        preco = preco - 0.50
        qtde = qtde + 26
       
    }
    saida = saida + "</table>"
    document.getElementById("tabela").innerHTML = saida

}

function exe6(){

    let totalprazo = 0
    let totalvista = 0
    let total = 0
    let codigo
    let valor 

    for(let conta = 1; conta <= 10; conta++){
        codigo = prompt("informe V ou P como codigo da compra: ").toUpperCase()
        valor = Number(prompt("Informe valor da compra: "))

        if(codigo == 'V'){
            totalvista += valor
        }
        else if(codigo == 'P'){
            totalprazo += valor
        }
        else{
            alert("Codigo invalido")
            conta--
        }

    }

    total = totalprazo + totalvista
    alert(`Total Prazo ${totalprazo}, Total Vista ${totalvista} e Total ${total}`)
    alert(`Valor da 1ª prestação ${(totalprazo / 3).toFixed(2)}`)


}

function exe7(){

    let idade, altura, peso;
    let idade50 = 0; let somaAltura = 0;
    let contaAltura = 0; let peso40 = 0;

    for(let conta = 1; conta <= 5; conta++){
        
        idade = Number(prompt("Informe a idade"))
        altura = Number(prompt("Informe a altura"))
        peso = Number(prompt("Informe o peso"))
        
        if(idade > 50){
            idade50 ++

        }
        else if(idade >=10 && idade <=20){
            somaAltura += altura
            contaAltura++
        }
        if(peso < 40){
            peso40++

        }
    }

    alert(`Idade > 50 ${idade50}`)
    alert(`Média da altura com idade entre 10 e 20 ${somaAltura / contaAltura}`)
    alert(`Porcentagem de pessoas com peso inferior a 40 ${peso40 / 5*100}`)


}

function exe10(){

    
    let nro = Number(prompt('Informe o numero'))

    let resto0 = 0

    let contaprimo = 0
    let contapar = 0

    for(let i = 0; i <= nro && (resto0 <= 2); i++){
    
        if(nro % i == 0){
    resto0++
}  
        if(resto0 == 2 ) {
            alert('É primo')

    }
    else{
        alert('Não é primo')
    }
    


}
}

function exe20(){
        let opcao, nota1, nota2, nota3, pesonota1, pesonota2, pesonota3 
        do{

            opcao = Number(prompt("Menu de opções \n 1. Média Aritmética \n 2. Média ponderada \n 3. Sair do programa"))

            switch(opcao){
                case 1: alert("Opção 1 escolhida"); 
                nota1 = Number(prompt('Informe a nota 1'))
                nota2 = Number(prompt('Informe a nota 2'))
                alert(`Media aritmetica ${(nota1 + nota2)/2}`)

                break

                case 2: alert("Opção 2 escolhida"); 
                nota1 = Number(prompt('Informe a nota 1'))
                pesonota1 = Number(prompt('Informe o peso da nota 1'))

                nota2 = Number(prompt('Informe a nota 2'))
                pesonota2 = Number(prompt('Informe o peso da nota 2'))

                nota3 = Number(prompt('Informe a nota 3'))
                pesonota3 = Number(prompt('Informe o peso da nota 3'))

                alert(`Media ponderada ${((nota1* pesonota1) + (nota2*pesonota2) + (nota3 * pesonota3))/(pesonota1 + pesonota2 + pesonota3)}`)
                
                break
                
                case 3: alert("Encerrando o programa"); 
                
                break
                
                default: ("Opção inválida");
            }



        }while(opcao != 3 )
}

function exe21(){
    
    let cand1 = 0, cand2 = 0, cand3 = 0, cand4 = 0, nulos = 0, brancos = 0
    let total1, opcao

    do{
        opcao = Number(prompt("Escolha uma op;'ao? \n 1. Candi 1 \n 2. Cand 2 \n 3. Cand 3 \n 4. Cand4 \n 5. Nulo \n 6. Branco \n 0. Sair do programa"))
     
        switch(opcao){
            case 1: cand1++; break
            case 2: cand2++; break
            case 3: cand3++; break
            case 4: cand4++; break
            case 5: nulos++; break
            case 6: brancos++; break
            default: alert('Opcao invalida')


        }

    }while(opcao != 0);

    total = cand1 + cand2 + cand3 + cand4 + nulos + brancos
    if(total > 0){
    alert(`% de votos nulos ${(nulos/total)*100}`)
    alert(`% de votos brancos ${brancos/total*100}`)

}
    else alert('Nenhum voto computado')
}
