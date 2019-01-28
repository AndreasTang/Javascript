
//request using fetch and promise chain


const fetchYourLocation = async () => {
    const response = await fetch('http://ipinfo.io/json?token=3107a5efd7fdb2')

        if (response.status === 200) {
            const ipCountryCode = await response.json()
            return ipCountryCode.country
        } else {
            throw new Error('Unable to fetch')
        }
}

const findCountryName = async (targetCountryCode) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all')

        if (response.status === 200) {
            let data = await response.json()
            data = data.find((code) => {
                return code.alpha2Code === targetCountryCode
            })
            return data
        } else {
            throw new Error('Unable to fetch the data')
        }
}

getCurrentCountry = async () => {
    const country = await fetchYourLocation()
    return findCountryName(country)
}

//http request and callback function define

/*
const findCountryName = (targetCountryCode) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const findCountryCode = () => {
                return data.find((code) => {
                    return code.alpha2Code === targetCountryCode
                })
            }
        
            resolve(findCountryCode().name)

        } else if (e.target.readyState === 4) {
            reject('something went wrong')
            }
        }
    )

    request.open('GET', 'http://restcountries.eu/rest/v2/all')
    request.send()
})
*/