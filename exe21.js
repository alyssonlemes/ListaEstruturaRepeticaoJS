function exe21(){
    let cand1 = 0, cand2 = 0, cand3 = 0, cand4 = 0, nulos = 0, brancos = 0;
    let total, opcao;
    do{
        opcao = Number(prompt('Escolha uma opção: \n 1. Cand 1 \n 2. Cand 2 \n 3. Cand 3 \n 4. Cand 4 \n 5. Nulo \n 6. Branco \n 0. Sair do programa'))
        switch(opcao){
            case 1: cand1++; break
            case 2: cand2++; break
            case 3: cand3++; break
            case 4: cand4++; break
            case 5: nulos++; break
            case 6: brancos++; break
            case 0: alert('VOtação encerrada'); break
            default: alert('Opção inválida')
        }
    }
    while (opcao != 0)
    total = cand1 + cand2 + cand3 + cand4 + nulos + brancos
    if (total > 0){
        alert(`% de votos nulos ${nulos/total*100}`)
        alert(`% de votos brancos ${brancos/total*100}`)
    }
    else alert('Nenhum voto computado')   
}