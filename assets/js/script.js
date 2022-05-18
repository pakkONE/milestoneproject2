// Global variables

let goal = 0;

let elapsedTime = 0;

let spaceBarIsDown = false;

// event listeners

window.onload = (event) => {
    setGoal();
};


document.addEventListener('keydown',
    spaceBarDown);


document.addEventListener('keyup', spaceBarUp);

// Functions

function setGoal() {
    goal = getNewGoal();
    let timeGoal = document.getElementById("timegoal");
    timeGoal.innerHTML = goal;
}


function getNewGoal() {
    return Math.floor((Math.random() * (12 - 4) + 4) * 1000) / 1000;
}

function spaceBarDown(event) {
    if (event.code === 'Space') {
        spaceBarIsDown = true;
        startGame();
    }
}

function spaceBarUp(event) {
    if (event.code === 'Space') {
        spaceBarIsDown = false;
        stopGame();
    }
    event.preventDefault(); // Do not trigger new game when "New Game" button is in focus and space key down
}

function startGame() {
    const d = new Date();
    let start = d.getTime();
    const display = document.getElementById("timecounter");
    let interval = setInterval(updateTimer, 1);

    function updateTimer() {
        const now = new Date();
        elapsedTime = ((now.getTime() - start) / 1000).toFixed(3);
        display.innerHTML = elapsedTime;

        if (elapsedTime > 15 || !spaceBarIsDown) {
            clearInterval(interval);
        }
    }
}

function stopGame() {
    const resultspan = document.getElementById("resultplaceholder");
    if (gameIsWon()) {
        resultspan.innerHTML = `Well done - you won!<br>Your result was ${Math.abs(elapsedTime - goal).toFixed(3)} seconds from the goal`;
        resultspan.style.color = "green";
    } else {
        resultspan.innerHTML = `Too bad - you were too slow.<br>Your result was ${Math.abs(elapsedTime - goal).toFixed(3)} seconds from the goal`;
        resultspan.style.color = "#900000";
    }
}

function gameIsWon() {
    return elapsedTime - goal <= 0.2 && elapsedTime - goal >= -0.2;
}

function resetGame() {
    console.log("reset");
    const resultspan = document.getElementById("resultplaceholder");
    resultspan.innerHTML = "Remember to release it on time!";
    resultspan.style.color = "#900000";
    setGoal();
}