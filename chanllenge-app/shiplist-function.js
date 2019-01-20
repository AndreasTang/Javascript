'use strict'

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

    if (!inputData.filteredArrays.length) {
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
    document.querySelector('#ship-filter').appendChild(counter)
}

// render all data after filtered
const renderAll = (filteredArray, filteredArrays) => {
    if (filteredArrays.length > 0) {
        if (inputData.hideDetails === true) {
            renderName(filteredArray)
        } else {
            renderName(filteredArray)
            renderClass(filteredArray)
            renderGun(filteredArray)
            renderDescription(filteredArray)
        }                
    }
}

// render section
const renderName = (filteredArray) => { 
    const nameContent = document.createElement('div')
    const button = document.createElement('button')
    const newNameTag = document.createElement('a')
    const checkBoxes = document.createElement('input')
    
    appendCheckBox(nameContent, checkBoxes) //parents, children
    appendLink(nameContent, newNameTag, `Name: ${filteredArray.shipName}`, filteredArray.id)
    appendIng(nameContent, button, 'X')

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

    document.querySelector('#ship-filter').appendChild(nameContent)
    
}

const renderClass = (filteredArray) => {
    const newClassTag = document.createElement('p')
    newClassTag.textContent = `Class: ${filteredArray.shipClass}`
    document.querySelector('#ship-filter').appendChild(newClassTag)
}

const renderGun = (filteredArray) => {
    const newGunTag = document.createElement('p')
    newGunTag.textContent = `Main gun: ${filteredArray.mainGun}`
    document.querySelector('#ship-filter').appendChild(newGunTag)
}

const renderNone = () => {
    const newNoneTag = document.createElement('h4')
    newNoneTag.textContent = 'No Data, Please input some ship'
    document.querySelector('#ship-filter').appendChild(newNoneTag)
}

const renderDescription = (filteredArray) => {
    const newDescriptionTag = document.createElement('p')
    newDescriptionTag.textContent = filteredArray.Description
    document.querySelector('#ship-filter').appendChild(newDescriptionTag)
}

// end of render section

// appending section
const appendIng = (parents, element, content) => {
    element.textContent = content
    parents.appendChild(element)
}

const appendLink = (parents, element, content, id) => {
    element.textContent = content
    element.setAttribute('href', `/edit.html#${id}`)
    parents.appendChild(element)
}

const appendCheckBox = (parents, element) => {
    element.setAttribute('type', 'checkbox')
    parents.appendChild(element)
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

// for time calculating
const createAt = () => moment().valueOf()

const updateAt = () => moment().valueOf()

const calTimeDeff = (time) => moment(time).fromNow()

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
    navyShipList.push({
        id: id,
        shipName: e.target.elements.newShips.value,
        shipClass: e.target.elements.newClass.value,
        mainGun: e.target.elements.newGun.value,
        Description: e.target.elements.newDescription.value,
        sink: false,
        createTimeStamp: createAt(),
        updateTimeStamp: updateAt()
    })
}