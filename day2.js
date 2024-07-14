// Task 1: Write a program to add two numbers and log the result to the console.
function addNumbers(a, b) {
    const sum = a + b;
    console.log(`The sum of ${a} and ${b} is ${sum}`);
  }
  
  addNumbers(5, 3);

//   Task 2: Write a program to subtract two numbers and log the result to the console.
function subtractNumbers(a, b) {
    const difference = a - b;
    console.log(`The difference between ${a} and ${b} is ${difference}`);
  }
  
  subtractNumbers(5, 3);

//   Task 3: Write a program to multiply two numbers and log the result to the console.
function multiplyNumbers(a, b) {
    const product = a * b;
    console.log(`The product of ${a} and ${b} is ${product}`);
  }
  
  multiplyNumbers(5, 3);

//   Task 4: Write a program to divide two numbers and log the result to the console.
function divideNumbers(a, b) {
    if (b === 0) {
      console.log("Error: Division by zero is not allowed.");
      return;
    }
    const quotient = a / b;
    console.log(`The quotient of ${a} divided by ${b} is ${quotient}`);
  }
  
  divideNumbers(15, 3); 

//   Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
function findRemainder(a, b) {
    const remainder = a % b;
    console.log(`The remainder of ${a} divided by ${b} is ${remainder}`);
  }
  
  findRemainder(10, 3);

//   Task 6: Use the operator to add a number to a variable and log the result to the console.
let num = 5;
num += 3;
console.log(num);

// Task 7: Use the operator to subtract a number from a variable and log the result to the console.
let num = 5;
num -= 3;
console.log(num);

// Task 8: Write a program to compare two numbers using 
// Task 9: Write a program to compare two numbers using> and and < and log the result to the console. and log the result to the console.
function compareNumbers(a, b) {
    console.log(`${a} > ${b}: ${a > b}`); // Using >
    console.log(`${a} < ${b}: ${a < b}`); // Using <
  }
  
  compareNumbers(5, 3);

//   Task 10: Write a program to compare two numbers using and and log the result to the console.
function equalityCheck(a, b) {
    console.log(`${a} == ${b}: ${a == b}`); // Loose equality
    console.log(`${a} === ${b}: ${a === b}`); // Strict equality
    console.log(`${a} != ${b}: ${a != b}`); // Loose inequality
    console.log(`${a} !== ${b}: ${a !== b}`); // Strict inequality
  }
  
  equalityCheck(5, "5");

//   Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
  function andOperatorExample() {
    const condition1 = true;
    const condition2 = false;
    console.log(condition1 && condition2); // Logs false
  }
  
  andOperatorExample();

//   Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
function orOperatorExample() {
    const condition1 = true;
    const condition2 = false;
    console.log(condition1 || condition2);
  }
  
  orOperatorExample();

//   Task 13: Write a program that uses the operator to negate a condition and log the result, to the console.
function negationOperatorExample() {
    const condition = true;
    console.log(!condition);
  }
  
  negationOperatorExample();

//   Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
function checkPositiveNegative(num) {
    const result = num > 0 ? "Positive" : "Negative";
    console.log(`The number ${num} is ${result}`);
  }
  
  checkPositiveNegative(-5);