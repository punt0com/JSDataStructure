/*  
MULTIPLE POINTERS
ESTE APPROACH SOLO FUNCIONA CON LISTAS ORDENADAS
creating pointers or values that correspond to an index or
position and move towards the beginning, end or middle based
on a certain condition

VERY efficient for solving problems
with minimal space complexity as well

*/

/*   
ESTE APPROACH SOLO FUNCIONA CON LISTAS ORDENADAS
Write a function called sumZero which accepts a SORTED
array of integers. The function should find the first pair
where the sum is 0. Return an array that includes both
values that sum to zero or undefined if a pair does not exist

sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
sumZero([-2,-,1,3]) // undefined
sumZero([1,2,3]) // undefined

 */

// "naive solution"

function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        }
    }
}

// "naive solution"

//refactor solution

function refactoresSumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        }
        else {
            left++
        }
    }
    return undefined;

}

/*   
Implement a function called countUniqueValues,
which accepts a sorted array, and counts the 
unique values in the array. There can be negative
numbers in the array, but it will always be sorted

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,5,5,12,12,13]) // 7
countUniqueValues([0]) // undefined
countUniqueValues([-2,-1,-1,0,1]) // undefined

 */

//solucion sin curso
// utilice el patron de frecuencyCounter
// solucion que no usa multiplePointers
function countUniqueValues(arr) {


    let counter = {}
    let pivot = 0;
    for (let item of arr) {
        counter[item] = counter[item] ? counter[item] += 1 : 0;
    }
    for (key in counter) {
        pivot++
    }
    console.log(pivot);
    return pivot;
}
//solucion sin curso
// utilice el patron de frecuencyCounter


//my solution with suggested approach
function suggestedCountUniqueValues(arr) {
    let left = 0;
    let moreLeft = left + 1;

    while (moreLeft < arr.length) {
        if (arr[left] === arr[moreLeft]) {
            moreLeft++
        }
        else {
            left++
            arr[left] = arr[moreLeft]
        }
    }

    if (left !== 0) {
        left = left + 1;
    }

    console.log(left)
    return left
}
//my solution with suggested approach

//course solution
function courseCountUniqueValues(arr) {
    if (arr.length === 0) return 0;
    var i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j];
        }
    }
    console.log(i);
    return i;
}
//course solution


suggestedCountUniqueValues([1, 1, 1, 1, 1, 2]) // 2
suggestedCountUniqueValues([1, 2, 3, 4, 4, 4, 5, 5, 12, 12, 13]) // 7
suggestedCountUniqueValues([]) // 0
suggestedCountUniqueValues([-2, -1, -1, 0, 1]) // 4