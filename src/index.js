// Variáveis:
let nomeHeroi = "Sephius";
let xpHeroi = 8250;

// Variável para armazenar o nível do herói:
let nivel = " ";

//Estrutura da Decisão de classificação do nível do herói com base no número de XP:
if (xpHeroi < 1000){
  nivel = "Ferro";
}
else if (xpHeroi >= 1000 && xpHeroi <= 2000){
  nivel = "Bronze"
}
else if (xpHeroi >= 2001 && xpHeroi <= 5000){
  nivel = "Prata"
}
else if (xpHeroi >= 5001 && xpHeroi <= 7000){
  nivel = "Ouro"
}
else if (xpHeroi >= 7001 && xpHeroi <= 8000){
  nivel = "Platina"
}
else if (xpHeroi >= 8001 && xpHeroi <= 9000){
  nivel = "Ascendente"
}
else if (xpHeroi >= 9001 && xpHeroi <= 10000){
  nivel = "Imortal"
}
else if (xpHeroi >= 1001){
  nivel = "Radiante"
}

//Mensagem com o resultado classificatório do herói:
console.log("O Herói de nome " + nomeHeroi +" está no nível de " + nivel);