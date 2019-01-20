'use strict'

const Hangman = function (vocabulary, counts) {
    this.answer = vocabulary.toLowerCase().split('')
    this.counter = counts
    this.guessed = vocabulary.replace(/./i, '*')
}

Hangman.prototype.gameStart = function () {
   console.log(`The Answer is ${this.code}, You have ${this.counter} guesses`)
}

Hangman.prototype.makeGuess = function (guess) {
    this.answer.forEach((word) => {
        if (guess === word) {
            
        }
    })

    return 
}

const hangman1 = new Hangman('Nerine', 9)
const hangman2 = new Hangman('Andreas', 10)

