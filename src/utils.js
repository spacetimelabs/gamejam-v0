function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomFromList(lst) {
  return lst[getRandomInt(0, lst.length)];
}

export default {
  getRandomInt: getRandomInt,
  randomFromList: randomFromList
};
