import readlineSync from 'readline-sync';

let userAnswer;
let userName;

function actionGreeting(rules) {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  return userName;
}

function actionAnswer(result) {
  userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer !== String(result)) {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${result}". 
Let's try again, ${userName}!`);
    process.exit();
  }
  console.log('Correct!');
}

export {
  actionGreeting,
  actionAnswer,
};
