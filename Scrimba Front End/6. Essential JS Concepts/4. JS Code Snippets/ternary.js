const exerciseTimeMins = 40

// let message = ''

// if (exerciseTimeMins < 30) {
//     message = 'You need to try harder!'
// }
// else if(exerciseTimeMins < 60) {
//     message = 'Doing good!'
// }
// else {
//     message = 'Excellent!'
// } 

const message = exerciseTimeMins < 30 ? 'You need to try harder!' : exerciseTimeMins < 30 

console.log(message)


const exerciseTimeMins1 = 20

const message1 = exerciseTimeMins1 < 30 ? 'You need to try harder!' 
    : exerciseTimeMins < 60 ? 'Doing good!' 
    : 'Excellent!'

console.log(message1)


const playerGuess = 6
const correctAnswer = 6

/*
Challenge
1. Now improve the functionality of this code by 
   letting the player know if their guess was too high, 
   too low, or exactly right.
*/

const message2 = playerGuess < correctAnswer ? 'Your guess was too low!' 
    : playerGuess > correctAnswer ? 'Your guess was too high'
    : 'Your guess was perfect!'

console.log(message2)