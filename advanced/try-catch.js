const discountedPrice = (money) => money * 0.25
const result = discountedPrice(true) // true = 1, so 1 * 0.25 = 0.25
console.log(result) // 0.25, which is not what we want

const discountedPrice1 = (money) => {
    if (typeof money === 'number') {
        return money * 0.25
    } else {
        throw Error ('please enter number')
    }
}

try {
    const result1 = discountedPrice1(true)
    console.log(result1)
} catch (e) {
    console.log('this will only display when upper code error')
}

