const enemyShipSinkOrNot = [{
    shipName: 'Queser',
    sink: true
}, {
    shipName: 'Lucifa',
    sink: false
}, {
    shipName: 'Recoper',
    sink: true
}, {
    shipName: 'Princess Kuma III',
    sink: true
}, {
    shipName: 'Faxes I',
    sink: false
},]

const tryAndError = function (testVaule) {
    console.log(testVaule)
}

const findIndex = function (shipArray, shipName) {
    const index = function () {
        return enemyShipSinkOrNot.shipName === shipName
    }
    return index
}

findIndex(enemyShipSinkOrNot, 'Faxes I')

console.log(enemyShipSinkOrNot)
