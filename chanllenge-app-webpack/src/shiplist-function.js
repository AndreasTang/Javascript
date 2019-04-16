'use strict'

import {getNavyShipList, calTimeDeff, sinkShip, saveShips} from './ships'
import { getInputData } from './filters';

let navyShipList = getNavyShipList()
let { filteredArrays, inputName, hideSunks, hideDetails} = getInputData()

//main code
const filterName = () => {
    filterAll()
    renderCounter(filteredArrays)

    if (navyShipList.length === 0) {
        renderNone()
    }

    filteredArrays.forEach((filteredArray) => {
        renderAll(filteredArray, filteredArrays)
    })
}

//filter which ship should render depend on user type text and check box
const filterAll = () => {

    // filter by input
    const filteredNames = navyShipList.filter((shipArray) => shipArray.shipName.toLowerCase().includes(inputName.toLowerCase()))

    // filter by input then filter again by sunk or not
    const sinkFilter = filteredNames.filter((filteredName) => !filteredName.sink) // return all false object

    //determind render all ships filter by input or all ships filter by input and sink or not
    return hideSunks === true ? filteredArrays = sinkFilter : filteredArrays = filteredNames

}

//render how many ships are showed after filtered
const renderCounter = (filteredArrays) => {
    document.querySelector('#ship-filter').innerHTML = ''
    const counter = document.createElement('h3')
    counter.textContent = `There are ${filteredArrays.length} ships on the list`
    counter.classList.add('empty-message')
    document.querySelector('#ship-filter').appendChild(counter)
}

// render all data after filtered
const renderAll = (filteredArray, filteredArrays) => {
    if (filteredArrays.length > 0) {
        if (hideDetails === true) {
            renderName(filteredArray)
        } else {
            const descriptionSection = document.createElement('div')
            descriptionSection.classList.add('list-item--recolor')

            renderName(filteredArray)
            renderClass(filteredArray, descriptionSection)
            renderGun(filteredArray, descriptionSection)
            renderDescription(filteredArray, descriptionSection)
            document.querySelector('#ship-filter').appendChild(descriptionSection)
        }                
    }
}

// render section
const renderName = (filteredArray) => { 
    const nameContent = document.createElement('a')
    const button = document.createElement('button')
    const newNameTag = document.createElement('p')
    const checkBoxes = document.createElement('input')
    const editMessage = document.createElement('p')
    const labelTag = document.createElement('label')
    const labelText = document.createElement('span')

    labelText.textContent = 'click to sink it'
    newNameTag.classList.add('list-item__title')
    editMessage.classList.add('list-item__subtitle')
    
    appendCheckBox(nameContent, checkBoxes, labelTag, labelText) //parents, children 
    appendLink(nameContent, filteredArray.id)
    appendIng(nameContent, newNameTag, filteredArray.shipName)
    appendIng(nameContent, editMessage, `last edited ${calTimeDeff(filteredArray.updateTimeStamp)}`)
    appendIng(nameContent, button, 'Delete')

    button.addEventListener('click', () => {
        findIds(filteredArray.id)
        saveShips()
        filterName()
    })

    checkBoxes.addEventListener('change', () => {
        sinkShip(filteredArray.id)
        saveShips()
        filterName()
    })
    nameContent.classList.add('list-item')
    document.querySelector('#ship-filter').appendChild(nameContent)
    
}

const renderClass = (filteredArray, descriptionSection) => {
    const newClassTag = document.createElement('p')
    newClassTag.textContent = `Class: ${filteredArray.shipClass}`
    descriptionSection.appendChild(newClassTag)
}

const renderGun = (filteredArray, descriptionSection) => {
    const newGunTag = document.createElement('p')
    newGunTag.textContent = `Main gun: ${filteredArray.mainGun}`
    descriptionSection.appendChild(newGunTag)
}

const renderNone = () => {
    const newNoneTag = document.createElement('h4')
    newNoneTag.textContent = 'No Data, Please input some ship'
    newNoneTag.classList.add('empty-message')
    document.querySelector('#ship-filter').appendChild(newNoneTag)
}

const renderDescription = (filteredArray, descriptionSection) => {
    const newDescriptionTag = document.createElement('p')
    newDescriptionTag.textContent = filteredArray.Description
    descriptionSection.appendChild(newDescriptionTag)
}

// end of render section

// appending section
const appendIng = (parents, element, content) => {
    element.textContent = content
    parents.appendChild(element)
}

const appendLink = (element, id) => {
    element.setAttribute('href', `/edit.html#${id}`)
}

const appendCheckBox = (parents, element, label, content) => {
    element.setAttribute('type', 'checkbox')
    element.setAttribute('id', 'checkbox')
    label.setAttribute('for', 'checkbox')
    label.appendChild(element)
    label.appendChild(content)
    label.classList.add('checkbox')
    parents.appendChild(label)
}

const appendATag = (parents, element) => {
    element.setAttribute('href', '/edit.html')
    element.appendChild(parents)
}

export {filterName}