function calcularEstatisticas(idades, alturas, pesos) {
  let quantidadeIdadeSuperior50 = 0;
  let somaAlturas = 0;
  let quantidadePessoas10a20 = 0;
  let quantidadePesoInferior40 = 0;

  for (let i = 0; i < 5; i++) {
    if (idades[i] > 50) {
      quantidadeIdadeSuperior50++;
    }

    if (idades[i] >= 10 && idades[i] <= 20) {
      somaAlturas += alturas[i];
      quantidadePessoas10a20++;
    }

    if (pesos[i] < 40) {
      quantidadePesoInferior40++;
    }
  }

  const mediaAlturas = quantidadePessoas10a20 === 0 ? 0 : somaAlturas / quantidadePessoas10a20;
  const porcentagemPesoInferior40 = (quantidadePesoInferior40 / 5) * 100;

  console.log(`Quantidade de pessoas com idade superior a 50 anos: ${quantidadeIdadeSuperior50}`);
  console.log(`Média das alturas das pessoas com idade entre 10 e 20 anos: ${mediaAlturas}`);
  console.log(`Porcentagem de pessoas com peso inferior a 40kg: ${porcentagemPesoInferior40}%`);
}