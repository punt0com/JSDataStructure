// Write a function called isSubsequence which takes in two strings and checks 
// whether the characters in the first string form a subsequence of the characters in the second string. 
// In other words, the function should check whether the characters
// in the first string appear somewhere in the second string, without their order changing.

// Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)

// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)
//not able to complete by myself
function isSubsequence(firstWord, secondWord) {
    let i = 0;
    let j = 0;
    let result = false;
    while (i < secondWord.length) {

        if (firstWord[j] === secondWord[i]) j++;

        if (i === firstWord.length) {
            result = true;
            i = secondWord.length;
        }

        i++
    }
    console.log(result)
    return result;
}