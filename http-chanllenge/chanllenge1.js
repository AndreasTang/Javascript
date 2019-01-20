
//http request and callback function define

const findCountryName = (targetCountryCode, callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const findCountryCode = () => {
                return data.find((code) => {
                    return code.alpha2Code === targetCountryCode
                })
            }
        
            callback(findCountryCode().name)

        } else if (e.target.readyState === 4) {
            callback(undefined, 'something went wrong')
            }
        }
    )

    request.open('GET', 'http://restcountries.eu/rest/v2/all')
    request.send()

}

