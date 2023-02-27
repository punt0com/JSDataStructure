// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

//meFrequency(182, 281) // true
sameFrequency(34, 14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22, 222) // false


function sameFrequency(num1, num2) {

    let firstNumber = num1.toString();
    let secondNumber = num2.toString();
    let firstNumberCounter = {};
    let secondNumberCounter = {};


    for (let i = 0; i < firstNumber.length; i++) {

        firstNumberCounter[firstNumber[i]] = (firstNumberCounter[Number(firstNumber[i])] || 0) + 1;
    }
    for (let i = 0; i < secondNumber.length; i++) {

        secondNumberCounter[secondNumber[i]] = (secondNumberCounter[Number(secondNumber[i])] || 0) + 1;
    }

   
    let result = true;
    
    for (let key in firstNumberCounter) {
        console.log(key)
        if (firstNumberCounter[key] !== secondNumberCounter[key]) {
            result = false
        }
    }

   
    return result;


}
