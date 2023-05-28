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