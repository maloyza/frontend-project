import readlineSync from 'readline-sync';
import _ from 'lodash';

let userName;
let userAnswer;
let result;

function calculations(a, b, c) {
  switch (c) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: return 0;
  }
}

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

function actionGreeting() {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
}

function actionAnswer() {
  userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === result) {
    console.log('Correct!');
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${result}". 
Let's try again, ${userName}!`);
    process.exit();
  }
}

function actionQuestionEven() {
  const randNumber = _.random(1, 100);
  if (randNumber % 2 === 0) result = 'yes';
  else result = 'no';
  console.log(`Question: ${randNumber}`);
}

function actionQuestionCalc() {
  const randNumbers = [_.random(1, 10), _.random(1, 10)];
  const randOperat = _.sample(['+', '-', '*']);
  result = calculations(randNumbers[0], randNumbers[1], randOperat);
  console.log(`Question: ${randNumbers[0]} ${randOperat} ${randNumbers[1]}`);
}

function actionQuestiongcd() {
  const divisibleNumbers = [
    randomEvenNumber(1, 75),
    randomEvenNumber(1, 75),
  ];
  const minNum = Math.min(...divisibleNumbers);
  result = maxCommonDivisor(divisibleNumbers, minNum);

  console.log(`Question: ${divisibleNumbers[0]} ${divisibleNumbers[1]}`);
}

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

function actionQuestionPrime() {
  const n = (_.random(2, 100));
  if ((2 ** n) % n === 2 % n) result = 'yes';
  else result = 'no';
  console.log(`Question: ${n}`);
}

function startGameBrainEven() {
  actionGreeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    actionQuestionEven();
    actionAnswer();
  }
  console.log(`Congratulations, ${userName}!`);
}

function startGameBrainCalc() {
  actionGreeting();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    actionQuestionCalc();
    actionAnswer();
  }
  console.log(`Congratulations, ${userName}!`);
}

function startGameBraingcd() {
  actionGreeting();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    actionQuestiongcd();
    actionAnswer();
  }
  console.log(`Congratulations, ${userName}!`);
}

function startGameBrainProgression() {
  actionGreeting();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    actionQuestionProgression();
    actionAnswer();
  }
  console.log(`Congratulations, ${userName}!`);
}

function startGameBrainPrime() {
  actionGreeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    actionQuestionPrime();
    actionAnswer();
  }
  console.log(`Congratulations, ${userName}!`);
}

export {
  startGameBrainCalc,
  startGameBrainEven,
  startGameBrainPrime,
  startGameBrainProgression,
  startGameBraingcd,
};
