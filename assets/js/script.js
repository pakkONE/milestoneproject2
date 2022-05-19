// Global variables

let goal = 0;

let elapsedTime = 0;

let spaceBarIsDown = false;

let scoreboard = [];


// event listeners

window.onload = (event) => {
    setGoal();
    newGame();
};


document.addEventListener('keydown',
    spaceBarDown);


document.addEventListener('keyup', spaceBarUp);


// Functions

// A function to set the timegoal for the user
function setGoal() {
    goal = getNewGoal();
    let timeGoal = document.getElementById("timegoal");
    timeGoal.innerHTML = goal;
}

// This returns a randomly generated number with three decimals
function getNewGoal() {
    return Math.floor((Math.random() * (12 - 4) + 4) * 1000) / 1000;
}

// This function triggers the timecounter to start when the space bar key is pressed down
function spaceBarDown(event) {
    if (event.code === 'Space' && !spaceBarIsDown) {
        spaceBarIsDown = true;
        startRound();
    }
}

// This function ends the round and stops the timecounter when space bar key is released
function spaceBarUp(event) {
    if (event.code === 'Space') {
        spaceBarIsDown = false;
        endRound();
    }
    event.preventDefault(); // Do not trigger new game when "New Game" button is in focus and space key down
}

// This function calculates time elapsed since space key was pressed down
function startRound() {
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

// This function calculates the difference between the time goal 
// and the elapsed time and returns it with three decimals
function getScore() {
    return Math.abs(elapsedTime - goal).toFixed(3);
}

// This function returns a message to the user depending on the result of the score
function endRound() {
    const resultspan = document.getElementById("resultplaceholder");
    if (roundIsWon()) {
        resultspan.innerHTML = `Well done - you won!<br>Your result was ${getScore()} seconds from the goal`;
        resultspan.style.color = "green";
    } else {
        resultspan.innerHTML = `Too bad - you were too slow.<br>Your result was ${getScore()} seconds from the goal`;
        resultspan.style.color = "#900000";
    }
    scoreboard.push(getScore());
    setLi(scoreboard.length, roundIsWon() ? "green" : "#900000", getScore());
    if (scoreboard.length === 5) {
        setTimeout(function () {
            alert("Game over - thank you for playing.");
        }, 1000);
    } else {
        resetRound();
    }
}

// This function checks if the difference between elapsed time is within 0.2 second margin
function roundIsWon() {
    return elapsedTime - goal <= 0.2 && elapsedTime - goal >= -0.2;
}

// This function resets the HTML to original text and color after 
// game is finished when five rounds have been played 
function resetRound() {
    const resultspan = document.getElementById("resultplaceholder");
    const counter = document.getElementById("timecounter");
    resultspan.innerHTML = "Remember to release it on time!";
    resultspan.style.color = "#900000";
    counter.innerHTML = "0.000";
    setGoal();
}

// This function populates the list items with color depending on result
function setLi(round, color, score) {
    const li = document.getElementById(`round${round}`);
    li.style.backgroundColor = color;
    li.innerHTML = score;
}

// This function resets the game once the "New Game" button is clicked
function newGame() {
    scoreboard = [];
    for (let i = 1; i <= 5; i++) {
        setLi(i, "#5E5E5E", "0.000");
    }
    resetRound();
}