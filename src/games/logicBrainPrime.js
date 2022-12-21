import _ from 'lodash';
import { actionGreeting, actionAnswer } from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

let result;

function actionQuestionPrime() {
  const n = (_.random(2, 100));
  if ((2 ** n) % n === 2 % n) result = 'yes';
  else result = 'no';
  console.log(`Question: ${n}`);
}

export default function startGameBrainPrime() {
  const userName = actionGreeting(rules);
  for (let i = 0; i < 3; i += 1) {
    actionQuestionPrime();
    actionAnswer(result);
  }
  console.log(`Congratulations, ${userName}!`);
}
