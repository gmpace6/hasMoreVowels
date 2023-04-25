// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!
// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).
// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logic
// Simple!

// function switcheroo(word1, word2, word3) {
//     return [word3, word2, word1]
// }

// console.log(switcheroo("tail", "body", "head"))

let array = ["tail", 'body', 'head']

function switcheroo(array) {
    return array.reverse()
}

console.log(switcheroo(array))

// Write a function called hasMoreVowels that takes in one argument, word. When the function is called, return true if that word contains more vowels than non-vowels; otherwise, return false. The word will always be a single word, without any punctuation or spaces. It will contain only uppercase and/or lowercase letters.

// If the phrase is over half vowels, it should return true:

// hasMoreVowels('moose')
// // true
// If it’s half vowels (or less), it’s false:

// hasMoreVowels('mice')
// // false

// hasMoreVowels('graph')
// // false
// Don’t consider “y” as a vowel:

// hasMoreVowels('yay')
// // false
// Uppercase vowels are still vowels:

// hasMoreVowels('Aal')
// // true

function hasMoreVowels(word) {

    //what are vowels? the characters:
    // a e i o u
    // and sometimes y, but we're going to not consider it now

    //wait a sec. they can pass in uppercase and lowercase letters
    //which means I want to switch them all to lowercase so
    //my code works more simply
    word = word.toLowerCase()

    //to see if 'word' has more vowels
    //we're going to keep track of the amount of vowels,
    //and the amount of non-vowels.
    //we'll make variables set to 0, since the count starts
    //at 0
    let vowelCount = 0
    let nonVowelCount = 0

    // loop through each character of 'word'
    // at look at each character as you encounter it
    for (let i = 0; i < word.length; i++) {

        // if the character is 'a' or 'e' or 'i' or 'o' or 'u'
        // then it is a vowel: increase the vowel count
        let curChar = word[i]

        if (
            curChar === 'a' ||
            curChar === 'e' ||
            curChar === 'i' ||
            curChar === 'o' ||
            curChar === 'u'
        ) {
            vowelCount++

        // if it is not one of those vowels,
        // then it is not a vowel: increase the non-vowel count
        } else {
            nonVowelCount++
        }
    }

    //once you've finished looking at all of the characters
    //check and see if the vowel count is greater than the
    //non-vowel count.
    if (vowelCount > nonVowelCount) {
        //if it is, return true
        return true
    } else {
        //if it is not, return false
        return false
    }
}

console.log(hasMoreVowels('monday')) //false
console.log(hasMoreVowels('EEL')) //true
console.log(hasMoreVowels('eel')) //true
console.log(hasMoreVowels('mississippi')) //false
console.log(hasMoreVowels('Beazel')) //false