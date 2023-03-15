import runGame from '../index.js';
import getRandomNumber from '../tools.js';

const gameRule = 'What number is missing in the progression?';

function generateProgression(start, step, length) {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
}

function generateRound() {
  const progressionStart = getRandomNumber(1, 25);
  const progressionStep = getRandomNumber(2, 4);
  const progressionLength = getRandomNumber(5, 10);
  const progression = generateProgression(progressionStart, progressionStep, progressionLength);

  const missingIndex = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = progression[missingIndex];
  progression[missingIndex] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer.toString()];
}

export default function startGame() {
  runGame(gameRule, generateRound);
}
