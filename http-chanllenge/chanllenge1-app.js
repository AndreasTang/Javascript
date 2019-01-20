//callback function test....

findCountryName('TW', (name, error) => {
    if (name) {
        console.log(name)
    } else if (error) {
        console.log(`Error: ${error}`)
    }
    
})
