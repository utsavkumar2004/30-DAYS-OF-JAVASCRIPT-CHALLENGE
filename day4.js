// • Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// • Task 2: Write a program to print the multiplication table of 5 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// • Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum = 0;
let count = 1;
while (count <= 10) {
    sum += count;
    count++;
}
console.log(sum);

// • Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let counta = 10;
while (counta >= 1) {
    console.log(counta);
    counta--;
}

// • Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let counti = 1;
do {
    console.log(counti);
    counti++;
} while (counti <= 5);

// • Task 6: Write a program to calculate the factorial of a number using a do...while loop.
let number = 5;
let factorial = 1;
do {
    factorial *= number;
    number--;
} while (number > 0);
console.log(factorial);

// Task 7: Write a program to print a pattern using nested for loops:

// (ignore color)

// *

// **

// ***

// ****

// *****

for (let line = 1; line <= 5; line++) {
    for (let space = 1; space < line; space++) {
        console.log(" ");
    }
    for (let star = 1; star <= 5 - line + 1; star++) {
        console.log("*");
    }
    console.log("");
}

// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}
