import utils from "./utils";

const bocas = ["aberta", "baixa", "feliz"];

const cabecas = ["amarelo", "cinza", "manchado", "preto"];

const corpos = ["amarelo", "cinza", "manchado", "preto"];

const olhos = ["assustado", "bravo", "grandes", "preguica", "triste"];

const patas = ["cinza", "manchada", "preto", "amarela"];

const rabos = ["amarelo", "cinza", "manchado", "preto"];

const generateCat = () => {
  return {
    body: utils.randomFromList(corpos),
    head: utils.randomFromList(cabecas),
    eyes: utils.randomFromList(olhos),
    tail: utils.randomFromList(rabos),
    paws: utils.randomFromList(patas),
    mouth: utils.randomFromList(bocas)
  };
};

export default {
  generateCat: generateCat
};
