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

const filterText = {
    searchName: ''
}

const searchFilterShips = function (ships, filterText) {
    const filterdShip = ships.filter(function (ship) {
        return ship.shipName.toLowerCase().includes(filterText.searchName.toLowerCase())
    })
    
    document.querySelector('#filter-show').innerHTML = ''

    for (let i = 0; i < filterdShip.length; i++) {
        let newShipP = document.createElement('p')
        newShipP.textContent = filterdShip[i].shipName
        document.querySelector('#filter-show').appendChild(newShipP)
    }
}

const sinkOrNot = function (shipArrays){
    const filterShips = shipArrays.filter(function(shipArray) {
        return shipArray.sink === false
    })
    const notSinkNumber = filterShips.length
    const newP = document.createElement('p')
    newP.textContent = `We still have ${notSinkNumber} ships to kill`
    document.querySelector('body').appendChild(newP)
}

//const printAll = function (shipArrays) {
//   for (let i = 0; i < shipArrays.length; i++) {
//     let newTextP = document.createElement('p')
//   newTextP.textContent = shipArrays[i].shipName
//        console.log(shipArrays[i])
//        document.querySelector('body').appendChild(newTextP)
//    }
//}

document.querySelector('#search').addEventListener('input', function (e) {
    console.log(e.target.value)
    filterText.searchName = e.target.value
    console.log(filterText.searchName)
    searchFilterShips(enemyShipSinkOrNot, filterText)
})

document.querySelector('#first-form').addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(e.target.elements.formInput.value)
})

//sinkOrNot(enemyShipSinkOrNot)
//printAll(enemyShipSinkOrNot)

//const remove = document.querySelectorAll('p')

//remove.forEach(function(text) {
//    if (text.textContent.includes('her') === true) {
//        text.remove()
//    }
//})    