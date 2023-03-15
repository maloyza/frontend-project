import getRandomNumber from '../tools.js';
import runGame from '../index.js';

const gameRule = 'What number is missing in the progression?';

function generatingProgression(getRandomNumber) {
  const randomArr = [];
  const randomLength = getRandomNumber(5, 10);
  const randomStart = getRandomNumber(1, 25);
  const randomProgression = getRandomNumber(2, 4);

  randomArr[0] = randomStart;
  while (randomArr.length < randomLength) {
    randomArr.push(randomArr[randomArr.length - 1] + randomProgression);
  }
  return randomArr;
}

function generateRound() {
  const randomArr = generatingProgression(getRandomNumber);

  const index = getRandomNumber(0, randomArr.length - 1);
  const result = randomArr[index];
  randomArr[index] = '..';

  const question = `${randomArr.join(' ')}`;

  return [
    question,
    result,
  ];
}

export default function startGame() {
  runGame(gameRule, generateRound);
}
