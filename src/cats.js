import utils from "./utils";

const names = [
  "Ligeiro",
  "Charles Brown",
  "Lesadinho",
  "Manchas",
  "Pimenta",
  "Fred",
  "Garfield",
  "Bola de neve",
  "Fumaça",
  "Kitten",
  "Chaves",
  "kiko",
  "Shrek",
  "Pet",
  "Zica",
  "Magrela",
  "Miúdo",
  "Chuvisco",
  "Bolinha",
  "Xarope",
  "Thor",
  "Luna",
  "Aila",
  "Coco",
  "Jade",
  "Rosinha",
  "Milo",
  "Bob",
  "Bolonhesa"
];

const titles = [
  "Sra. ",
  "Sr. ",
  "Grande ",
  "",
  "Incrível Sr. ",
  "Joe ",
  "Gato "
];

const surtitles = [" III", " Júnior", " II", " ,o Terrível", " IV"];

const bocas = ["aberta", "baixa", "feliz"];

const cabecas = ["amarelo", "cinza", "manchado", "preto"];

const corpos = ["amarelo", "cinza", "manchado", "preto"];

const olhos = ["assustado", "bravo", "grandes", "preguica", "triste"];

const patas = ["cinza", "manchado", "preto", "amarelo"];

const rabos = ["amarelo", "cinza", "manchado", "preto"];

const generateCat = () => {
  const name = utils.randomFromList(names);
  const title = Math.random() > 0.7 ? utils.randomFromList(titles) : "";
  const surtitle = Math.random() > 0.92 ? utils.randomFromList(surtitles) : "";
  const body = utils.randomFromList(corpos);
  const head = body;
  const tail = body;

  return {
    body: body,
    head: head,
    tail: tail,
    eyes: utils.randomFromList(olhos),
    mouth: utils.randomFromList(bocas),
    name: title + name + surtitle
  };
};

export default {
  generateCat: generateCat
};
