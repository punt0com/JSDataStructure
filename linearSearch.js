
/*
checas un elemento a 1 a 1, checando todo hasta encontrear 
lo que sea que buscas 
son tipos de search linear

indexOf
includes
find findIndex
*/
//Write a function called linearSearch which accepts an array and a value, 
//and returns the index at which the value exists. If the value does not exist in the array, return -1.

function linearSearch(arr, value) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            
            console.log("true");
            return i
        }
    }
    console.log("false");
    return -1
}


linearSearch([1, 3, 5, 7, 9, 2, 4, 6, 8, 10], 8);



