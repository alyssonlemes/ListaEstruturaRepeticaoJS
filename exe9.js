function calcularEstatisticas() {
  let somaIdades = 0;
  let quantidadePessoasPesoSuperior90AlturaInferior150 = 0;
  let quantidadePessoasIdade10a30AlturaSuperior190 = 0;

  for (let i = 0; i < 10; i++) {
    somaIdades += idades[i];

    if (pesos[i] > 90 && alturas[i] < 1.5) {
      quantidadePessoasPesoSuperior90AlturaInferior150++;
    }

    if (idades[i] >= 10 && idades[i] <= 30 && alturas[i] > 1.9) {
      quantidadePessoasIdade10a30AlturaSuperior190++;
    }
  }

  const mediaIdades = somaIdades / 10;
  const porcentagemIdade10a30AlturaSuperior190 = (quantidadePessoasIdade10a30AlturaSuperior190 / 10) * 100;

  console.log(`Média de idade das dez pessoas: ${mediaIdades}`);
  console.log(`Quantidade de pessoas com peso superior a 90kg e altura inferior a 1,50m: ${quantidadePessoasPesoSuperior90AlturaInferior150}`);
  console.log(`Porcentagem de pessoas com idade entre 10 e 30 anos e altura superior a 1,90m: ${porcentagemIdade10a30AlturaSuperior190}%`);
}
