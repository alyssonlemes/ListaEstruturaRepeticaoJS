function calcularEstatisticas(pessoas) {
  let quantidadeIdadeSuperior50PesoInferior60 = 0;
  let somaIdadesAlturaInferior150 = 0;
  let quantidadePessoasAlturaInferior150 = 0;
  let quantidadeOlhosAzuis = 0;
  let quantidadePessoasRuivasSemOlhosAzuis = 0;

  for (let i = 0; i < pessoas.length; i++) {
    const pessoa = pessoas[i];
    const { idade, peso, altura, corOlhos, corCabelos } = pessoa;

    if (idade > 50 && peso < 60) {
      quantidadeIdadeSuperior50PesoInferior60++;
    }

    if (altura < 1.5) {
      somaIdadesAlturaInferior150 += idade;
      quantidadePessoasAlturaInferior150++;
    }

    if (corOlhos === 'A') {
      quantidadeOlhosAzuis++;
    }

    if (corCabelos === 'R' && corOlhos !== 'A') {
      quantidadePessoasRuivasSemOlhosAzuis++;
    }
  }

  const mediaIdadesAlturaInferior150 = quantidadePessoasAlturaInferior150 === 0 ? 0 : somaIdadesAlturaInferior150 / quantidadePessoasAlturaInferior150;
  const porcentagemOlhosAzuis = (quantidadeOlhosAzuis / pessoas.length) * 100;

  console.log(`Quantidade de pessoas com idade superior a 50 anos e peso inferior a 60kg: ${quantidadeIdadeSuperior50PesoInferior60}`);
  console.log(`Média das idades das pessoas com altura inferior a 1,50m: ${mediaIdadesAlturaInferior150}`);
  console.log(`Porcentagem de pessoas com olhos azuis: ${porcentagemOlhosAzuis}%`);
  console.log(`Quantidade de pessoas ruivas e sem olhos azuis: ${quantidadePessoasRuivasSemOlhosAzuis}`);
}