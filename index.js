// DOM ELEMENTS
const scoreHome = document.getElementById("score-home");
const scoreGuest = document.getElementById("score-guest");
const foulsHome = document.getElementById("home-fouls-value");
const foulsGuest = document.getElementById("guest-fouls-value");
const possArrowHome = document.getElementById("arrow-left");
const possArrowGuest = document.getElementById("arrow-right");
const modalContainer = document.querySelector(".modal-container");
const startGameBtn = document.getElementById("start-game");
const startNewGame = document.getElementById("start-new-game");
const timerValue = document.getElementById("timer-value");

//Declaring initial values

let scoreHomeValue = 0;
let scoreGuestValue = 0;
let homeFoulsValue = 0;
let guestFoulsValue = 0;
let minutes = 8;
let seconds = 0;
let timerInterval;


// Timer function & startGamebtn

startGameBtn.addEventListener("click", function(){
    resetTimerVariables();
    
    timerInterval = setInterval(function() {
        seconds--;
        
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }
        
        if (minutes < 0) {
            clearInterval(timerInterval);
            modalContainer.style.display = "flex";
        } else {
            // Update timer display in the general case
            let displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
            let displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
            timerValue.textContent = `${displayMinutes}:${displaySeconds}`;
        }
    }, 1000);
    
});

// Function that will reset all the variables when the startNewGame function is triggered.

function resetTimerVariables() {
    modalContainer.style.display = "none";
    possArrowHome.style.display = "none";
    possArrowGuest.style.display = "none";
    scoreHome.textContent = "0";
    scoreHomeValue = 0;
    scoreGuest.textContent = "0";
    foulsHome.textContent = "0";
    foulsGuest.textContent = "0";
    timerValue.textContent = "08:00"
    scoreGuestValue = 0;
    homeFoulsValue = 0;
    guestFoulsValue = 0;
    minutes = 8;
    seconds = 0;
}

//Function that handles the increment home and guest scores and fouls clicks.

function handleBtnClicks(){
    document.getElementById("incHome-btn1").addEventListener("click", function() {
        scoreHome.textContent = scoreHomeValue += 1;
        displayPossession();
    });
    
    document.getElementById("incHome-btn2").addEventListener("click", function() {
        scoreHome.textContent = scoreHomeValue += 2;
        displayPossession();
    });
    
    document.getElementById("incHome-btn3").addEventListener("click", function() {
        scoreHome.textContent = scoreHomeValue += 3;
        displayPossession();
    });
        
        // Separate event listeners for the guest score
    document.getElementById("incGuest-btn1").addEventListener("click", function() {
        scoreGuest.textContent = scoreGuestValue += 1;
        displayPossession();
    });
        
    document.getElementById("incGuest-btn2").addEventListener("click", function() {
        scoreGuest.textContent = scoreGuestValue += 2;
        displayPossession();
    });
        
    document.getElementById("incGuest-btn3").addEventListener("click", function() {
        scoreGuest.textContent = scoreGuestValue += 3;
        displayPossession();
    });
    
    // Home Fouls Event Handling
    
    document.getElementById("home-fouls-btn").addEventListener("click", function(){
        foulsHome.textContent = homeFoulsValue += 1;
    });
    
    // Guest Fouls Event Handling
    
    document.getElementById("guest-fouls-btn").addEventListener("click", function(){
        foulsGuest.textContent = guestFoulsValue += 1;
    });
}

handleBtnClicks();
    
// Display Possession Function
    
function displayPossession() {
    if (scoreHomeValue > scoreGuestValue) {
        possArrowHome.style.display = "block";
        possArrowGuest.style.display = "none";
    } else if (scoreHomeValue < scoreGuestValue) {
        possArrowGuest.style.display = "block";
        possArrowHome.style.display = "none";
    } else {
        possArrowHome.style.display = "none";
        possArrowGuest.style.display = "none";
    }
};

// Event handler that will start a new game when the start new game button is clicked.
    
startNewGame.addEventListener("click", function(){
    resetTimerVariables();
    startGameBtn.click();
});