import uuidv4 from 'uuidv4'
import moment from 'moment'

let navyShipList

// find json data from storage for further useage, if there are no json, give it null array 
const getShipsJSON = () => {
    const shipsJSON = localStorage.getItem('ships')
    try {
        return shipsJSON ? JSON.parse(shipsJSON) : []
    } catch {
        return []
    }
}

navyShipList = getShipsJSON()

const getNavyShipList = () => navyShipList

// save ship function
const saveShips = () => {
    localStorage.setItem('ships', JSON.stringify(navyShipList))
}

// Calculate last edit time
const calTimeDeff = (time) => moment(time).fromNow()

// create ship
const createShip = (e) => {

    const id = uuidv4()
    const createAt = () => moment().valueOf()
    const updateAt = () => moment().valueOf()
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

    saveShips()
    location.assign(`/edit.html#${id}`)
}    

// delete ship
const findIds = (id) => {
    const foundIds = navyShipList.findIndex((ship) => ship.id === id)

    if (foundIds > -1) {
        navyShipList.splice(foundIds, 1)
        saveShips()
    }
}

// sink ship
const sinkShip = (id) => {
    const foundId = navyShipList.find((ship) => ship.id === id)

    if (foundId) {
        foundId.sink = !foundId.sink
    }
}

// sorting by sortby
const sorting = (sortBy) => {
    if (sortBy === 'byEdited') {
        return navyShipList.sort((a, b) => {
            if (a.updateTimeStamp > b.updateTimeStamp) {
                return -1
            } else if (a.updateTimeStamp < b.updateTimeStamp) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return navyShipList.sort((a, b) => {
            if (a.createTimeStamp > b.createTimeStamp) {
                return -1
            } else if (a.createTimeStamp < b.createTimeStamp) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byAlphabetical') {
        return navyShipList.sort((a, b) => {      
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

// check if any update and update it
const updateContent = (id, content) => {
    const ship = navyShipList.find((ship) => ship.id === id)

    if (ship) {

        if (content.shipName) {
            ship.shipName = content.shipName
            ship.updateTimeStamp = moment().valueOf()
        }

        if (content.shipClass) {
            ship.shipClass = content.shipClass
            ship.updateTimeStamp = moment().valueOf()
        }

        if (content.mainGun) {
            ship.mainGun = content.mainGun
            ship.updateTimeStamp = moment().valueOf()
        }

        if (content.Description) {
            ship.Description = content.Description
            ship.updateTimeStamp = moment().valueOf()
        }

        if (content.sink) {
            ship.sink = content.sink
            ship.updateTimeStamp = moment().valueOf()
        }

        saveShips()

    }

}

export {getNavyShipList, createShip, saveShips, calTimeDeff, findIds, sorting, updateContent, sinkShip}