let phrase="Carmel Was Very heavy"//String input
/* defining the function*/
function swap(word) {
    let swappedWord = "";
    for (let i = 0; i < word.length; i++) {
        let char = word.charAt(i);//check each character using their index in the word 
        //using a loop to traverse the words and swap each character 
        if (char === char.toUpperCase()) {
            swappedWord += char.toLowerCase();
        } else {
            swappedWord += char.toUpperCase();
        }
    }
    return swappedWord;
}

let result = swap(phrase);
console.log("The swapped word is:", result);