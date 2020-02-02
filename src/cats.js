import utils from "./utils";

const bocas = ["aberta", "baixa", "feliz"];

const cabecas = ["amarelo", "cinza", "manchado", "preto"];

const corpos = ["amarelo", "cinza", "manchado", "preto"];

const olhos = ["assustado", "bravo", "grandes", "preguica", "triste"];

const patas = ["cinza", "manchado", "preto", "amarelo"];

const rabos = ["amarelo", "cinza", "manchado", "preto"];

const generateCat = () => {
  const body = utils.randomFromList(corpos);
  const head = utils.randomFromList(cabecas);

  const tail = Math.random() < 0.5 ? body : head;

  return {
    body: body,
    head: head,
    tail: tail,
    eyes: utils.randomFromList(olhos),
    mouth: utils.randomFromList(bocas)
  };
};

export default {
  generateCat: generateCat
};
