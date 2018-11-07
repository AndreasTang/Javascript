let isPasswordVild = function (password) {
    if (password.length < 8 || password.includes('password')) {
        console.log('please enter a vild password')
    } else {
        console.log('password vild')
    }
}

isPasswordVild('aosjf23wok')
isPasswordVild('aook')
isPasswordVild('ao3wok')
isPasswordVild('a1209fkfs')
isPasswordVild('kdihp12password12fkdw')