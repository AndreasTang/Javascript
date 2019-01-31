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
        const guessedLetter = `Guessed: ${this.guessed}`

        if (this.counter >= 0 && bullEyes) {

            showCode(this.code)
            show(`Answer is ${this.vocabulary}, You win`, 'showInf', 'p')
            this.gameOver = true
            changeText()
                
        } else if (this.counter === 0 && bullEyes === false) {

            showCode(this.code)
            show(`Answer is ${this.answerString}, You Lose`, 'showInf', 'p')
            this.gameOver = true
            changeText()
        
        } else {

            show(`${printGuess}`, 'showInf', 'p')
            showMuti(`${guessedLetter}`, 'showInf', 'p')
            showCode(this.code)
            showMuti(`${printCounter}`, 'showInf', 'p')
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
                show('Please enter a vaild Character', 'showInf', 'p')
                showMuti(`Guessed: ${this.guessed}`, 'showInf', 'p')
                showCode(this.code)
                showMuti(`You have ${this.counter} guesses left`, 'showInf', 'p')
            } else if (!isGuessFirstGuessed) {
                show('This character is already guessed!!', 'showInf', 'p')
                showMuti(`Guessed: ${this.guessed}`, 'showInf', 'p')
                showCode(this.code)
                showMuti(`You have ${this.counter} guesses left`, 'showInf', 'p')
            }
        } else {
            show('Game is already over', 'showInf', 'p')
            showMuti('Click Restart to play again', 'showInf', 'p')
        }
    }

}

document.querySelector('#gameStart').addEventListener('click', async () => {
    const puzzle = await fetchGame()
    game = new Hangman(puzzle)
    console.log(game.vocabulary)
    console.log(game.counter)
    show(`Game started`, 'showInf', 'p')
    showMuti(`Puzzle have ${game.answerArray.length} characters`, 'showInf', 'p')
    showMuti(`Your chances: ${game.counter}`, 'showInf', 'p')
    clearText()
})

document.querySelector('#inputForm').addEventListener('submit', (e) => {
    e.preventDefault()

        const guess = Number(e.target.elements.guess.value)
        guess ? game.checkCondition(guess) : game.checkCondition(e.target.elements.guess.value.toLowerCase())
        e.target.elements.guess.value = ''

})

