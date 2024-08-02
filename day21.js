// Task 1: Solve the Two Sum problem on LeetCode.
// Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
// Log the indices for a few test cases.
function twoSum(nums, target) {
    const numMap = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in numMap) {
            return [numMap[complement], i];
        }
        numMap[nums[i]] = i;
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));       


// Task 2: Solve the "Reverse Integer" problem on LeetCode.
// Write a function that takes an integer and returns it with its digits reversed.
// Handle edge cases like negative numbers and numbers ending in zero
// Log the reversed integers for a few test cates.
function reverseInteger(n) {
    let sign = n < 0 ? '-' : '';
    let numStr = Math.abs(n).toString();
    let reversedNumStr = numStr.split('').reverse().join('');
    return parseInt(sign + reversedNumStr);
}

console.log(reverseInteger(-12345));   
console.log(reverseInteger(12345)); 
    

// Task 3: Salve the Palindrome Number problem on LeetCode
// Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
// Log the result for a few test cases, including edge cases like negative numbers.
function isPalindrome(x) {
    if (x < 0 || (x % 10 == 0 && x != 0)) {
        return false;
    }
    let revertedNumber = 0;
    while (x > revertedNumber) {
        revertedNumber = revertedNumber * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return x === revertedNumber || x === Math.floor(revertedNumber / 10);
}

console.log(isPalindrome(121));   
console.log(isPalindrome(-121));   
console.log(isPalindrome(12321));   


// Task 4: Solve the "Merge Two Sorted Lists problem on LeetCode.
// Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    if (l1) current.next = l1;
    if (l2) current.next = l2;
    return dummy.next;
}

// Task 5: Solve the "Valid Parentheses problen on LeetCode.
// Wite a function that takes a string containing just the characters(,),CJ, I and T. and determines if the input string is valid.
// A string is valid if open brackets are closed in the correct order. Log the result for a few test cases.
function isValid(s) {
    const stack = [];
    const mapping = { ')': '(', '}': '{', ']': '[' };
    for (const char of s) {
        if (mapping[char]) {
            stack.push(char);
        } else if (!stack.length || mapping[char] !== stack.pop()) {
            return false;
        }
    }
    return !stack.length;
}

console.log(isValid("()[]{}"));
console.log(isValid("["));           
console.log(isValid("([)]"));       




