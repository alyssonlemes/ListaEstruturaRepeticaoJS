function exe2(){
    let preco = 5.0
    let qtde = 120
    const despesa = 200
    let saida = "<table border='1'> <tr> <th> Preço </th> <th> Qtde </th> <th> Despesa </th> <th> Lucro </th></tr>"
    while(preco >= 1.0){
        let lucro = (preco * qtde) - despesa
        saida = saida + `<tr> <td> ${preco} </td> <td> ${qtde} </td> <td> ${despesa} </td> <td> ${lucro} </td> </tr>`
        preco = preco - 0.50
        qtde = qtde + 26
    }
    saida = saida + "</table>"
    document.getElementById("tabela").innerHTML = saida
}