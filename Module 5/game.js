// Variables
var txtDisplay = document.getElementById("textDisplay");
var txtInput = document.getElementById("textInput");
var startScreen = document.getElementById("startScreen");
var gameScreen = document.getElementById("gameScreen");
var gameOverScreen = document.getElementById("gameOverScreen");
var timerDisplay = document.getElementById("timerDisplay");
var finalScore = document.getElementById("finalScore");
var highScoreDisplay = document.getElementById("highScore");
var correctSound = document.getElementById("correctSound");
var wrongSound = document.getElementById("wrongSound");
var gameStartSound = document.getElementById("gameStartSound");

let words = ["Week Two", "CSC102", "Module 2", "JavaScript", "loops", "functions", "CSS", "Cascading Style Sheets", "stylesheets", "link", "href", "Hyper Text Markup Language", "Hello World!", "codes", "programmers", "statements", "while", "do", "if", "else", "else if", "for"];
let currentWord = "";
let lastWord = "";
let score = 0;
let highScore = 0;
let timeLeft = 60; // in seconds
let timer;

// This will make the game visible and the start screen invisible | and start game
function startButton() {
    startScreen.style.display = "none";
    gameScreen.style.display = "block";
    gameOverScreen.style.display = "none";
    score = 0;
    timeLeft = 60;
    gameStartSound.play();
    newWord();
    startTimer();
}

// This is how users will get new words
function newWord() {
    let newWord;
    do {
        newWord = words[Math.floor(Math.random() * words.length)];
    } while (newWord === lastWord); // I don't want the same word to appear twice in a row
    currentWord = newWord;
    lastWord = currentWord;
    txtDisplay.textContent = currentWord;
    txtInput.value = "";
    txtInput.focus();
}

// Will start timer
function startTimer() {
    timerDisplay.textContent = `Time left: ${timeLeft} seconds`; // "Time left: " + timeLeft + " seconds";
    timer = setInterval(function() {
        timeLeft--;
        timerDisplay.textContent = `Time left: ${timeLeft} seconds`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

// This is to end the game
function endGame() {
    if (score > highScore) {
        highScore = score;
    }
    finalScore.textContent = `Your score: ${score}`;
    highScoreDisplay.textContent = `High score: ${highScore}`;
    gameScreen.style.display = "none";
    gameOverScreen.style.display = "block";
}

// This is how the code will know if the user typed the word correctly
txtInput.oninput = function() {
    if (this.value === currentWord) {
        score++;
        correctSound.play();
        newWord();
    } else if (this.value !== currentWord.substring(0, this.value.length)) {
        wrongSound.play();
        newWord();
    }
};

// This will take you back to the start screen
function restartButton() {
    gameOverScreen.style.display = "none";
    startScreen.style.display = "block";
}
