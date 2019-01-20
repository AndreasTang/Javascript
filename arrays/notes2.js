const ships = [{
    shipClass: 'Hibiki',
    shipName: 'Kanate'
}, {
    shipClass: 'Lonyin',
    shipName: 'Yune I'
}, {
    shipClass: 'King Andreas',
    shipName: 'King Anfudo II'
}, {
    shipClass: 'Queen Nerine',
    shipName: 'Queen Jena Claric'
}, {
    shipClass: 'Manjor Barren',
    shipName: 'Manile City'
}]

const findShip1 = function (ships, shipName) {
    const ship = ships.findIndex(function (ship) {
        return ship.shipName.toLowerCase() === shipName.toLowerCase()
    })
    return ship
}

const findShip = function (ships, shipName) {
    return ships.find(function (ship) {
        return ship.shipName.toLowerCase() === shipName.toLowerCase()
    })
}

const filterShip = function(findShip, findText) {
    const findShips =  findShip.filter(function (ship) {
        const isClassMatch = ship.shipClass.toLowerCase().includes(findText)
        const isNameMatch = ship.shipName.toLowerCase().includes(findText)
        return isClassMatch || isNameMatch
    })
    return findShips
}

console.log(filterShip)

const ship = findShip1(ships, 'queen Jena Claric')
const ship2 = findShip(ships, 'king Anfudo II')
console.log(ship)
console.log(ship2)