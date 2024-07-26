// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.// main.js
import { add } from './addNumbers.js';

console.log(add(5, 10));

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
const person = {
    name: "John Doe",
    age: 30,
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };
  
  export default person;

//   Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
export function add(a, b) {
    return a + b;
  }
  
  export function subtract(a, b) {
    return a - b;
  }

//   Task 4: Create a module that exports a single function using default export. Import and use this function in another script.

function sayHello(name) {
    console.log(`Hello, ${name}!`);
  }
  
  export default sayHello;

import sayHello from './sayHello.js';

sayHello('Alice');

// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

const PI = Math.PI;
const E = Math.E;

export const constantPI = PI;
export const constantE = E;

export function calculateArea(radius) {
  return PI * radius ** 2;
}

export function calculateExponential(base, exponent) {
  return base ** exponent;
}

import * as mathModule from './constantsAndFunctions.js';

console.log(mathModule.constantPI);
console.log(mathModule.calculateArea(5));

// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
npm install lodash

// main.js
import _ from 'lodash';

let array = [1];
array.push(_.last(array));
console.log(array); 

// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
npm install axios

// main.js
import axios from 'axios';

axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

//   Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.
npm install --global webpack webpack-cli

// webpack.config.js
module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: __dirname + '/dist'
    },
  };

  npx webpack






  
  
