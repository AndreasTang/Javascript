let num = 103.941

console.log(num.toFixed(2))

console.log(Math.round(num)) //四捨五入
console.log(Math.floor(num)) //無條件捨去
console.log(Math.ceil(num)) //無條件進位

let max = 100
let min = 25

let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
//25 - 100
console.log(randomNum)