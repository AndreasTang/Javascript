'use strict'

// fatch json data
let navyShipList = getShipsJSON()

// give props
const inputData = {
    inputName: '',
    hideSunks: false,
    hideDetails: false,
    filteredArrays: [],
    sortBy: 'byEdited'
}

// if hidesunks is checked then hide sunk ships
document.querySelector('#hideSunk').addEventListener('change', (e) => {
    inputData.hideSunks = e.target.checked
    filterName(navyShipList, inputData)
})

// if hidedetails is checked then hide all detail but the name
document.querySelector('#hideDetail').addEventListener('change', (e) => {
    inputData.hideDetails = e.target.checked
    filterName(navyShipList, inputData)
})

//seach ships following everything you input
document.querySelector('#input-box').addEventListener('input', (e) => {
    inputData.inputName = e.target.value    
    filterName(navyShipList, inputData)
})

//select what you want sorting by
document.querySelector('#filterBy').addEventListener('change', (e) => {
    inputData.sortBy = e.target.value
    filterName(navyShipList, inputData)
})

//sorting
document.querySelector('#filterBy').addEventListener('change', (e) => {
    inputData.sortBy = e.target.value
    sorting(navyShipList, inputData.sortBy)
    filterName(navyShipList, inputData)
})

//for quick create ships data
document.querySelector('#first-Form').addEventListener('submit', (e) => {
    e.preventDefault()
    const id = uuidv4()
    pushArray(navyShipList, e, id)
    saveShips(navyShipList)
    e.target.elements.newShips.value = ''
    e.target.elements.newClass.value = ''
    e.target.elements.newGun.value = ''
    e.target.elements.newDescription.value = ''
    location.assign(`/edit.html#${id}`)
})

// for muti page with same data and state
window.addEventListener('storage', (e) => {
    if (e.key === 'ships') {
        navyShipList = JSON.parse(e.newValue)
        filterName(navyShipList, inputData)
    }
})

// render all things
sorting(navyShipList, inputData.sortBy)
filterName(navyShipList, inputData)