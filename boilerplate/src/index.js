const girl = {
    name: 'Komugi',
    age: '13',
    married: true,
    friendship: 100,
    friend: ['Coco', 'Liliy'],
    husband: 'Andreas'
}

const printGirl = ({name:girlName, age:girlAge, husband:girlHusband} = girl) => {
    console.log(`A cute ${girlAge} years old loli name ${girlName} married to ${girlHusband}`)
}

printGirl(girl)