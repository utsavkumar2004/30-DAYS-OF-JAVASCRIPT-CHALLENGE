// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function outerFunction() {
    let secretVariable = "Hello, World!";
  
    return function innerFunction() {
      console.log(secretVariable);
    };
  }
  
  const myInnerFunction = outerFunction();
  myInnerFunction(); // Logs: Hello, World!

//   Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function createCounter() {
    let count = 0;
  
    return {
      increment: function() {
        count++;
      },
      getValue: function() {
        return count;
      }
    };
  }
  
  const myCounter = createCounter();
  myCounter.increment();
  console.log(myCounter.getValue()); // Logs: 1

//   Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function createUniqueIdGenerator() {
    let nextId = 0;
  
    return function generateId() {
      return ++nextId;
    };
  }
  
  const idGenerator = createUniqueIdGenerator();
  console.log(idGenerator()); // Logs: 1
  console.log(idGenerator()); // Logs: 2

//   Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
function greetUser(userName) {
    return function() {
      console.log(`Hello, ${userName}!`);
    };
  }
  
  const johnGreeting = greetUser("John");
  johnGreeting(); // Logs: Hello, John!

//   Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
function createIndexLoggers(n) {
    const loggers = [];
  
    for (let i = 0; i < n; i++) {
      loggers.push(function(index) {
        console.log(`Index: ${index}`);
      });
    }
  
    return loggers;
  }
  
  const loggers = createIndexLoggers(3);
  loggers[0](0); // Logs: Index: 0
  loggers[1](1); // Logs: Index: 1
  loggers[2](2); // Logs: Index: 2

//   Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
function createItemManager() {
    let items = [];
  
    return {
      addItem: function(item) {
        items.push(item);
      },
      removeItem: function(itemName) {
        items = items.filter(item => item !== itemName);
      },
      listItems: function() {
        console.log(items);
      }
    };
  }
  
  const itemManager = createItemManager();
  itemManager.addItem("Apple");
  itemManager.addItem("Banana");
  itemManager.listItems();

//   Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memoize(func) {
    let cache = {};
  
    return function(...args) {
      const key = JSON.stringify(args);
  
      if (!cache[key]) {
        cache[key] = func.apply(this, args);
      }
  
      return cache[key];
    };
  }
  
  function slowFunction(x, y) {
    console.log('Calculating...');
    return x * y;
  }
  
  const memoizedSlowFunction = memoize(slowFunction);
  console.log(memoizedSlowFunction(2, 3));
  console.log(memoizedSlowFunction(2, 3));

//   Task 8: Create a memoized version of a function that calculates the factorial of a number.
function memoizeFactorial() {
    let cache = {};
  
    return function factorial(n) {
      if (n === 0 || n === 1) return 1;
      if (cache[n]) return cache[n];
  
      cache[n] = n * factorial(n - 1);
      return cache[n];
    };
  }
  
  const memoizedFactorial = memoizeFactorial();
  console.log(memoizedFactorial(5));
  console.log(memoizedFactorial(5));