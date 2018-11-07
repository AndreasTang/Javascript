let convertFahrenheitToCelsius = function (temp) {
    let celsius = (temp - 32) * 5 / 9
    return celsius
}

console.log(convertFahrenheitToCelsius(32))
console.log(convertFahrenheitToCelsius(68))