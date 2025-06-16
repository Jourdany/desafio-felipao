// Lista de heróis com nome e XP:
let herois = [
  { nome: "Gaya", xp: 7320 },
  { nome: "Arthil", xp: 4500 },
  { nome: "Therbius", xp: 12000 },
  { nome: "Kalyra", xp: 980 },
  { nome: "Sephius", xp: 8700 }
];

// Laço de repetição para a lista de heróis:
for (let i = 0; i < herois.length; i++) {
  let nomeHeroi = herois[i].nome;
  let xpHeroi = herois[i].xp;
  let nivel = "";

  // Estrutura de decisão:
  if (xpHeroi < 1000) {
    nivel = "Ferro";
  } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivel = "Bronze";
  } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivel = "Prata";
  } else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivel = "Ouro";
  } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivel = "Platina";
  } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivel = "Ascendente";
  } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivel = "Imortal";
  } else if (xpHeroi >= 10001) {
    nivel = "Radiante";
  }

  // Saída com a mensagem de exibição do nome do herói e nível:
  console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);
}
