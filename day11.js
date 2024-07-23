// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const resolveWithMessage = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved!");
    }, 2000);
  });
  
  resolveWithMessage.then(message => console.log(message));
  
// Task 2: Create a promise that rejects with an error mess After a 2-second timeout and handle the error using catch().
const rejectWithError = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Promise rejected!"));
    }, 2000);
  });
  
  rejectWithError.catch(error => console.error(error.message));
  
// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
const fetchSimulatedServerData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('First data fetched');
        resolve();
      }, 1000);
    });
  };
  
  fetchSimulatedServerData()
    .then(() => console.log('Second data fetched'))
    .then(() => console.log('Final data fetched'))
    .catch(error => console.error(error));
  
// Task 4: Write an async function that waits for a promise to resolve and then los the resolved value.
async function logResolvedValue() {
    const result = await new Promise(resolve => setTimeout(() => resolve('Resolved'), 2000));
    console.log(result);
  }
  
  logResolvedValue();
  
// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
async function handleRejectedPromise() {
    try {
      await new Promise((_, reject) => setTimeout(() => reject(new Error('Error')), 2000));
    } catch (error) {
      console.error(error.message);
    }
  }
  
  handleRejectedPromise();
  
// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Fetch error:', error));

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  
  fetchData();
  
// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json()),
    fetch('https://jsonplaceholder.typicode.com/posts/2').then(res => res.json())
  ]).then(([post1, post2]) => {
    console.log(post1, post2);
  }).catch(error => console.error('All fetches failed:', error));
  
// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
Promise.race([
    fetch('https://jsonplaceholder.typicode.com/posts/slow').then(res => res.json()),
    fetch('https://jsonplaceholder.typicode.com/posts/fast').then(res => res.json())
  ]).then(data => console.log(data)).catch(error => console.error('Race failed:', error));
  
