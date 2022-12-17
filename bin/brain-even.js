import readlineSync from 'readline-sync';
import _ from 'lodash';

let userName;
let randNumber;
let result;

function actionGreeting() {
    console.log('Welcome to the Brain Games!');
    userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

function actionQuestion() {
    randNumber = _.random(1, 10);
    if(randNumber % 2 == 0) result = 'yes';
    else result = 'no'
    console.log(`Question: ${randNumber}`);
}

//todo
function actionAnswer() {
    let userAnswer = readlineSync.question('Your answer: ');
    if(userAnswer == result){
        return console.log('Correct!');
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was "${result}". 
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