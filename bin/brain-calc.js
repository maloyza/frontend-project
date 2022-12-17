import readlineSync from 'readline-sync';
import _ from 'lodash';

let userName
let userAnswer
let result

function actionGreeting() {
    console.log('Welcome to the Brain Games!');
    userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log('What is the result of the expression?');
}

function actionQuestion() {
    const randNumbers = [_.random(1, 10), _.random(1, 10)];
    const randOperat = _.sample(['+', '-', '*']);
    result = calculations(randNumbers[0], randNumbers[1], randOperat);
    console.log(`Question: ${randNumbers[0]} ${randOperat} ${randNumbers[1]}`);
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

function actionStartGame(){
    actionGreeting();
    for(var i = 0; i < 3; i = i + 1){
        actionQuestion();
        actionAnswer();
    };
    console.log(`Congratulations, ${userName}!`);
}

function calculations(a, b, c) {
    switch(c) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
    }  
}

actionStartGame();

