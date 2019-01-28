const createTipper = (tip) => {
    return (amount) => {
        return amount * tip
    }
}

const tip1 = createTipper(.25)
console.log(tip1(100))
console.log(tip1(500))
const tip2 = createTipper(.50)
console.log(tip2(1000))
console.log(tip2(750))