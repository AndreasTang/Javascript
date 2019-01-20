class Person {
    constructor(firstName, lastName, age, likes, sex) {
        this.firstName = firstName
        this.lastName = lastName
        this.fullName = this.firstName + ` ${this.lastName}`
        this.age = age
        this.likes = likes
        this.sex = sex
    }
    greeting() {
        return `Hello, my name is ${this.fullName}, i am a ${this.age} years old ${this.sex} and i likes ${this.likes}`
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, likes, sex, score) {
        super(firstName, lastName, age, likes, sex)
        this.score = score
        this.passOrNot = this.score >= 70 ? 'passed' : 'failed'
    }
    greeting() {
        return `My name is ${this.fullName}, a ${this.age} years old ${this.sex} who likes ${this.likes}, i have ${this.passOrNot} with score ${this.score}`
    }
    addScore(change) {
        this.score += change
        return this.passOrNot = this.score >= 70 ? 'passed' : 'failed'
    }
}

const Nerine = new Student('Nerine', 'Botan', 14, 'swimming', 'girl', 80)
const Yoki = new Student('Yoki', 'Hatsuharu', 15, 'sleeping', 'girl', 40)
const Andreas = new Person('Andreas', 'Tang', 18, 'having sex with loli', 'boy')
console.log(Andreas.greeting())
console.log(Nerine.greeting())
console.log(Yoki.greeting())
Yoki.addScore(30)
console.log(Yoki.greeting())
