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