'use strict'

let game

class Hangman {
    constructor(puzzle) {
        this.vocabulary = puzzle.puzzle
        this.counter = this.vocabulary.length + 2
        this.answerString = this.vocabulary.toLowerCase()
        this.answerArray = this.vocabulary.toLowerCase().split('')
        this.guessed = []
        this.gameOver = false
        this.code = ''
    }

    get printCode() {

        this.code = ''

        this.answerArray.forEach((word) => {
            if (this.guessed.includes(word) || word === ' ') {
                this.code += word
            } else {
                this.code += '*'
            }
        })
    }

    printResult(guess) {

        const bullEyes = this.answerString === this.code
        const printCounter = `You have ${this.counter} guesses left`
        const printGuess = `The character you guess is "${guess}"`

        if (this.counter >= 0 && bullEyes) {

            show(`Answer is ${this.vocabulary} , You win`)
            this.gameOver = true
            changeText()
                
        } else if (this.counter === 0 && bullEyes === false) {
    
            show(`Answer is ${this.answerString}, Your progress is ${this.code}, You Lose`)
            this.gameOver = true
            changeText()
        
        } else {

            show(`${printGuess} , ${this.code} , ${printCounter}`)
        
        }
    }

    checkCondition(guess) {
        const isGuessVaild = typeof guess === 'string' && guess.length === 1 ? true : false
        const isGuessFirstGuessed = !this.guessed.includes(guess) ? true : false
        const isGuessBad = !this.answerArray.includes(guess) ? true : false

        if (!this.gameOver) {

            if (isGuessVaild && isGuessFirstGuessed) {
                if (isGuessBad) {
                    this.counter--
                    this.guessed.push(guess)
                    game.printCode
                    game.printResult(guess)
                } else {
                    this.guessed.push(guess)
                    game.printCode
                    game.printResult(guess)
                }
            } else if (!isGuessVaild) {
                show('Please enter a vaild Character')
            } else if (!isGuessFirstGuessed) {
                show('This character is already guessed, please guess other character')
            }
        } else {
            show('Game is already over, click Restart to play again')
        }
    }

}

document.querySelector('#gameStart').addEventListener('click', async () => {
    const puzzle = await fetchGame()
    game = new Hangman(puzzle)
    console.log(game.vocabulary)
    console.log(game.counter)
    show(`Game started, Answer length is ${game.answerArray.length} characters long and you have ${game.counter} chances to guess`)

})

document.querySelector('#inputForm').addEventListener('submit', (e) => {
    e.preventDefault()

        const guess = Number(e.target.elements.guess.value)
        guess ? game.checkCondition(guess) : game.checkCondition(e.target.elements.guess.value.toLowerCase())
        e.target.elements.guess.value = ''

})

