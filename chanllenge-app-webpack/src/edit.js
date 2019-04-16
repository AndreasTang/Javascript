'use strict'

import {getNavyShipList, calTimeDeff, updateContent, findIds} from './ships'

let navyShipList = getNavyShipList()

const shipId = location.hash.substring(1)
const selectName = document.querySelector('#shipNameInput')
const selectClass = document.querySelector('#shipClassInput')
const selectGun = document.querySelector('#shipGunInput')
const selectDescription = document.querySelector('#shipDescription')
const lastEdit = document.querySelector('#lastEdited')
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
    updateContent(shipId, {
        shipName: e.target.value  
    })
    reflashShip()
})

selectClass.addEventListener('input', (e) => {
    updateContent(shipId, {
        shipClass: e.target.value  
    })
    reflashShip()
})

selectGun.addEventListener('input', (e) => {
    updateContent(shipId, {
        mainGun: e.target.value  
    })
    reflashShip()
})

selectDescription.addEventListener('input', (e) => {
    updateContent(shipId, {
        Description: e.target.value  
    })
    reflashShip()
})

document.querySelector('#removeShip').addEventListener('click', () => {
    findIds(shipId)
    location.assign('index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'ships') {
        reflashShip()
    }
})
