let isGuestOneVagan = true
let isGuestTwoVagan = false

if (isGuestTwoVagan && isGuestOneVagan) {
    console.log('Vagan dish only')
} else if (isGuestTwoVagan || isGuestOneVagan) {
    console.log('Meat with vegetable')
} else {
    console.log('Give them all we have')
}