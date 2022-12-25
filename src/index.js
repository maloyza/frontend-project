import readlineSync from 'readline-sync';

export default function runGame(rules, generateRound) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== String(answer)) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}". 
Let's try again, ${userName}!`);
      process.exit();
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
}
