const ships = {
    shipsName: [],
    get shipName() {
        return this._shipName
    },
    set shipName(name) {
        this._shipName = name.trim()
        this.shipsName.push(this._shipName)
    }
}

ships.shipName = '  Hibiki    '
ships.shipName = ' Nerine  '
console.log(ships.shipName)
console.log(ships.shipsName)