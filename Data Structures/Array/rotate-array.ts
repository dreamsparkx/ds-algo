// https://leetcode.com/problems/rotate-array/description/
// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Follow up:

// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?
 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

function swap(arr: number[], i: number, j: number) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

function reverse(arr: number[], low: number, high: number) {
    for (let i = low,j = high; i < j; i++, j--) {
        swap(arr, i, j);
    }
};

function rotateArr(arr: number[], k: number) {
    // Reverse the last `k` elements
    reverse(arr, arr.length - k, arr.length - 1);
    // Reverse the first `n-k` elements
    reverse(arr, 0, arr.length - k - 1);
    // Reverse the whole array
    reverse(arr, 0, arr.length - 1);
    return arr;
};

console.log(rotateArr([1,2,3,4,5,6,7], 3));
