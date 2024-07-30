// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function selectionSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < len; j++)
            if (arr[j] < arr[minIdx])
                minIdx = j;
        let temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

// Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function quickSort(arr, low, high) {
    if (low < high) {
        let pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = (low - 1);
    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target)
            return i;
    }
    return -1; 
}

// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.
function binarySearch(arr, target) {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (target === arr[mid])
            return mid;
        else if (target < arr[mid])
            high = mid - 1;
        else
            low = mid + 1;
    }
    return -1;
}

// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.
function countCharacterOccurrences(str) {
    const charCountMap = {};
    for (const char of str) {
        charCountMap[char] = (charCountMap[char] || 0) + 1;
    }
    return charCountMap;
}

// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
function longestSubstringWithoutRepeatingCharacters(str) {
    const seen = new Set();
    let left = 0, right = 0, maxLength = 0;
    let result = '';
    while (right < str.length) {
        if (!seen.has(str[right])) {
            seen.add(str[right++]);
            maxLength = Math.max(maxLength, right - left);
            result = str.substring(left, right);
        } else {
            seen.delete(str[left++]);
        }
    }
    return result;
}

// Task 8: Write a function to rotate an array by k positions. Log the rotated array.
function rotateArray(arr, k) {
    k %= arr.length;
    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, arr.length - 1);
}

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]; // ES6 destructuring assignment
        start++;
        end--;
    }
}

// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.
function mergeSortedArrays(arr1, arr2) {
    const result = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i++]);
        } else {
            result.push(arr2[j++]);
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i++]);
    }
    while (j < arr2.length) {
        result.push(arr2[j++]);
    }
    return result;
}

// Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.
function fibonacciSequence(n) {
    const fib = new Array(n).fill(0);
    fib[0] = 1;
    fib[1] = 1;
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

// Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.
function knapSack(W, wt, val, n) {
    const dp = Array.from({length: n + 1}, () => new Array(W + 1).fill(0));
    for (let i = 0; i <= n; i++) {
        for (let w = 0; w <= W; w++) {
            if (i === 0 || w === 0)
                dp[i][w] = 0;
            else if (wt[i - 1] <= w)
                dp[i][w] = Math.max(val[i - 1] + dp[i - 1][w - wt[i - 1]], dp[i - 1][w]);
            else
                dp[i][w] = dp[i - 1][w];
        }
    }
    return dp[n][W];
}
