function exe4() {
  let numero = prompt("Digite um número para calcular a tabuada:");

  if (numero === null || numero === "") {
    console.log("Nenhum número fornecido. Encerrando...");
    return;
  }

  console.log(`Tabuada do ${numero}:`);

  for (let i = 0; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}
