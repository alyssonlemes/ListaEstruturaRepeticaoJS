/*Exercício numero 1 da lista - troca de elementos*/

function exe1(){
    let a, b, c, d, aux
    let cont

    while( cont <= 4){

    a = Number(prompt('Informe A'))
    b = Number(prompt('Informe B'))
    c = Number(prompt('Informe C'))
    d = Number(prompt('Informe D'))
    
    let conta = 1

    while(conta <= 3){
        if(a > b){
            aux = a; a = b; b = aux
        }
        if(b > c){
            aux = b; b = c; c = aux
        }
        if(c > d){
            aux = c; c = d; d = aux
        }
        conta++
    }
        alert(`Crescente: ${a} ${b} ${c} ${d}`)
        alert(`Decrescente: ${d} ${c} ${b} ${a}`)
        
        cont++
}
}

/*Exercício numero 2*/

function exe2(){

    let preco = 5
    let qtde = 120
    const despesa = 200 // const é um valor fixo
    let lucro 
    let saida = " Preco Qtde Despesa Lucro"

    while(preco >= 1){
        lucro = (preco * qtde) - despesa
        saida = saida + `\n ${preco} ${qtde} ${despesa} ${lucro}`
        preco = preco - 0.50
        qtde = qtde + 26
        
        alert(saida)
    }

}