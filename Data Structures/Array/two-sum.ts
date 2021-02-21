// https://leetcode.com/problems/two-sum/description/
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].


function twoSum(nums: number[], target: number) {
    const hash: {
        [key: number]: number
    } = {};
    const result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        let num: number = nums[i];
        let requiredNum: number = target - num;
        if (requiredNum in hash) {    //found pair
            result.push(hash[requiredNum]);
            result.push(i);
        } else {
            hash[num] = i;
        }
    }
    return result;
};

console.log(twoSum([3,3], 6));