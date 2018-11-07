let myShip = {
    shipClass: 'Hibiki',
    shipName: 'Kanade',
    shipTons: 2600,
    shipArms: 'triple 105mm gun * 3'
}

let enemyShip = {
    shipClass: 'Goto',
    shipName: 'Vibands',
    shipTons: 1760,
    shipArms: '127mm gun * 4'
}

let getSummary = function (ship) {
    return {
        nameSummary: `${ship.shipClass} class ship ${ship.shipName}`,
        tonsSummary: `weight ${ship.shipTons} tons`,
        armsSummary: `Mount with ${ship.shipArms}`
    }
    
}

let myShipSummary = getSummary(myShip)
let enemyShipSummary = getSummary(enemyShip)

console.log(myShipSummary.nameSummary)
console.log(enemyShipSummary.armsSummary)