// Write a function called averagePair. Given a sorted array of integers and a target average,
//  determine if there is a pair of values in the array where the average of the pair equals the target average. 
//  There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)

// Sample Input:

averagePair([1, 2, 3], 2.5) // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1) // false
averagePair([], 4) // false

// truth be told I did this one with help
function averagePair(arr, average) {
    if (arr.length === 0) return false
    let j = arr.length - 1;
    let result = false;
    for (let i = 0; i < arr.length;) {
        if ((arr[i] + arr[j]) / 2 > average) {
            j--;
        }
        else if ((arr[i] + arr[j]) / 2 < average) {
            i++;
        }
        else if ((arr[i] + arr[j]) / 2 === average) {
            result = true
            i = arr.length;

        }
    }
    console.log(result);
    return result;
}

// function courseCountUniqueValues(arr) {
//     if (arr.length === 0) return 0;
//     var i = 0;
//     for (let j = 1; j < arr.length; j++) {
//         if (arr[i] !== arr[j]) {
//             i++
//             arr[i] = arr[j];
//         }
//     }
//     console.log(i);
//     return i;
// }