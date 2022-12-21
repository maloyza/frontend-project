import _ from 'lodash';
import { actionGreeting, actionAnswer } from '../index.js';

const rules = 'What number is missing in the progression?';

let result;

function actionQuestionProgression() {
  const randomArr = [];
  const randomLength = _.random(5, 10);
  const randomStart = _.random(1, 25);
  const randomProgression = _.random(2, 4);

  randomArr[0] = randomStart;
  while (randomArr.length < randomLength) {
    randomArr.push(randomArr[randomArr.length - 1] + randomProgression);
  }
  const index = _.random(0, randomArr.length - 1);
  result = randomArr[index];
  randomArr[index] = '..';
  console.log(`Question: ${randomArr.join(' ')}`);
}

export default function startGameBrainProgression() {
  const userName = actionGreeting(rules);
  for (let i = 0; i < 3; i += 1) {
    actionQuestionProgression();
    actionAnswer(result);
  }
  console.log(`Congratulations, ${userName}!`);
}
