// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. 
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true

//tip if this were TS syntaxis is a lil different and you would need to to this to use arguments  

// function areThereDuplicates(...args){

// }



function areThereDuplicates() {
    let data = Array.from(arguments)
    let comparator = {};
    for (let key in data) {
        comparator[data[key]] = (comparator[data[key]] || 0) + 1;
    }

    result = false;
    for (let key in comparator) {
        if (comparator[key] !== 1) {
            result = true
        }
    };

    console.log(result);
    return result;
}


