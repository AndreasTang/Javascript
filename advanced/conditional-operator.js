const pen = 120
let penOrNot

if (pen >= 155) {
    penOrNot = 'Penetration'
} else {
    penOrNot = 'Bounced'
}

console.log(penOrNot)

const pen1 = 160

let penOrNot1 = pen1 >= 155 ? 'Penetration' : 'Bounced'

console.log(penOrNot1)

const girlAge = 11

const illegal = () => console.log('FBI!!! OPEN UP!!')
const legal = () => console.log('Do what you want')

girlAge >= 18 ? legal() : illegal()

const team = ['Andy', 'Andreas', 'Nerine', 'Sonia', 'chris']

const count = () => console.log(`Team: ${team.length}`)
const tooMany = () => console.log('There are too many people on your team')

team.length <= 4 ? count() : tooMany()