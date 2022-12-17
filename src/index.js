import readlineSync from 'readline-sync';
import _ from 'lodash';

let userName
let userAnswer
let randNumber
let result

export function startGameBrain_Even() {
    actionGreeting();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for(var i = 0; i < 3; i = i + 1){
        actionQuestion_Even();
        actionAnswer();
    };
    console.log(`Congratulations, ${userName}!`);
}

export function startGameBrain_Calc() {
    actionGreeting();
    console.log('What is the result of the expression?');
    for(var i = 0; i < 3; i = i + 1){
        actionQuestion_Calc();
        actionAnswer();
    };
    console.log(`Congratulations, ${userName}!`);
}

function actionGreeting() {
    console.log('Welcome to the Brain Games!');
    userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
}

function actionAnswer() {
    userAnswer = readlineSync.question('Your answer: ');
    if(userAnswer == result){
        console.log('Correct!')
    } else{
        console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${result}". 
Let's try again, ${userName}!`)
        process.exit();
    }
}

function actionQuestion_Even() {
    randNumber = _.random(1, 10);
    if(randNumber % 2 == 0) result = 'yes';
    else result = 'no'
    console.log(`Question: ${randNumber}`);
}

function actionQuestion_Calc() {
    const randNumbers = [_.random(1, 10), _.random(1, 10)];
    const randOperat = _.sample(['+', '-', '*']);
    result = calculations(randNumbers[0], randNumbers[1], randOperat);
    console.log(`Question: ${randNumbers[0]} ${randOperat} ${randNumbers[1]}`);
}

function calculations(a, b, c) {
    switch(c) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
    }  
}

