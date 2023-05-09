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
