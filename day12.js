// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function throwError() {
    throw new Error("This is an intentional error.");
}

try {
    throwError();
} catch (error) {
    console.error(error.message);
}

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
function divideNumbers(num1, num2) {
    if (num2 === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return num1 / num2;
}

try {
    const result = divideNumbers(10, 0);
    console.log(result);
} catch (error) {
    console.error(error.message);
}

// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
try {
    const result = divideNumbers(10, 0); // This will throw an error
    console.log(result);
} catch (error) {
    console.error(error.message);
} finally {
    console.log("This block executes after try and catch.");
}
// Task 4: Create a custom error class that extends the built-in Error class. Thrily an instance of this custom error in a function and handle it using a try-catch block.
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}
function riskyOperation() {
    const errorOccurred = true;
    if (errorOccurred) {
        throw new CustomError("Something went wrong in the risky operation.");
    }
    return "Operation succeeded.";
}

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
function validateInput(input) {
    if (typeof input !== 'string' || input.trim() === '') {
        throw new ValidationError("Input cannot be empty.");
    }
    return true;
}

// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
const randomPromise = new Promise((resolve, reject) => {
    Math.random() > 0.5 ? resolve("Success") : reject(new Error("Failure"));
});

randomPromise.then(() => console.log("Resolved"))
             .catch(error => console.error(error.message));

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
async function handleAsyncError() {
    try {
        await randomPromise;
        console.log("Resolved");
    } catch (error) {
        console.error(error.message);
    }
}

handleAsyncError();

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using.catch(). Log an appropriate error message to the console.
fetch('https://invalid-url.com')
    .then(response => response.json())
    .catch(error => console.error('Fetch failed:', error));

// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
async function fetchData() {
    try {
        const response = await fetch('https://invalid-url.com');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Fetch failed:', error);
    }
}

fetchData();

