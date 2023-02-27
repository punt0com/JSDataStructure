// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6

// Time Complexity - O(n)


function findLongestSubstring(word) {

    let comparator = {};
    let pivot = 0;
    let result = 0;
    for (let i = 0; i < word.length; i++) {
        comparator[word] = i;
    }

    console.log(comparator);
    console.log(result);

}