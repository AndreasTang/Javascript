'use strict'

const show = function (showContent, targetId, targetTag) {
    document.querySelector(`#${targetId}`).innerHTML = ''
    const printing = document.createElement(targetTag)
    printing.textContent = showContent
    document.querySelector(`#${targetId}`).appendChild(printing)
}

const showMuti = (showContent, targetId, targetTag) => {
    const printing = document.createElement(targetTag)
    printing.textContent = showContent
    document.querySelector(`#${targetId}`).appendChild(printing)
}

const changeText = function () {
    const buttonText = document.querySelector('#gameStart')
    buttonText.textContent = 'Restart'
}

const fetchGame = async () => {
    const newPuzzle = await fetch('//puzzle.mead.io/puzzle?wordCount=1')

    if (newPuzzle.status === 200) {
        const newGame = newPuzzle.json()
        return newGame
    } else {
        throw new Error('Unable to fetch puzzle')
    }
}

const clearText = () => {
    const startText = document.querySelector('#startText')
    const buttonText = document.querySelector('#gameStart')
    const codeText = document.querySelector('#showCode')
    codeText.innerHTML = ''
    startText.innerHTML = ''
    buttonText.textContent = 'Restart'
}

const showCode = (codeString) => {
    const letterArray = codeString.split('')
    const codeEl = document.querySelector('#showCode')
    codeEl.innerHTML = ''
    letterArray.forEach((letter) => {
        const code = document.createElement('span')
        code.textContent = letter
        document.querySelector(`#showCode`).appendChild(code)
    })
}

