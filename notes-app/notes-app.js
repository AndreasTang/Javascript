const newP = document.createElement('p')
newP.textContent = 'this is the new p text'
document.querySelector('body').appendChild(newP)

document.querySelector('button').addEventListener('click', function (e) {
    e.target.textContent = 'liliya best!!'
})
