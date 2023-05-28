function exe22() {
  let contador = 0;
  let somaAlturas = 0;

  while (contador < 10) {
    const idade = parseInt(prompt("Digite a idade da pessoa:"));
    if (idade <= 0) {
      break;
    }

    const altura = parseFloat(prompt("Digite a altura da pessoa (em metros):"));

    if (idade > 50) {
      somaAlturas += altura;
    }

    contador++;
  }

  if (contador > 0) {
    const mediaAlturas = somaAlturas / contador;
    console.log("A média das alturas das pessoas com mais de 50 anos é:", mediaAlturas.toFixed(2) + "m");
  } else {
    console.log("Nenhuma pessoa com mais de 50 anos foi inserida.");
  }
}