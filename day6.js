// • Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
      console.log(`${num} is even.`);
    } else {
      console.log(`${num} is odd.`);
    }
  }

//   • Task 2: Write a function to calculate the square of a number and return the result.
function calculateSquare(num) {
    return num * num;
  }
  console.log(calculateSquare(5)); 

//    • Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const maxOfTwo = (a, b) => {
    const result = Math.max(a, b);
    console.log(`The maximum is ${result}.`);
  };
  maxOfTwo(3, 5);

//   • Task 4: Write a function expression to concatenate two strings and return the result.
const concatStrings = (str1, str2) => {
    return str1 + str2;
  };
  console.log(concatStrings('Hello', ' World'));

//   • Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const sumNumbers = (a, b) => a + b;
console.log(sumNumbers(2, 3));

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const containsCharacter = (str, char) => str.includes(char);
console.log(containsCharacter('hello world', 'o'));

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function multiply(a, b = 1) {
    return a * b;
  }
  
  console.log(multiply(4));
  console.log(multiply(4, 2));

//   Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greet(name, age = 30) {
    return `Hello, ${name}. You are ${age} years old.`;
  }
  console.log(greet('Alice'));
  console.log(greet('Bob', 22));

//   Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function callNtimes(func, n) {
    for (let i = 0; i < n; i++) {
      func();
    }
  }
  callNtimes(() => console.log('Hello'), 3);

//   Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function applyFunctionsSequentially(func1, func2, value) {
    const result = func1(value);
    return func2(result);
  }
  const double = x => x * 2;
  const increment = x => x + 1;
  
  console.log(applyFunctionsSequentially(double, increment, 5));