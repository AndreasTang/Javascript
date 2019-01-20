const add = function () {
    return arguments[0] + arguments[1]
}

console.log(add(11, 14))

const add2 = () => arguments[0] + arguments[1]

console.log(add2(11, 14)) // it will faild, learn node for solve this

const ships = {
    gun: '76mm',
    fire: function () {
        return `Fire ${this.gun}`
    }
}

console.log(ships.fire())

const ships1 = {
    gun: '76mm',
    fire: () => `Fire ${this.gun}`
}

console.log(ships1.fire()) // this will faild cuz arrow function don't bind "this"
// in react you can use bind method to rebind