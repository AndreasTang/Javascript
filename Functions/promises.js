const myPromise = new Promise ((resolve, reject) => {
    const loli = 'Lilia best loli'
    const err = 'something went wrong'
    const a = -1
    if (a > 0) {
        resolve(loli)
    } else {
        reject(err)
    }
})

myPromise.then((loli) => {
    console.log(loli)
}, (err) => {
    console.log(err)
})