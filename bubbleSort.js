// para usar el sort de JS, por default utiliza el unicode de los strings
//para sortear, si quieres sortear por numeros tienes que evniarles
// una fuincion para que sepa bajo que jerarquia quieres sortear


function compareByLen(str1, str2) {
    return str1.length - str2.length;
}


["Steele", "Colt", "Data Structures", "algorithms"].sort(compareByLen)


function bubbleSort(arr) {

    //el primer for 
    let swaps;
    for (let count = arr.length; count > 0; count--) {
        swaps = true;
        for (let i = 0; i < count - 1; i++) {
            if ((arr[i] - arr[i + 1]) > 0) {
                let pivot = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = pivot;
                swaps = false;

            }
        }
        if (swaps) break;
    }

    return arr;
}


// function selectionSort(arr) {
//     /////////////////////////////
//     //mi version
//     let smallestPosition = 0;
//     let j = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if ((smallest[i] < arr[i])) {
//             smallestPosition = i;
//         }
//         if (arr[j] < arr[smallestPosition]) {
//             arr[j] = arr[smallestPosition];
//             j++;
//         }
//     }
//     /////////////////////////////
//     console.log(smallest)
//     return arr;
// }

function courserSelectionSort(arr) {

    //mi version
    let smallest = 0;
    for (let i = 0; i < arr.length; i++) {
        smallest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[smallest] > arr[j]) {
                smallest = j;
            }
        }
        if (arr[smallest] != arr[j]) {
            var pivot = arr[i];
            arr[i] = arr[smallest];
            arr[smallest] = pivot;

        }

    }

    console.log(smallest);
    return arr;
}






console.log(courserSort([5, 3, 4, 8, 1]));
// console.log(selectionSort([10, 2, 8, 4, 6]));
// console.log(selectionSort([11, 22, 33, 99, 66, 77, 55, 88]));

// console.log(selectionSort([8, 0, 1, 2, 3, 4, 5, 6, 7]));
