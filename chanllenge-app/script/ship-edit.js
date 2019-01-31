'use strict'

const shipId = location.hash.substring(1)
const selectName = document.querySelector('#shipNameInput')
const selectClass = document.querySelector('#shipClassInput')
const selectGun = document.querySelector('#shipGunInput')
const selectDescription = document.querySelector('#shipDescription')
const lastEdit = document.querySelector('#lastEdited')
let navyShipList = getShipsJSON()
let ship

const reflashShip = () => {
    ship = navyShipList.find((ship) => ship.id === shipId)
    
    if (!ship) {
        location.assign('index.html')
    }
    selectName.value = ship.shipName
    selectClass.value = ship.shipClass
    selectGun.value = ship.mainGun
    selectDescription.value = ship.Description
    showEditTime(ship.updateTimeStamp, lastEdit)

} 

const showEditTime = (time, lastEditEl) => {
    lastEditEl.textContent = `last edited ${calTimeDeff(time)}`
}

reflashShip()

selectName.addEventListener('input', (e) => {
    ship.shipName = e.target.value
    ship.updateTimeStamp = moment().valueOf()
    saveShips(navyShipList)
    reflashShip()
})

selectClass.addEventListener('input', (e) => {
    ship.shipClass = e.target.value
    ship.updateTimeStamp = moment().valueOf()
    saveShips(navyShipList)
    reflashShip()
})

selectGun.addEventListener('input', (e) => {
    ship.mainGun = e.target.value
    ship.updateTimeStamp = moment().valueOf()
    saveShips(navyShipList)
    reflashShip()
})

selectDescription.addEventListener('input', (e) => {
    ship.Description = e.target.value
    ship.updateTimeStamp = moment().valueOf()
    saveShips(navyShipList)
    reflashShip()
})

document.querySelector('#removeShip').addEventListener('click', () => {
    findIds(shipId)
    saveShips(navyShipList)
    location.assign('index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'ships') {
        navyShipList = JSON.parse(e.newValue)
        reflashShip()
    }
})
