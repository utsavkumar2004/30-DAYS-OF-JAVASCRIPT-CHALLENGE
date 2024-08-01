// Task 1: Write a script to save a string value to localstorage and retrieve it. Log the retrieved value.
// Saving a string to localStorage
localStorage.setItem('myString', 'Hello World');

// Retrieving and logging the string
const myString = localStorage.getItem('myString');
console.log(myString);

// Task 2: Write a script to save an object to localstorage by converting it to a JSDN string. Retrieve and parse the object, then log it.
// Saving an object to localStorage
const myObject = { name: 'John Doe', age: 30 };
localStorage.setItem('myObject', JSON.stringify(myObject));

// Retrieving and parsing the object
const retrievedObject = JSON.parse(localStorage.getItem('myObject'));
console.log(retrievedObject);

// Task 3: Create a simple form that saves user input (eg, name and email) to JocalStorage when submitted. Retrieve and display the saved data on page loed.
document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    // Save to localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
  
    // Display saved data
    document.getElementById('displayData').innerHTML = `
      Name: ${localStorage.getItem('name')}<br>
      Email: ${localStorage.getItem('email')}
    `;
  });
  
// Task 4: Write a script to remove an item from IscalStorage. Log the localstorage content before and after removal.
// Logging localStorage content before removal
console.log(localStorage);
// Removing an item
localStorage.removeItem('myString');

// Logging localStorage content after removal
console.log(localStorage);

// Task 5: Write a script to save a string value to Storage and retrieve it. Log the retrieved value.
// Saving a string to sessionStorage
sessionStorage.setItem('mySessionString', 'Hello Session');

// Retrieving and logging the string
const mySessionString = sessionStorage.getItem('mySessionString');
console.log(mySessionString); // Outputs: Hello Session

// Task 6: Write a script to save an object to sessionstorage by converting it to a JSON string. Retrieve and parse the object, then log it.
// Saving an object to sessionStorage
const mySessionObject = { message: 'Hello Session' };
sessionStorage.setItem('mySessionObject', JSON.stringify(mySessionObject));

// Retrieving and parsing the object
const retrievedSessionObject = JSON.parse(sessionStorage.getItem('mySessionObject'));
console.log(retrievedSessionObject);

// Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.
document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    // Save to sessionStorage
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('email', email);
  
    // Display saved data
    document.getElementById('displayData').innerHTML = `
      Name: ${sessionStorage.getItem('name')}<br>
      Email: ${sessionStorage.getItem('email')}
    `;
  });
  
// Task 8: Write a script to remove an item from sessionStorage Log the sessionstorage content before and after removal.
// Logging sessionStorage content before removal
console.log(sessionStorage);
// Removing an item
sessionStorage.removeItem('mySessionString');
// Logging sessionStorage content after removal
console.log(sessionStorage);

// Task 9: Write a function that accepts a key and a value, and saves the value to both Tock Storage and sessionStorage. Retrieve and log the values from both storage mechanisms.
function saveToBoth(key, value) {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
  }
  saveToBoth('testKey', 'Test Value');
  console.log(localStorage.getItem('testKey')); // Should output: Test Value
  console.log(sessionStorage.getItem('testKey')); // Should output: Test Value
  
// Task 10: Write a function that clears all data from both localStorage and sessimistorage Verify that both storages are empty.
function clearAll() {
    localStorage.clear();
    sessionStorage.clear();
  }
  clearAll();
  // Verifying both storages are empty
  console.log(localStorage.length === 0 && sessionStorage.length === 0); // Should output: true
  

