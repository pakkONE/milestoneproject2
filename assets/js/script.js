// event listeners

document.addEventListener('keydown',
    spaceBarDown);

document.addEventListener('keyup', spaceBarUp);

// Defining all functions that are needed for the game



function setGoal() {
    
}

function spaceBarDown(event) {
    if (event.code === 'Space') {
        console.log(event)
        console.log('spacebar is down!')
    }
}

function spaceBarUp() {
    console.log('spacebar is up!')
}

function runTimer() {

}

function stopTimer() {

}

function checkScore() {

}

function addScore() {

}

function resetGame() {

}