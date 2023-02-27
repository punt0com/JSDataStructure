
/*
Es mas rapido que linear. 

En vez de checar 1 a 1 , se puede eliminar la mitad de golpe,
esta busqueda solo funciona cuando tu data tiene orden
*/


/*Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.
This algorithm should be more efficient than linearSearch - 
you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search 
and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/
 */




//solucion del curso
function courseBinarySearch(arr, value) {
    let start = 0
    let end = arr.length - 1;
    let middle = Math.floor((star + arr.length) / 2);


    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1
        }
        middle = Math.floor((star + end) / 2)
    }

    if (arr[middle] == value) {
        return middle;
    } else {
        return -1;
    }



}


//solucion pseudocodigo del curso 
function binarySearch(sortedArr, value) {

    let left = 0
    let right = sortedArr.length - 1;
    let middlePosition;

    while (left < right) {
        middlePosition = Math.floor((left + right) / 2);
        if (sortedArr[middlePosition] >= value) {
            if (sortedArr[left] == value) {
                return left
            }
            right = middlePosition - 1;
        }
        else {
            if (sortedArr[right] == value) {
                return right
            } 
            left = middlePosition + 1;
        }


    }
    return -1;


}

//([1, 2, 3, 4, 5, 6, 7, 8,], 3))
//  l           m        r  
//           r


//solucion, pero no siento que sea la adecuada
function obinarySearch(sortedArr, value) {

    let left = 0
    let right = sortedArr.length;
    let middlePosition = Math.floor(sortedArr.length / 2);

    while (left < right) {
        if (sortedArr[middlePosition] >= value) {
            if (sortedArr[left] == value) {
                middlePosition = left
                return left
            }
            left++;
        }
        else {
            if (sortedArr[right] == value) {
                middlePosition = right
                return right
            }
            right--;
        }

    }
    return -1;
}



//First approach trying to use recursion,*before reading the requirements*
function recursiveBinarySearch(sortedArr, value) {

    let left = 0
    let right = sortedArr.length;
    let middlePosition = sortedArr.length / 2;
    if (sortedArr[0] === value) {
        return value;
    }
    if (sortedArr[middlePosition] >= value) {
        sortedArr.splice(middlePosition, right);
        return binarySearch(sortedArr, value);
    }
    else {
        sortedArr.splice(left, middlePosition);
        return binarySearch(sortedArr, value);
    }
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)) // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)) // 2
console.log(binarySearch([1, 2, 3, 4, 5], 6)) // -1
console.log(binarySearch([1, 2, 3, 4, 5], 5)) // 4

// console.log(binarySearch([
//     5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//     40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 10)) // 2
// console.log(binarySearch([
//     5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//     40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 95)) // 16
// console.log(binarySearch([
//     5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//     40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 100)) // -1



