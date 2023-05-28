function calcularSomas() {
  let somaPares = 0;
  let somaPrimos = 0;

  for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];

    // Verifica se o número é par
    if (numero % 2 === 0) {
      somaPares += numero;
    }

    // Verifica se o número é primo
    let primo = true;
    if (numero < 2) {
      primo = false;
    } else {
      for (let j = 2; j < numero; j++) {
        if (numero % j === 0) {
          primo = false;
          break;
        }
      }
    }

    if (primo) {
      somaPrimos += numero;
    }
  }

  console.log(`Soma dos números pares: ${somaPares}`);
  console.log(`Soma dos números primos: ${somaPrimos}`);
}


