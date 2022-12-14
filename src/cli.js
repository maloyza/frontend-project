import readlineSync from 'readline-sync'

function findUserName() {
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
}

export {findUserName};