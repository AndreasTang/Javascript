const Ship = function (shipsName, shipsClass, shipsAge) {
    this.shipName = shipsName
    this.shipClass = shipsClass
    this.shipAge = shipsAge
}

const firstDD = new Ship('Hibiki', 'Kanade', 10)
const SecondDD = new Ship('Sonia', 'Princess', 7)

console.log(firstDD)
console.log(SecondDD)