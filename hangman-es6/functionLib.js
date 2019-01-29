'use strict'

const show = function (showContent) {
    document.querySelector('#showInf').innerHTML = ''
    const printing = document.createElement('p')
    printing.textContent = showContent
    document.querySelector('#showInf').appendChild(printing)
}

const changeText = function () {
    const startText = document.querySelector('#startText')
    const buttonText = document.querySelector('#gameStart')
    startText.textContent = 'Click Restart to play again'
    buttonText.textContent = 'Restart'
}

const fetchGame = async () => {
    const newPuzzle = await fetch('http://puzzle.mead.io/puzzle?wordCount=1')

    if (newPuzzle.status === 200) {
        const newGame = newPuzzle.json()
        return newGame
    } else {
        throw new Error('Unable to fetch puzzle')
    }
}