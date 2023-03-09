import { getRandomNumber } from '../tools.js';
import runGame from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEvenNumber(num) {
  let answer;
  if (num % 2 === 0) answer = 'yes';
  else answer = 'no';

  return answer;
}

function generateRound() {
  const question = getRandomNumber(1, 100);
  const result = isEvenNumber(question);

  return [
    question,
    result,
  ];
}

export default function startGame() {
  runGame(gameRule, generateRound);
}
