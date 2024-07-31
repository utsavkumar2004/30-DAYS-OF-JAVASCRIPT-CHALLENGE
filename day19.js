// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.
const text1 = "I love JavaScript. JavaScript is my favorite language.";
const regex1 = /JavaScript/g;
const matches1 = text1.match(regex1);
console.log(matches1);

// Task 2: Write a regular expression to match all digits in a string. Log the matches.
const text2 = "My phone number is 123-456-7890.";
const regex2 = /\d+/g;
const matches2 = text2.match(regex2);
console.log(matches2);

// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
const text3 = "This Is A Test Sentence.";
const regex3 = /\b[A-Z]\w*\b/g;
const matches3 = text3.match(regex3);
console.log(matches3);

// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
const text4 = "The year is 2024 and the time is 15:30.";
const regex4 = /(\d+)/g;
const matches4 = text4.match(regex4);
console.log(matches4);

// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.
const phoneNumber = "(123) 456-7890";
const regex5 = /^(\(\d{3}\)) (\d{3})-(\d{4})$/;
const match5 = phoneNumber.match(regex5);
if (match5) {
    console.log(`Area Code: ${match5[1]}, Central Office Code: ${match5[2]}, Line Number: ${match5[3]}`);
}

// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
const email = "example@example.com";
const regex6 = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
const match6 = email.match(regex6);
if (match6) {
    console.log(`Username: ${match6[1]}, Domain: ${match6[2]}`);
}

// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
const text7 = "Hello World!";
const regex7 = /^\b[a-zA-Z]+\b/;
const match7 = text7.match(regex7);
console.log(match7 ? match7[0] : "No match");

// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
const text8 = "World! Goodbye!";
const regex8 = /\b[a-zA-Z]+\b$/;
const match8 = text8.match(regex8);
console.log(match8 ? match8[0] : "No match");

// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
const password = "Passw0rd!";
const regex9 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const isValid9 = regex9.test(password);
console.log(isValid9 ? "Password is valid" : "Password is not valid");

// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.
const url = "https://www.example.com";
const regex10 = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$/;
const isValid10 = regex10.test(url);
console.log(isValid10 ? "URL is valid" : "URL is not valid");
