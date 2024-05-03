const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularNivel(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  let nivel;

  if (saldoVitorias < 10) {
    nivel = "Ferro";
  } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    nivel = "Bronze";
  } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    nivel = "Prata";
  } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    nivel = "Ouro";
  } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    nivel = "Diamante";
  } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  const message = `O Herói tem saldo de ${saldoVitorias} vitórias e está no nível de ${nivel}`;
  console.log(message);
}

function perguntarEntrada(pergunta) {
  return new Promise((resolve) => {
    rl.question(pergunta, (resposta) => {
      resolve(resposta);
    });
  });
}

async function main() {
  let continuar = true;

  while (continuar) {
    const vitorias = parseInt(await perguntarEntrada('Digite o número de vitórias: '));
    const derrotas = parseInt(await perguntarEntrada('Digite o número de derrotas: '));

    if (isNaN(vitorias) || isNaN(derrotas)) {
      console.log("Entrada inválida. Por favor, insira valores numéricos.");
    } else {
      calcularNivel(vitorias, derrotas);
      const resposta = await perguntarEntrada('Deseja calcular novamente? (s/n) ');
      continuar = resposta.toLowerCase() === 's';
    }
  }

  rl.close();
}

main();