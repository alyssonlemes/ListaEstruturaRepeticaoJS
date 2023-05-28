function exe5() {
  for (let numero = 1; numero <= 10; numero++) {
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      const resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
    console.log(""); // Adiciona uma linha em branco para separar as tabuadas
  }
}