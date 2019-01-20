const enemyShipSinkOrNot = [{
    shipName: 'Queser',
    sink: false
}, {
    shipName: 'Lucifa',
    sink: false
}, {
    shipName: 'Recoper',
    sink: false
}, {
    shipName: 'Princess Kuma III',
    sink: true
}, {
    shipName: 'Faxes I',
    sink: false
},]

const filterShips = function (shipsArray) {
    const findShips = shipsArray.filter(function (shipArray) {
        return shipArray.sink === false
        // return !shipArray.sink
    })
    return findShips
}

const removeShip = function (removeArray, shipName) {
    const index = removeArray.findIndex(function(ship) {
        return ship.shipName.toLowerCase() === shipName.toLowerCase()
    })

    if (index >= 0) {
        enemyShipSinkOrNot.splice(index, 1)
    }

}


const sortSinkShips = function(ships) {
    ships.sort(function(a, b) {
        if (!a.sink && b.sink) {
            console.log(a.sink)
            console.log(b.sink)
            return -1
        } else if (a.sink && !b.sink) {
            console.log(a.sink)
            console.log(b.sink)
            return 1
        } else {
            return 0
        }
    })

    console.log(enemyShipSinkOrNot)
}


removeShip(enemyShipSinkOrNot, 'wtf')

console.log(enemyShipSinkOrNot)

console.log(filterShips(enemyShipSinkOrNot))

console.log(sortSinkShips(enemyShipSinkOrNot))