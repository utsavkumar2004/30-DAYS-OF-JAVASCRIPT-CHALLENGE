// Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode
// Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
// Log the median for a few test cases, including edge cases.
function findMedianSortedArrays(nums1, nums2) {
    const merged = mergeArrays(nums1, nums2);
    const len = merged.length;
    return len % 2 === 0 ? (merged[Math.floor(len / 2)] + merged[Math.floor(len / 2) - 1]) / 2.0 : merged[Math.floor(len / 2)];
}

function mergeArrays(nums1, nums2) {
    const result = [];
    let i = 0, j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) {
            result.push(nums1[i++]);
        } else {
            result.push(nums2[j++]);
        }
    }
    while (i < nums1.length) {
        result.push(nums1[i++]);
    }
    while (j < nums2.length) {
        result.push(nums2[j++]);
    }
    return result;
}

// Task 2: Solve the Merge Sorted Lists problem on LeetCode.
// Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into one sorted Unked list.
// Create a few test cases with linked lists and log the merged list.
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists) {
    if (lists.length === 0) return null;
    if (lists.length === 1) return lists[0];

    const mid = Math.floor(lists.length / 2);
    const left = mergeKLists(lists.slice(0, mid));
    const right = mergeKLists(lists.slice(mid));

    return mergeTwoLists(left, right);
}

function mergeTwoLists(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;

    if (l1.val > l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}

// Task 3: Solve the Trapping Rain Water problem on LeetCode.
// Write a function that takes an array of non-negative integers representing an elevation map where the width of each ber is 1, and computes how much
// water it can trap after raining, 
// Log the amount of trapped water for a few test cases.
function trap(height) {
    let left = 0, right = height.length - 1, maxLeft = 0, maxRight = 0, ans = 0;
    while (left < right) {
        if (height[left] <= height[right]) {
            if (maxLeft <= height[left]) {
                ans += maxLeft - height[left];
                maxLeft = height[left];
            }
            left++;
        } else {
            if (maxRight <= height[right]) {
                ans += maxRight - height[right];
                maxRight = height[right];
            }
            right--;
        }
    }
    return ans;
}

// Task 4: Solve the "H-Queens" problem on LeetCode
// Write a function that places in queens on an men chessboard such that no two queens attack each other, and returns all distinct solutions to the n-queens
// puzzle. 
// Log the distinct solutions for a few test cases.
function solveNQueens(n) {
    const res = [];
    backtrack(res, [], n, 0);
    return res;
}

function backtrack(res, path, n, row) {
    if (path.length === n) {
        res.push([...path]);
        return;
    }
    for (let col = 0; col < n; col++) {
        if (isSafe(path, row, col)) {
            path.push(col);
            backtrack(res, path, n, row + 1);
            path.pop();
        }
    }
}

function isSafe(path, row, col) {
    for (let i = 0; i < path.length; i++) {
        if (path[i] === col || Math.abs(path[i] - col) === Math.abs(i - row)) {
            return false;
        }
    }
    return true;
}

// Task 5: Solve the Word Ladder problem on LeetCode.
// Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence from the begin word to the end word, such that only one letter can be changed at a time and each transformed word must exist in the word list.
// Log the length of the shortest transformation sequence for a few test cases.
function ladderLength(beginWord, endWord, wordList) {
    const set = new Set(wordList);
    if (!set.has(endWord)) return 0;

    const queue = [[beginWord, 1]];
    while (queue.length > 0) {
        const [word, level] = queue.shift();
        if (word === endWord) return level;
        for (const nextWord of getNextWords(word, set)) {
            if (nextWord !== endWord) {
                queue.push([nextWord, level + 1]);
                set.delete(nextWord); 
            }
        }
    }
    return 0;
}

function getNextWords(word, set) {
    const nextWords = [];
    for (let i = 0; i < word.length; i++) {
        const originalChar = word.charAt(i);
        for (const c of 'abcdefghijklmnopqrstuvwxyz'.split('')) {
            if (c === originalChar) continue;
            const newWord = word.substring(0, i) + c + word.substring(i + 1);
            if (set.has(newWord)) {
                nextWords.push(newWord);
            }
        }
    }
    return nextWords;
}

