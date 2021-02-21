//https://leetcode.com/problems/maximum-subarray/description/

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.



interface NumberConstructor { readonly MIN_SAFE_INTEGER: number; }

function maxSubArray(arr: number[]) {
    let maxSoFar: number = Number.MIN_SAFE_INTEGER;
    let maxEndingHere: number = 0;
    for (let i = 0; i < arr.length; i++) {
        maxEndingHere = maxEndingHere + arr[i];
        if (maxSoFar < maxEndingHere) {
            maxSoFar = maxEndingHere;
        }
        if (maxEndingHere < 0) {
            maxEndingHere = 0;
        }
    }
    return maxSoFar;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));