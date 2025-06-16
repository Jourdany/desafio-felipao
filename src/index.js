let herois = [
  { nome: "Gaya", xp: 7320 },
  { nome: "Arthil", xp: 4500 },
  { nome: "Therbius", xp: 12000 },
  { nome: "Kalyra", xp: 980 },
  { nome: "Sephius", xp: 8700 },
  { nome: "Zaius", xp: 10000 }
];

for (let i = 0; i < herois.length; i++) {
  let nomeDoHeroi = herois[i].nome;
  let xpDoPoder = herois[i].xp;
  let nivel = "";

  if (xpDoPoder < 1000) {
    nivel = "Ferro";
  } else if (xpDoPoder >= 1001 && xpDoPoder <= 2000) {
    nivel = "Bronze";
  } else if (xpDoPoder >= 2001 && xpDoPoder <= 5000) {
    nivel = "Prata";
  } else if (xpDoPoder >= 5001 && xpDoPoder <= 7000) {
    nivel = "Ouro";
  } else if (xpDoPoder >= 7001 && xpDoPoder <= 8000) {
    nivel = "Platina";
  } else if (xpDoPoder >= 8001 && xpDoPoder <= 9000) {
    nivel = "Ascendente";
  } else if (xpDoPoder >= 9001 && xpDoPoder <= 10000) {
    nivel = "Imortal";
  } else if (xpDoPoder >= 10001) {
    nivel = "Radiante";
  }

   console.log(`O Herói/Heroína de nome ${nomeDoHeroi} está no nível ${nivel}`);
}