// event listeners

document.addEventListener('keydown',
    spaceBarDown);

document.addEventListener('keyup', spaceBarUp);

// Defining all functions that are needed for the game

function setGoal() {

}

function spaceBarDown(event) {
    if (event.code === 'Space') {
        runTimer();
        console.log(event);
        console.log('spacebar is down!');
    }
}

function spaceBarUp(event) {
    if (event.code === 'Space') {
        console.log('spacebar is up!')
    }
}

function runTimer() {
    function countUp() {
        display = document.getElementById("timecounter");
        var i = 0; // a counter which is displayed every 100ms

        // create interval which fires the callback every 100ms.
        // `interval` holds the interval ID, which is later used to clear the
        // interval (stop calling the callback)
        var interval = setInterval(function () {

            display.innerHTML = i++; // write `i` and increment

            // if `i` is grater than 15 seconds then clear the interval (stop calling the callback)
            if (i > 15) clearInterval(interval);
        }, 1000);
    }

    countUp();
}

function stopTimer() {

}

function checkScore() {

}

function addScore() {

}

function resetGame() {

}