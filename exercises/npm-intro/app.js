const readLine = require("readline-sync")
const doMath = require("./myOtherFunctions.js")
//const answer = readLine.question("What is your dog's name?")

const num1 = readLine.question("What is the first number?")
    console.log("got it!")
const num2 = readLine.question("what is your second number?")
    console.log("sounds good")

let operations = ['sum', 'subtract', 'multiply', 'divide', ]
    const userAnswer = readLine.keyInSelect(operations, 'Which operation?');
if(userAnswer === 0)
  console.log(doMath.operationFunctions.sum(num1,num2));