'use strict'

const list = ['chu chu', 'Nerine', 'Andreas', 'Loli', 'Sonia', 'Kala', 'hangman', 'Neptune', 'Vanessa', 'Lender', 'Jojo', 'Salatoga', 'Haman', 'Unicorn']

let game = {}

const randNumber = function (list) {
    return Math.floor(Math.random()*list.length)
}

const vocabulary = function (list, randNumber) {
    return list[randNumber]
}

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