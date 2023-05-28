function exe1() {
  const numeros = [];

  // Leitura dos números
  let contador = 1;
  while (contador <= 4) {
    const numero = parseInt(prompt(`Digite o ${contador}º número:`));
    numeros.push(numero);
    contador++;
  }

  console.log("Números na ordem digitada:", numeros);

 
  for (let i = 0; i < numeros.length - 1; i++) {
    for (let j = 0; j < numeros.length - 1 - i; j++) {
      if (numeros[j] > numeros[j + 1]) {
        const temp = numeros[j];
        numeros[j] = numeros[j + 1];
        numeros[j + 1] = temp;
      }
    }
  }

  console.log("Números em ordem crescente:", numeros);
}