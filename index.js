let nomeHeroi = "Homem de Ferro";
let xP = 90000;
let nivel

if (xP <= 1000) {
    nivel = "Ferro"
} else if (xP >= 1001 && xP <= 2000) {
    nivel = "Bronze"
} else if (xP >= 2001 && xP <= 5000) {
    nivel = "Prata"
}else if (xP >= 5001 && xP <= 7000) {
    nivel = "Ouro"
} else if (xP >= 7001 && xP <= 8000) {
    nivel = "Platina"
}else if (xP >= 8001 && xP <= 9000) {
    nivel = "Ascendente"
} else if (xP >= 9001 && xP <= 10000) {
    nivel = "Imortal"
} else {
    nivel = "Radiante"
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel)