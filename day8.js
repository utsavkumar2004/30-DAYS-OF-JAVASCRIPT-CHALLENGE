// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
const name = "John Doe";
const age = 30;

console.log(`The person's name is ${name} and they are ${age} years old.`);

// Task 2: Create a multi-line string using template literals and log it to the console.
console.log(`
    This is a multi-line string.
    It spans across multiple lines.
    `);

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const numbers = [10, 20, 30];
const [first, second] = numbers;
console.log(first, second);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald"
  };
  
  const { title, author } = book;
  console.log(title, author);

//   Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4, 5];
console.log(newArray);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...args) {
    return args.reduce((acc, current) => acc + current, 0);
  }
  
  console.log(sum(1, 2, 3));

//   Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function multiply(a, b = 1) {
    return a * b;
  }
  
  console.log(multiply(5));
  console.log(multiply(5, 2));


// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const person = {
    firstName: "Jane",
    lastName: "Doe",
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    greet() {
      console.log(`Hello, ${this.getFullName()}!`);
    }
  };
  
  person.greet();

//   Task 9: Create an object with computed property names based on variables and log the object to the console.
const propertyName = "age";
const person = {
  [propertyName]: 25,
  name: "Alice"
};

console.log(person.age);
  

