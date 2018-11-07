let getTip = function (total, tips = 0.1) {
    newTotal = total * tips
    tipsPercent = tips * 100
    return `A ${tipsPercent}% tip on $${total} would be $${newTotal}`
}

console.log(getTip(100))
console.log(getTip(300, 0.3))

