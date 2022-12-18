import readlineSync from 'readline-sync';
import _ from 'lodash';

let maxNum
let minNum
let userName
let userAnswer
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

export function startGameBrain_gcd() {
    actionGreeting();
    console.log('Find the greatest common divisor of given numbers.');
    for(var i = 0; i < 3; i = i + 1){
        actionQuestion_gcd();
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
    const randNumber = _.random(1, 100);
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

function actionQuestion_gcd() { 
    const divisibleNumbers = [_.random(1, 25), _.random(26, 50)];

    determiningMaxMinNum(divisibleNumbers)

    for(let i = minNum; i > 0; i = i - 1){
        if(maxNum % minNum == 0){
            result = minNum
        } else if(maxNum % i == 0 && minNum % i == 0){
            result = i
            break
        }
    };

    console.log(`${divisibleNumbers[0]} ${divisibleNumbers[1]}`)
}

function calculations(a, b, c) {
    switch(c) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
    }  
}

function determiningMaxMinNum(arrDivNum) {
    if(arrDivNum[0] > arrDivNum[1]){
        maxNum = arrDivNum[0];
        minNum = arrDivNum[1];
    } else {
        maxNum = arrDivNum[1];
        minNum = arrDivNum[0];
    }
};

