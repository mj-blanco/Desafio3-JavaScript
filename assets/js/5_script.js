let color = ""
const div = document.querySelector("#key")

function changeColor(newColor) {
    color = newColor;
    div.style.backgroundColor = color;
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'a') {
        changeColor('pink')
    } else if (e.key === 's') {
        changeColor('orange')
    } else if (e.key === 'd') {
        changeColor('lightblue')
    }
})

function createDiv(newColor) {
    let div = document.createElement('div')
    div.style.backgroundColor = newColor
    div.style.width = "200px"
    div.style.height = "200px"
    document.body.appendChild(div)
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'q') {
        createDiv('purple');
    } else if (e.key === 'w') {
        createDiv('grey')
    } else if (e.key === 'e') {
        createDiv('brown')
    }
})