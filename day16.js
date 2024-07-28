// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
  
  console.log(factorial(5)); // Example usage
  
// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  console.log(fibonacci(10));
  
// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
function sumArray(arr, index = 0) {
    if (index >= arr.length) return 0;
    return arr[index] + sumArray(arr, index + 1);
  }
  
  const myArray0 = [1, 2, 3, 4];
  console.log(sumArray(myArray0));
  
// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
function maxElement(arr, index = 0, max = -Infinity) {
    if (index >= arr.length) return max;
    if (arr[index] > max) max = arr[index];
    return maxElement(arr, index + 1, max);
  }
  
  const myArray1 = [1, 2, 3, 4];
  console.log(maxElement(myArray1));
  
// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
function reverseString(str, index = str.length - 1) {
    if (index < 0) return "";
    return str.charAt(index) + reverseString(str, index - 1);
  }
  
  console.log(reverseString("Hello"));
  
// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
function isPalindrome(str, start = 0, end = str.length - 1) {
    if (start >= end) return true;
    if (str[start] !== str[end]) return false;
    return isPalindrome(str, start + 1, end - 1);
  }
  console.log(isPalindrome("radar"));
  
// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1;
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, left, mid - 1);
    return binarySearch(arr, target, mid + 1, right);
  }
  
  const sortedArray = [1, 2, 3, 4, 5];
  console.log(binarySearch(sortedArray, 3));
  
// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
function countOccurrences(arr, target, index = 0, count = 0) {
    if (index >= arr.length) return count;
    if (arr[index] === target) count++;
    return countOccurrences(arr, target, index + 1, count);
  }
  
  const myArray = [1, 2, 3, 2, 1];
  console.log(countOccurrences(myArray, 2));
  
// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
class Node {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  function inOrderTraversal(node, result = []) {
    if (!node) return result;
    inOrderTraversal(node.left, result);
    result.push(node.value);
    inOrderTraversal(node.right, result);
    return result;
  }
  
  const root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  
  console.log(inOrderTraversal(root));
  
// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
function depthOfBinaryTree(node, depth = 0) {
    if (!node) return depth;
    const leftDepth = depthOfBinaryTree(node.left, depth + 1);
    const rightDepth = depthOfBinaryTree(node.right, depth + 1);
    return Math.max(leftDepth, rightDepth);
  }
  
  console.log(depthOfBinaryTree(root));
  