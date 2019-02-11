'use strict'

// for time calculating
const createAt = () => moment().valueOf()

const updateAt = () => moment().valueOf()

const calTimeDeff = (time) => moment(time).fromNow()

// find json data from storage for further useage, if there are no json, give it null array 
const getShipsJSON = () => {
    const shipsJSON = localStorage.getItem('ships')
    try {
        return shipsJSON ? JSON.parse(shipsJSON) : []
    } catch (e) {
        return []
    }
    
}

//main code
const filterName = (shipArrays, inputData) => {
    filterAll(shipArrays, inputData)
    renderCounter(inputData.filteredArrays)

    if (shipArrays.length === 0) {
        renderNone()
    }

    inputData.filteredArrays.forEach((filteredArray) => {
        renderAll(filteredArray, inputData.filteredArrays)
    })
}

//filter which ship should render depend on user type text and check box
const filterAll = (shipArrays, inputData) => {

    // filter by input
    const filteredNames = shipArrays.filter((shipArray) => shipArray.shipName.toLowerCase().includes(inputData.inputName.toLowerCase()))

    // filter by input then filter again by sunk or not
    const sinkFilter = filteredNames.filter((filteredName) => !filteredName.sink) // return all false object

    //determind render all ships filter by input or all ships filter by input and sink or not
    return inputData.hideSunks === true ? inputData.filteredArrays = sinkFilter : inputData.filteredArrays = filteredNames

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
        if (inputData.hideDetails === true) {
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
        saveShips(navyShipList)
        filterName(navyShipList, inputData)
    })

    checkBoxes.addEventListener('change', () => {
        sinkShip(filteredArray.id)
        saveShips(navyShipList)
        filterName(navyShipList, inputData)
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
// end of appending

// find the current object and delete it
const findIds = (id) => {
    const foundIds = navyShipList.findIndex((ship) => ship.id === id)

    if (foundIds > -1) {
        navyShipList.splice(foundIds, 1)
    }

}

// update the arrays
const saveShips = (arrays) => {
    localStorage.setItem('ships', JSON.stringify(arrays))
}

// click to sink a ship
const sinkShip = (id) => {
    const foundId = navyShipList.find((ship) => ship.id === id)

    if (foundId) {
        foundId.sink = !foundId.sink
    }
}

// for sorting
const sorting = (arrays, sortBy) => {
    if (sortBy === 'byEdited') {
        return arrays.sort((a, b) => {
            if (a.updateTimeStamp > b.updateTimeStamp) {
                return -1
            } else if (a.updateTimeStamp < b.updateTimeStamp) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return arrays.sort((a, b) => {
            if (a.createTimeStamp > b.createTimeStamp) {
                return -1
            } else if (a.createTimeStamp < b.createTimeStamp) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byAlphabetical') {
        return arrays.sort((a, b) => {      
            if (a.shipName.toLowerCase() > b.shipName.toLowerCase()) {
                return 1
            } else if (a.shipName.toLowerCase() < b.shipName.toLowerCase()) {
                return -1
            } else {
                return 0
            }
        })
    }
}

//sumbit the form
const pushArray = (navyShipList, e, id) => {

    const shipName = e.target.elements.newShips.value.trim()
    const shipClass = e.target.elements.newClass.value.trim()
    const mainGun = e.target.elements.newGun.value.trim()
    const Description = e.target.elements.newDescription.value.trim()

    navyShipList.push({
        id: id,
        shipName: shipName,
        shipClass: shipClass,
        mainGun: mainGun,
        Description: Description,
        sink: false,
        createTimeStamp: createAt(),
        updateTimeStamp: updateAt()
    })
}