// normal function decleartion
const square = function (num) {
    return num * num
}

//use arrow-function declear function
const square1 = (num) => {
    return num * num
}

//short decleartion for function return something
const square2 = (num) => num * num

console.log(square(2))
console.log(square1(2))
console.log(square2(2))

const ships = [{
    name: 'King Andreas II',
    class: 'King',
    shipAge: '27'
}, {
    name: 'King Andreas III',
    class: 'King',
    shipAge: '25'
}, {
    name: 'Nerine',
    class: 'Queen',
    shipAge: '12'
}]

const filterShipAge = ships.filter(function(ship) {
    return ship.shipAge < 20
})

console.log(filterShipAge)

const filterShipAge1 = ships.filter((ship) => ship.shipAge < 20)
const filterShipClass = ships.filter((ship) => ship.class === 'King')

console.log(filterShipAge1)
console.log(filterShipClass)