// https://leetcode.com/problems/contains-duplicate/description/

// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true

function containsDuplicate(arr: number[]) {
    let hash: {
        [key: number]: boolean
    } = {};
    let duplicate: boolean = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in hash) {   //already in the arr
            duplicate = true;
            break;
        }
        hash[arr[i]] = true;
    };
    return duplicate;
};

console.log(containsDuplicate([1,2,3,1]));
