// Task 1: Solve the "Add Two Numbers problem on LeetCode.
// Write a function that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node
// contains a single digit. Add the two numbers and return the sum as a linked list.
// Create a few test cases with linked lists and log the sum as a linked list.
function addTwoNumbers(l1, l2) {
    let dummyHead = {val: 0, next: null};
    let p = l1, q = l2, curr = dummyHead, carry = 0;
    while (p !== null || q !== null) {
        const x = p !== null ? p.val : 0;
        const y = q !== null ? q.val : 0;
        const sum = carry + x + y;
        carry = Math.floor(sum / 10);
        curr.next = {val: sum % 10, next: null};
        curr = curr.next;
        if (p !== null) p = p.next;
        if (q !== null) q = q.next;
    }
    if (carry > 0) {
        curr.next = {val: carry, next: null};
    }
    return dummyHead.next;
}


// Task 2: Solve the "Longest Substring Without Repeating Characters problem on LeetCode.
// Writes function that takes a string and returns the length of the longest substring without repeating characters.
// Log the length for a few test cases, including edge cases.
function lengthOfLongestSubstring(s) {
    let n = s.length, ans = 0, i = 0, j = 0, chars = new Set();
    while (i < n && j < n) {
        if (!chars.has(s[j])) {
            chars.add(s[j++]);
            ans = Math.max(ans, j - i);
        } else {
            chars.delete(s[i++]);
        }
    }
    return ans;
}


// Task 3: Solve the "Container With Most Water problern on LeetCode.
// Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point. Find two lines that together with the x-axis form a container, such that the container holds the most water.
// Log the maximum amount of water for a few test cases.
function maxArea(height) {
    let maxArea = 0, left = 0, right = height.length - 1;
    while (left < right) {
        const currentHeight = Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, currentHeight * (right - left));
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}


// Task 4: Solve the "35um" problem on LeetCode.
// Write a function that takes an array of Integers and finds all unique triplets in the array which give the sum of zero.
// Log the triplets for a few test cases, including edge cases.
function threeSum(nums) {
    const n = nums.length;
    nums.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < n - 2; ++i) {
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
            let lo = i + 1, hi = n - 1, sum = 0 - nums[i];
            while (lo < hi) {
                if (nums[lo] + nums[hi] === sum) {
                    result.push([nums[i], nums[lo], nums[hi]]);
                    while (lo < hi && nums[lo] === nums[lo + 1]) lo++; 
                    while (lo < hi && nums[hi] === nums[hi - 1]) hi--;
                    lo++;
                    hi--;
                } else if (nums[lo] + nums[hi] < sum) lo++;
                else hi--;
            }
        }
    }
    return result;
}


// Task 5: Solve the "Group Anagrams problem on LeetCode.
// Write a function that takes an array of strings and groups anagrams together.
// Log the grouped anagrams for a few test cases.
function groupAnagrams(strs) {
    const map = new Map();
    for (const str of strs) {
        const key = str.split('').sort().join('');
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }
    return Array.from(map.values());
}


