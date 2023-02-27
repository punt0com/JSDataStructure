/*
SLIDING WINDOW

this pattern involved creating a 
window which can either be an array or 
number from one position to another

depending on a certain condition,
the window either increases or closes (and a
new window is created)

Very useful for keeping track os a subset of 
data in an array/string etc.
*/

/*
write a function called maxSubarraySum which accepts
an array of integers and a number called n.The function 
should calculate the maximum sum of n consecutive elements 
in the array.
*/

//solution before the course
function maxSubarraySumMine(arr, n) {
    let biggestValue = 0;
    let j = 0;

    for (let i = 0; i < arr.length; i++) {
        let pivot = 0;
        for (let k = (n - 1); k >= 0; k--) {

            pivot = pivot + arr[i + k]
            if (pivot > biggestValue) {
                biggestValue = pivot;
            }
        }


    }
    console.log(biggestValue, 'final Result');
    return biggestValue
}

//naive solution according to the course
function maxSubarraySumNaive(arr, n) {
    let biggestValue = 0;
    let j = 0;

    for (let i = 0; i < arr.length - (n + 1); i++) {
        let pivot = 0;
        for (let j = 0; j < n; j++) {
            pivot = pivot + arr[i + j]
        }
        if (pivot > biggestValue) {
            biggestValue = pivot;
        }

    }
    console.log(biggestValue, 'final Result');
    return biggestValue
}

//solution with the course
function maxSubarraySum(arr, n) {

    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < n) return null

    for (let i = 0; i < n; i++) {
        maxSum = maxSum + arr[i]
    }

    tempSum = maxSum;
    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum
}


maxSubarraySumNaive([1, 2, 5, 2, 8, 1, 5,], 2) //10
maxSubarraySumNaive([1, 2, 5, 2, 8, 1, 5], 4) //17
maxSubarraySumNaive([4, 2, 1, 6], 1) //6
maxSubarraySumNaive([4, 2, 1, 6, 2], 4) //13
maxSubarraySumNaive([], 4) //null






