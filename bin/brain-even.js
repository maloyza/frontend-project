import readlineSync from 'readline-sync';
import _ from 'lodash';

let userName;
let randNumber;

function actionGreeting() {
    console.log('Welcome to the Brain Games!');
    userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

function actionQuestion() {
    randNumber = _.random(1, 100);
    console.log(`Question: ${randNumber}`);
}

function actionAnswer() {
    let userAnswer = readlineSync.question('Your answer: ');
    let variantAnswer = (userAnswer == 'yes') ? "'no'" : "'yes'";
    if(userAnswer == 'yes' && randNumber % 2 == 0 || userAnswer == 'no' && randNumber % 2 != 0){
        return console.log('Correct!');
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was ${variantAnswer}. 
            Let's try again, ${userName}`);
        process.exit();
    }
}

function actionStartGame(){
    actionGreeting()

    for(var i = 0; i < 3; i = i + 1){
        actionQuestion();
        actionAnswer();
    }

    console.log(`Congratulations, ${userName}!`);
}

actionStartGame();