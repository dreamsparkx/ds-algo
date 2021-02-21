//https://leetcode.com/problems/move-zeroes/description/
// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

function moveZeroes(arr: number[]) {
    let temp: number;
    let count: number = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            temp = arr[count];
            arr[count] = arr[i];
            arr[i] = temp;
            count = count + 1;
        }
    }
    return arr;
};

console.log(moveZeroes([0,1,0,3,12]));
