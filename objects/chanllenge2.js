let convertFahrenheit = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    let kelvin = (fahrenheit + 459.67) * 5/ 9
    return {
        tempFahrenheit: `Fahrenheit: ${fahrenheit}`,
        tempCelsius: `Celsius: ${celsius}`,
        tempKelvin: `Kelvin: ${kelvin}`
    }
}

console.log(convertFahrenheit(32))
console.log(convertFahrenheit(32).tempKelvin)