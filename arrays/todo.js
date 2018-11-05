const todo = ['wakeup', 'eat', 'work', 'relax', 'sleep']

console.log(`you have ${todo.length} things todo`)

todo.splice(2, 1)
todo.push('play loli')
todo.shift()
console.log(`you have now ${todo.length} things todo`)

todo.forEach(function (todo, index) {
    console.log(`${index + 1}. ${todo}`)
})

for (let i = 0; i < todo.length; i++) {
    console.log(`${i + 1}. ${todo[i]}`)
}
