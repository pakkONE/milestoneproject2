// Global variables

let spaceBarIsDown = false;
let timer = {
    i: 0,
    seconds: 0,
    milli: 0
};

// event listeners

window.onload = (event) => {
    setGoal();
};


document.addEventListener('keydown',
    spaceBarDown);


document.addEventListener('keyup', spaceBarUp);


function setGoal() {
    const goal = getRandomNumber();
    let timeGoal = document.getElementById("timegoal");
    timeGoal.innerHTML = goal;
}


function getRandomNumber() {
    return Math.floor((Math.random() * (12 - 4) + 4) * 1000) / 1000;
}

function spaceBarDown(event) {
    if (event.code === 'Space') {
        if (spaceBarIsDown == true) {
            return;
        } else {
            spaceBarIsDown = true;
            runTimer();
        }
    }
}

function spaceBarUp(event) {
    if (event.code === 'Space') {
        if (spaceBarIsDown == true) {
            spaceBarIsDown = false;
        }
        console.log('spacebar is up!')
    } else {

    }
}

function runTimer() {
    display = document.getElementById("timecounter");

    // borrwed following piece of code from https://codepen.io/jasonleewilson/pen/gPrxwX
    var i = 0; // a counter which is displayed every 100ms
    var now = new Date();
    var milli = 000;
    var elapsed = now - new Date().getTime();

    // create interval which fires the callback every 100ms.
    // `interval` holds the interval ID, which is later used to clear the
    // interval (stop calling the callback)
    var interval = setInterval(function () {

        display.innerHTML = i++ + "," + milli++ + elapsed; // write `i` and increment

        // if `i` is grater than 15 seconds then clear the interval (stop calling the callback)
        if (i > 15) clearInterval(interval);
    }, 1000);

}

function stopTimer() {

}

function checkScore() {

}

function resetGame() {

}