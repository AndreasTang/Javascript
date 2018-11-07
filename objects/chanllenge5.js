// set a range of random number which you like to then guess a int if true or flase

let makeGuess = function (guessNum) {
    let max = 10
    let min = 0
    let randomNum = Math.floor(Math.random() * (max - min + 1) + min)
    console.log(randomNum)
    return guessNum === randomNum
}

console.log(makeGuess(3))