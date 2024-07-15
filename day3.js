// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
function checkNumber(num) {
    if (num > 0) {
      console.log(num + " is positive");
    } else if (num < 0) {
      console.log(num + " is negative");
    } else {
      console.log(num + " is zero");
    }
  }

//   Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
function checkEligibility(age) {
    if (age >= 18) {
      console.log("You are eligible to vote.");
    } else {
      console.log("You are not eligible to vote.");
    }
  }

//   Task 3: Write a program to find the largest of three numbers using nested if-else statements.
function findLargest(a, b, c) {
    if (a >= b) {
      if (a >= c) {
        console.log(a + " is the largest");
      } else {
        console.log(c + " is the largest");
      }
    } else {
      if (b >= c) {
        console.log(b + " is the largest");
      } else {
        console.log(c + " is the largest");
      }
    }
  }

//   Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
function getDayOfWeek(day) {
    switch(day) {
      case 1:
        console.log("Sunday");
        break;
      case 2:
        console.log("Monday");
        break;
      case 3:
        console.log("Tuesday");
        break;
      case 4:
        console.log("Wednesday");
        break;
      case 5:
        console.log("Thursday");
        break;
      case 6:
        console.log("Friday");
        break;
      case 7:
        console.log("Saturday");
        break;
      default:
        console.log("Invalid day number");
    }
  }

//   Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F) based on a score and log the grade to the console.
function getGrade(score) {
    switch (true) {
      case (score >= 90):
        console.log("A");
        break;
      case (score >= 80):
        console.log("B");
        break;
      case (score >= 70):
        console.log("C");
        break;
      case (score >= 60):
        console.log("D");
        break;
      default:
        console.log("F");
    }
  }

//   Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
function checkEvenOdd(num) {
    console.log(num % 2 === 0 ? num + " is even" : num + " is odd");
  }

//   Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      console.log(year + " is a leap year");
    } else {
      console.log(year + " is not a leap year");
    }
  }