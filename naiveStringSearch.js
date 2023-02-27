// define a funciton that takes two string
// larger and shorter.

//long : otgh'omg'hreewoa'omg'
//short : omg
function stringSearcher(longWord, shortWord) {
    let pivot = 0;
    for (let i = 0; i < longWord.length;) {
        for (let j = 0; j < shortWord.length;) {
            if (longWord[i] === shortWord[j]) {
                j++;
                i++;
                if (j === shortWord.length) pivot++;
            } else {
                j = 0;
                i++;
                if (i > longWord.length) j = shortWord.length;
            }
        }
    }
    return pivot

}


console.log(stringSearcher('lorie loledlol', 'lol'));