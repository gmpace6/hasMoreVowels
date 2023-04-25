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