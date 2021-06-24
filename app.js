const board = document.querySelector('#board')
const redBtn = document.querySelector('.redBtn')
const blueBtn = document.querySelector('.blueBtn')
const purpleBtn = document.querySelector('.purpleBtn')
const greenBtn = document.querySelector('.greenBtn')
const yellowBtn = document.querySelector('.yellowBtn')
const randomBtn = document.querySelector('.randomBtn')
const eraser = document.querySelector('.eraser')
const colors = ['#e74c3c' , '#8e44ad' , '#3498db' , '#e67e22' , '#2ecc71']
const SQUARES_NUMBER = 1254;

for (let i = 0 ; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    redBtn.addEventListener('click',() => square.addEventListener('click',() => setRedColor(square)))
    blueBtn.addEventListener('click',() => square.addEventListener('click',() => setBlueColor(square)))
    purpleBtn.addEventListener('click',() => square.addEventListener('click',() => setPurpleColor(square)))
    greenBtn.addEventListener('click',() => square.addEventListener('click',() => setGreenColor(square)))
    yellowBtn.addEventListener('click',() => square.addEventListener('click',() => setYellowColor(square)))
    randomBtn.addEventListener('click',() => square.addEventListener('click',() => setRandomColor(square)))
    eraser.addEventListener('click' , () => square.addEventListener('click',() => eraserFunc(square)))
    

    board.append(square)
}

function setRedColor (element){
    element.style.backgroundColor = '#e74c3c'
    element.style.boxShadow = `0 0 2px #e74c3c, 0 0 10px #e74c3c`

}

function setBlueColor(element){
    element.style.backgroundColor = '#3498db'
    element.style.boxShadow = `0 0 2px #3498db, 0 0 10px #3498db`
}

function setPurpleColor(element){
    element.style.backgroundColor = '#8e44ad'
    element.style.boxShadow = `0 0 2px #8e44ad, 0 0 10px #8e44ad`
}

function setGreenColor(element){
    element.style.backgroundColor = '#2ecc71'
    element.style.boxShadow = `0 0 2px #2ecc71, 0 0 10px #2ecc71`
}

function setYellowColor(element){
    element.style.backgroundColor = '#c6c93e'
    element.style.boxShadow = `0 0 2px #c6c93e, 0 0 10px #c6c93e`
}

function setRandomColor (element){
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function getRandomColor () {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

function eraserFunc (element){
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 0 0`
    return
}