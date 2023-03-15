import getRandomNumber from '../tools.js';
import runGame from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrimeNumber(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function generateRound() {
  const question = getRandomNumber(2, 100);
  const correctAnswer = isPrimeNumber(question) ? 'yes' : 'no';

  return [
    question,
    correctAnswer,
  ];
}

export default function startGame() {
  runGame(gameRule, generateRound);
}
