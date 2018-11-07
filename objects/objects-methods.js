let restaurant = {
    name: "Jane's country dish",
    guestCapactiy: 30,
    guestCount: 0,
    checkAvailabilty: function (partySize) {
        let seats = this.guestCapactiy - this.guestCount
        if (seats >= partySize) {
            console.log(`There are still ${seats} seats available, come on in`)
        } else if(seats <= partySize) {
            console.log('Sorry, seats all seated')
        }
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
        console.log(`There are ${this.guestCount} guest in the restaurant now`)
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
        console.log(`There are ${this.guestCount} guest in the restaurant now`)
    }
}

console.log(restaurant)
restaurant.checkAvailabilty(5)
restaurant.seatParty(5)
restaurant.checkAvailabilty(9)
restaurant.seatParty(9)
restaurant.checkAvailabilty(12)
restaurant.seatParty(12)
restaurant.checkAvailabilty(7)
restaurant.removeParty(5)


