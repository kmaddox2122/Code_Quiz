//challenge #4 

//pseudocode:
//start button- timer begins when pressed
//DOM manipulation to disply question and answers to quiz
//when a question is answered, another question populates
//when a question is answered incorrectly- time is removed from the clock
    //set interval/timers (lesson 9)
//use if/else to determine when the game is over -- all q's answered or timer reaches 0
//save initials and score when game is over
    //local storage to save data

// variables

    var time = 0
    var questions = 0
    var score = 0
    var secondsLeft = 60
    var startBtn = document.querySelector(".startButton");
    var timeEL = document.querySelector(".time");
    var questions = [
    {
        question:"What is an array?",
        answer1:"a single variable that is used to store different elements",
        answer2:"a ray of sunshine",
        answer3:"a rainbow",
        answer4:"a name short for 'Raymond'.",
        correctAnswer: this.answer1 //or copy text from answer1
    },
    {
        question:"What does 'URL' stand for?",
        answer1:"Uniform Romeo Lima",
        answer2:"Unicorns R Lame",
        answer3:"Under Real Locations",
        answer4:"Uniform Resource Locator",
        correctAnswer: this.answer4 //or copy text from answer4
    }

]

// code for timer below

//function to start timer 

function start() {
        secondsLeft = 60;
        document.getElementById("timeRemaining").innerHTML = secondsLeft;
}


//function to end the game by stopping the timer

function endgame() {
    clearInterval(countDown);
}

//add a function for next question

//add on click event listener to button
//timer logic to count down by 1 second (1000 milliseconds), game will end when timer reaches 0

startBtn.addEventListener("click", (e) => {
    e.preventDefault();
    var countDown = setInterval(function () {
        secondsLeft--;
        document.getElementById("timeRemaining").innerHTML = secondsLeft;
        if (secondsLeft <= 0) {
            clearInterval(countDown);
            endgame();
        }
    }, 1000);
})

    //display question and answers- using DOM manip.

    // var firstQuestion = document.querySelector("#firstQuestion");
    // firstQuestion.textContent = questions[0].question

    // use queryselector for answers

    // add if stmt for last question- way to end the game if timer is still running

    // when game ends, user can input name for a high score

    // create function for local storage to save high scores and name

    // create function to reset the game, but saving the scores

    // create function to raise score if answers are correct