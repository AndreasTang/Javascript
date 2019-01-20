// Type coercion => a string, a number or a boolean

console.log('5' + 5) // resort will be 55, convert to string
console.log('5' - 5) // resort will be 0, convert to number

let loli = 'lilly'
if (loli) {
    console.log('lilly best') // loli convert to boolean(true)
}

let Andreas
if (Andreas) {
    console.log('this string will not display') // Andreas convert to boolean(false)
}

console.log(5 === 5) // true
console.log('5' === 5) // false, as expect
console.log(5 == 5) // true
console.log('5' == 5) // true, holy shit, you should use === to avoid this, === take types into account but == is not

const value = true + 12 // true will convert to number 1, false will convert to number 0
const type = typeof value
console.log(value)
console.log(type)