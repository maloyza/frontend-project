import _ from 'lodash';
import { actionGreeting, actionAnswer } from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

let result;

function actionQuestionEven() {
  const randNumber = _.random(1, 100);
  if (randNumber % 2 === 0) result = 'yes';
  else result = 'no';
  console.log(`Question: ${randNumber}`);
}

export default function startGameBrainEven() {
  const userName = actionGreeting(rules);
  for (let i = 0; i < 3; i += 1) {
    actionQuestionEven();
    actionAnswer(result);
  }
  console.log(`Congratulations, ${userName}!`);
}
