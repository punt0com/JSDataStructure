//Frecuency counter

/*
This pattern uses objects or sets to collect values/frequencies of values
this can often avoid the need for nested loops or O(n^2) operations with arrays/strings
*/

/*
Write a function called same, which accepts two arrays.

The function should return true if every value in the array 

has its corresponding value squared in the second array.

The frecuency of values must be the same 

same([1,2,3] , [4,1,9]) true
same([1,2,3] , [4,1,]) false
same([1,2,3] , [4,4,1]) false 

*/

// solucion 'rapida'

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false

    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false
        }
        console.log(arr2)
        arr2.splice(correctIndex, 1);
    }
    return true
}
// solucion 'rapida'

//solucion con Frecuency counter

function frecuencySame(arr1, arr2) {
    if (arr1.length !== arr2.length) return false

    let frecuencyCounter1 = {}
    let frecuencyCounter2 = {}

    for (let i = 0; i < arr1.length; i++) {
        frecuencyCounter1[arr1[i]] = (frecuencyCounter1[arr1[i]] || 0) + 1;
    }
    for (let i = 0; i < arr2.length; i++) {
        frecuencyCounter2[arr2[i]] = (frecuencyCounter2[arr1[i]] || 0) + 1;
    }
    // esto checa las llaves de tu objeto 
    for (key in frecuencyCounter1) {
        if (!(key ** 2 in frecuencyCounter2)) {
            return false;
        }

        if (frecuencyCounter1[key] ** 2 !== frecuencyCounter2[key]) {
            return false;
        }
    }
    return true;

}

//solucion con Frecuency counter
// console.log("[5, 4, 3], [2, 16, 25]");
// console.log(frecuencySame([5, 4, 3], [2, 16, 25]));
// console.log("[1,2,3,2,5], [9,1,3,3,11]");
// console.log(frecuencySame([1, 2, 3, 2, 5], [9, 1, 3, 3, 11]));

/*
// otro ejemplo problema de anagramas
// Given two strings write a function to determine if the second string 
//is an anagram of the first. An anagram is a word, phrase or name
formed by rearraging the letters if another, such as cinema, formed from iceman
*/

// mi approach antes del curso 

function findIfAnagram(string1, string2) {
    string2 = (string2.trim()).toLowerCase();
    string1 = (string1.trim()).toLowerCase();
    if (string1.length !== string2.length) return false;

    let firstWord = {};
    let secondWord = {};

    for (let char of string1) {
        firstWord[char] = (firstWord[char] || 0) + 1;
    }
    for (let char of string2) {
        secondWord[char] = (secondWord[char] || 0) + 1;
    }

    console.log(firstWord);
    console.log(secondWord);

    for (let key in firstWord) {
        if (!(key in secondWord)) {
            return false
        }
        if ((firstWord[key] !== secondWord[key])) {
            return false
        }

    }
    return true
}
//solucion del curso
function courseAnagram(first, second) {
    first = (first.trim()).toLowerCase();
    second = (second.trim()).toLowerCase();
    if (first.length !== second.length) {
        console.log("different length")
        return false;
    }

    let lookup = {};

    for (let i = 0; i < first.length; i++) {

        let letter = first[i];

        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;

    }


    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        if (!lookup[letter]) {
            console.log(lookup);
            return false
        } else {
            lookup[letter] -= 1;
        }
    }
    console.log({ lookup });
    return true

}


console.log("anagrams, nagaramm");
console.log(findIfAnagram("anagram", "nagaram"));
console.log("rat, car");
console.log(findIfAnagram("rat", " car"));

console.log("anagrama, nagaramj");
courseAnagram("anagrama", "nagaramj")
console.log("rat, car");
courseAnagram("rat", " car")

