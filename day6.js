// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// Task 2: Access the first and last elements of the array and log them to the console.
console.log("First Element:", numbers[0]);
console.log("Last Element:", numbers[numbers.length - 1]);

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
numbers.push(6);
console.log("Updated Array after Push:", numbers);

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
numbers.pop();
console.log("Updated Array after Pop:", numbers);

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
numbers.shift();
console.log("Updated Array after Shift:", numbers);

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
numbers.unshift(0);
console.log("Updated Array after Unshift:", numbers);

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubledNumbers);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of All Numbers:", sum);

// Task 10: Use a for loop to iterate over the array and log each element to the console.
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
numbers.forEach(num => console.log(num));

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);

// Task 13: Access and log a specific element from the two-dimensional array.
console.log("Specific Element:", matrix[1][2]);
