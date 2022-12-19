import readlineSync from 'readline-sync';
import _ from 'lodash';

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

export function startGameBrain_Progression() {
    actionGreeting();
    console.log('What number is missing in the progression?');
    for(var i = 0; i < 3; i = i + 1){
        actionQuestion_Progression();
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
    const divisibleNumbers = [
        randomEvenNumber(1, 75),
        randomEvenNumber(1, 75)
    ];
    const minNum = Math.min(...divisibleNumbers);
    result = maxCommonDivisor(divisibleNumbers, minNum)

    console.log(`Question: ${divisibleNumbers[0]} ${divisibleNumbers[1]}`)
}

function actionQuestion_Progression() {
    let randomArr = [];
    let randomLength = _.random(5,10);
    let randomStart = _.random(1,25);
    let randomProgression = _.random(2,4);
 
    randomArr[0] = randomStart;
    while(randomArr.length < randomLength){
       randomArr.push(randomArr[randomArr.length - 1] + randomProgression)
    }
 
    let index = _.random(0, randomArr.length - 1);
    result = randomArr[index]
    randomArr[index] = '..' 
 
    console.log(`Question: ${randomArr.join(' ')}`);
 }

function calculations(a, b, c) {
    switch(c) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
    }  
}

function maxCommonDivisor(numArr, minNum) {
    for(let i = minNum; i > 0; i = i - 1) {
        if(numArr[0] % i == 0 && numArr[1] % i == 0){
            return i
        }
    };
    return 0;
}

function randomEvenNumber(min, max) {
    let x = _.random(min, max);
    return x % 2 == 0 ? x : randomEvenNumber(min, max);
}