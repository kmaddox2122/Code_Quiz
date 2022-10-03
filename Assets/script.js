//challenge #4 notes
//start button- timer begins when pressed
//DOM manipulation to disply question and answers to quiz
//when a question is answered, another question populates
//when a question is answered incorrectly- time is removed from the clock
    //set interval/timers (lesson 9)
//use if/else to determine when the game is over -- all q's answered or timer reaches 0
//save initials and score when game is over
    //local storage to save data
var questions = [
    {
        question:"question 1 written out",
        answer1:"answer 1 written out",
        answer2:"answer 2 written out",
        answer3:"answer 3 written out",
        answer4:"answer 4 written out",
        correctAnswer: this.answer1 //or copy text from answer1
    },
    {
        question:"question 2 written out",
        answer1:"answer 1 written out",
        answer2:"answer 2 written out",
        answer3:"answer 3 written out",
        answer4:"answer 4 written out",
        correctAnswer: this.answer1 //or copy text from answer1
    }
]
function startQuiz() {
    console.log("Hello");
    //start timer
    //display question and answers- using DOM manip.
    var firstQuestion = document.querySelector("#firstQuestion");
    firstQuestion.textContent = questions[0].question

    // use queryselector for answers
}

var button = document.querySelector("#button"); 
console.log(button);
button.addEventListener("click",startQuiz);