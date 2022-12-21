import _ from 'lodash';
import { actionGreeting, actionAnswer } from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

let result;

function randomEvenNumber(min, max) {
  const x = _.random(min, max);
  return x % 2 === 0 ? x : randomEvenNumber(min, max);
}

function maxCommonDivisor(numArr, minNum) {
  for (let i = minNum; i > 0; i -= 1) {
    if (numArr[0] % i === 0 && numArr[1] % i === 0) {
      return i;
    }
  }
  return 0;
}

function actionQuestionGcd() {
  const divisibleNumbers = [
    randomEvenNumber(1, 75),
    randomEvenNumber(1, 75),
  ];
  const minNum = Math.min(...divisibleNumbers);
  result = maxCommonDivisor(divisibleNumbers, minNum);

  console.log(`Question: ${divisibleNumbers[0]} ${divisibleNumbers[1]}`);
}

export default function startGameBrainGcd() {
  const userName = actionGreeting(rules);
  for (let i = 0; i < 3; i += 1) {
    actionQuestionGcd();
    actionAnswer(result);
  }
  console.log(`Congratulations, ${userName}!`);
}
