//PSEUDOCODE:
// 1. Timer starts at 30 seconds
// 2. On "start game" click. timer starts counting down 
// 3. Once timer starts te mole needs to appear
// 4. Mole moves and apears in a random hole every 1 second
// 5. When user clicks on the mole, score logs 1 more point
// 6. When the timer runs out, pop up appears with user's score
// 7. Reset game board after end of game

// SOME TECH WE MIGHT NEED:
// setInterval 
// add event listeners (on click) 
// math.random
// what happens when we click the start button more than once?
// string literal


const button = document.getElementById('start-button');
const timerDisplay = document.getElementById('timer');
var score = document.getElementById('score');
const mole = document.getElementById('mole');
const holes = document.getElementsByClassName('hole');
var newScore = 0


//function to move mole randomly every second
//generate random number and move to that hole
function moveMole() {  
    const hole = holes[Math.floor(Math.random() * 9)];
    hole.appendChild(mole)

}

//function for what happens when you click mole
function moleClickHandler() {
    newScore = newScore + 1
    score.innerText = newScore + " points"
}


//functiom to start moving mole
function startMole() {
    mole.addEventListener("click", moleClickHandler) 
}

//remove event listener-removes ability to click mole and lock scoreboard
function disableMole() {
    mole.removeEventListener("click", moleClickHandler)
}

function startGame() {//create function to start game`
    var timeLeft = 30;//set value of timer to start at 30
    startMole()
    var moleInterval = setInterval(moveMole, 1000)
    var timerInterval = setInterval(countDown, 1000); // set countdown interval to 1 second//1000 will run it every 1 second
    function countDown() {// create function for timer
        timeLeft = timeLeft - 1;//set timer to count down by an increment of 1
        if (timeLeft <= 0) { //when timer gets to 0, 
            clearInterval(timerInterval), //stop timer 
            clearInterval(moleInterval);//stop moving mole
            disableMole()
            alert(`Game Over! Your Score is ${newScore}`)
        // GAME ENDS HERE
        }
        timerDisplay.innerHTML = "00:" + timeLeft;
    }
}

button.addEventListener('click', startGame)





//holes[5].appendChild(mole) how to move mole to diff hole

