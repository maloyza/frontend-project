import getRandomNumber from '../tools.js';
import runGame from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (num) =>  num % 2 === 0;

function generateRound() {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';

  return [
    question,
    correctAnswer,
  ];
}

export default function startGame() {
  runGame(gameRule, generateRound);
}
