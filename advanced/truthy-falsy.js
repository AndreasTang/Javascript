const ships = []
const ship = ships[0]

//Truthy => values that resolve to true in boolean context
//Falsy => values that resolve to false in boolean context
//Falsy values => 0, empty string, null, undefined, false, NaN

if (ship !== undefined) {
    console.log('ship exist')
} else {
    console.log('ship donot exist')
}

// if there are something in ship, it's will be truthy, otherwise undefined, which will resolve in falsy

if (ship) {
    console.log('ship exist')
} else {
    console.log('ship donot exist')
}