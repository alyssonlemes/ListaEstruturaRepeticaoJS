function exe3() {
  let faixa1 = 0; // Faixa etária 1: até 15 anos
  let faixa2 = 0; // Faixa etária 2: 16 a 30 anos
  let faixa3 = 0; // Faixa etária 3: 31 a 45 anos
  let faixa4 = 0; // Faixa etária 4: 46 a 60 anos
  let faixa5 = 0; // Faixa etária 5: acima de 60 anos

  for (let i = 0; i < idades.length; i++) {
    if (idades[i] <= 15) {
      faixa1++;
    } else if (idades[i] <= 30) {
      faixa2++;
    } else if (idades[i] <= 45) {
      faixa3++;
    } else if (idades[i] <= 60) {
      faixa4++;
    } else {
      faixa5++;
    }
  }

  const totalPessoas = idades.length;
  const percentFaixa1 = (faixa1 / totalPessoas) * 100;
  const percentFaixa5 = (faixa5 / totalPessoas) * 100;

  console.log("Quantidade de pessoas em cada faixa etária:");
  console.log("Faixa 1 (até 15 anos):", faixa1);
  console.log("Faixa 2 (16 a 30 anos):", faixa2);
  console.log("Faixa 3 (31 a 45 anos):", faixa3);
  console.log("Faixa 4 (46 a 60 anos):", faixa4);
  console.log("Faixa 5 (acima de 60 anos):", faixa5);
  console.log("Porcentagem de pessoas na primeira faixa etária:", percentFaixa1.toFixed(2) + "%");
  console.log("Porcentagem de pessoas na última faixa etária:", percentFaixa5.toFixed(2) + "%");
}