const underLine = document.querySelectorAll('.feature2 ol li')
console.dir(underLine)

const crossOut = (event) => {
    const crossedOut = event.target
    crossedOut.style.textDecoration = 'line-through';
}

for (const features of underLine) {
    features.addEventListener('click', crossOut);
}


const ghostMode = document.querySelectorAll('.feature3 ul li')

const casperTheGhost = (event) => {
    const casperTheFriendlyGhost = event.target
    casperTheFriendlyGhost.style.opacity = '0.50';
}

for (const opacity of ghostMode) {
    opacity.addEventListener('click', casperTheGhost);
}


const disappear = document.querySelectorAll('.feature4 row img')

const seeYaLater = (event) => {
    const goodyByeDino = event.target 
    goodyByeDino.style.display = 'none';
}

for (const ghost of disappear) {
    ghost.addEventListener('click', seeYaLater);
}





