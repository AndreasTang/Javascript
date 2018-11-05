const notes = ['N1', 'N2', 'N3', 'N4', 'N5']

notes.push('N6') // add to last
notes.pop() // remove last
notes.shift()// remove first
notes.unshift('new N1')// add first

notes.splice(1, 2, 'delete 2 replaced')

notes[2] = 'New N3'

notes.forEach(function (item, index) {
    console.log(item)
    console.log(index)
})

console.log(notes)

const myShips = [{
    shipClass: 'Hibiki',
    shipName: 'Kanate'
}, {
    shipClass: 'San Andreas',
    shipName: 'King Andreas II'
}, {
    shipClass: 'FQ Nerine',
    shipName: 'Queen Nerine'
}, {
    shipClass: 'Jena Claire',
    shipName: 'Princess Jena'
}]

// indexof can't use in object arrays
// use findindex instead

let shipsList = myShips.findIndex(function (ship, index) {
    return ship.shipName === 'King Andreas II'
})

console.log(shipsList)
