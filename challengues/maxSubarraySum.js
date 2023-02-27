// Given an array of integers and a number, write a function called maxSubarraySum, 
// which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below, 
// [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

maxSubarraySum([100, 200, 300, 400], 2) // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)  // 39 
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) // 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) // 5
maxSubarraySum([2, 3], 3) // null

// Constraints:

// Time Complexity - O(N)

// Space Complexity - O(1)


function maxSubarraySum(arr, grabber) {

    let sum = 0;
    for (let i = 0; i < grabber; i++) {
        sum = arr[i] + sum;
    }
    let result = sum;

    for (let i = grabber; i < arr.length; i++) {
        let temp = i - grabber;
        sum = (sum - arr[temp]) + arr[i];
        if (sum > result) {
            result = sum;
        }

    }
    console.log(result);
    if (result === NaN) result = null;
    return result;

}