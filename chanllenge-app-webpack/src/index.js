'use strict'

import {createShip, sorting} from './ships'
import {getInputData, changeInputData} from './filters'
import {filterName} from './shiplist-function'

let {sortBy} = getInputData()

// if hidesunks is checked then hide sunk ships
document.querySelector('#hideSunk').addEventListener('change', (e) => {
    changeInputData({
        hideSunks: e.target.checked,
    })
    filterName()
})

// if hidedetails is checked then hide all detail but the name
document.querySelector('#hideDetail').addEventListener('change', (e) => {
    changeInputData({
        hideDetails: e.target.checked,
    })
    filterName()
})

//seach ships following everything you input
document.querySelector('#input-box').addEventListener('input', (e) => {
    changeInputData({
        inputName: e.target.value,
    })
    filterName()
})

//sorting
document.querySelector('#filterBy').addEventListener('change', (e) => {
    changeInputData({
        sortBy: e.target.value,
    })
    sorting(sortBy)
    filterName()
})

//for quick create ships data
document.querySelector('#first-Form').addEventListener('submit', (e) => {
    e.preventDefault()
    const text = e.target.elements.newShips.value.trim()

    if (text.length > 0) {

        createShip(e)
        e.target.elements.newShips.value = ''
        e.target.elements.newClass.value = ''
        e.target.elements.newGun.value = ''
        e.target.elements.newDescription.value = ''

    } else {

        alert('ship name can not be empty!!')

    }
    
})

// for muti page with same data and state
window.addEventListener('storage', (e) => {
    if (e.key === 'ships') {
        filterName()
    }
})

// render all things
sorting(sortBy)
filterName()