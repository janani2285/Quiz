var timer = 0;

document.getElementById("timer").textContent = "Time: " + timer;

//Retriveing Elements
var strPageEl = document.querySelector("#strPage");
var quizEl = document.querySelector("#quizContent");
var questionEl = document.querySelector("#question");
var answerElList = document.querySelector("#ansChoice");
var highScoreEl = document.querySelector("#highScoreContent");
var displayScoreEl = document.querySelector("#displayScore");
var highScoreBtnEl = document.querySelector("#highScoreBtn");
var initialTextBoxEl = document.querySelector("#initialTextBox");

//Setting timer variable
var secondsLeft = 75;

//Quiz questions, answers stored as an array of objects
var questAnswerArr = [
    {
        question: "Which is not a JavaScript data type?",
        answers: ["number", "strings", "alerts", "boolean"],
        correctAnswer: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within?",
        answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
        correctAnswer: "parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store?",
        answers: ["numbers", "other arrays", "objects", "all the above"],
        correctAnswer: "all the above"
    },
    {
        question: "When being assignmed to variables, String values must be enclosed within?",
        answers: ["commas", "curly brackets", "quotes", "parentheses"],
        correctAnswer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is?",
        answers: ["JavaScript", "terminal/bash", "for loop", "console.log"],
        correctAnswer: "console.log"
    }
];



var strQuizBtn = document.getElementById("startQuiz");
var ackBlock = document.getElementById("acknowlegeBlock");
var ackDisplay = document.getElementById("ack");
strQuizBtn.addEventListener("click", startQuiz);
var index = 0;

//Function to start the timed quiz
function startQuiz(event) {
    var timerInterval = setInterval(function () {
        strPageEl.classList.add("hide");
        quizEl.classList.remove("hide");
        if (index < questAnswerArr.length && secondsLeft != 0) {


            timer = secondsLeft--;

            document.getElementById("timer").textContent = "Time: " + timer;


            ackBlock.classList.add("hide");
        } else if (index >= questAnswerArr.length || secondsLeft === 0) {
            if (secondsLeft === 0) {
                timer = 0;

                document.getElementById("timer").textContent = "Time: " + timer;
            }

            clearInterval(timerInterval);
            showEnterHighScore();
        }

    }, 1000);

    renderQuestions();
}


//Function to show high score
function showEnterHighScore() {
    quizEl.classList.add("hide");
    ackBlock.classList.add("hide");
    displayScoreEl.textContent = "Your final score is " + (timer);
    highScoreEl.classList.remove("hide");
    highScoreBtnEl.addEventListener("click", function (event) {
        event.preventDefault();

        if (localStorage.getItem("score") === null) {
            var scoreObjArr = [{
                user: initialTextBoxEl.value.trim(),
                score: timer
            }];
            var scoreStr = JSON.stringify(scoreObjArr);
            localStorage.setItem("score", scoreStr);
        } else {
            var scoreLocalStorageObjArr = JSON.parse(localStorage.getItem("score"));
            var scoreObj = {
                user: initialTextBoxEl.value.trim(),
                score: timer
            };
            scoreLocalStorageObjArr.push(scoreObj);
            var scoreStr = JSON.stringify(scoreLocalStorageObjArr);
            localStorage.setItem("score", scoreStr);
        }
        localStorage.setItem("score", scoreStr);

        window.location.href = "highscores.html";
    });
}

//Function to display questions and choices
function renderQuestions() {

    if (index < questAnswerArr.length) {
        questionEl.innerHTML = "";
        answerElList.innerHTML = "";

        var questionItem = questAnswerArr[index];
        questionEl.textContent = questionItem.question;
        var answerItem = questAnswerArr[index].answers;
        var correctAns = questAnswerArr[index].correctAnswer;


        for (var j = 0; j < answerItem.length; j++) {

            var li = document.createElement("li");
            var btn = document.createElement("button");
            btn.textContent = answerItem[j];
            li.setAttribute("id", j);
            if (answerItem[j] === correctAns) {
                btn.setAttribute("data-index", "Correct");
            } else {
                btn.setAttribute("data-index", "Incorrect");
            }

            btn.setAttribute("class", "button btn btn-primary mb-2");
            li.appendChild(btn);
            answerElList.appendChild(li);

            btn.addEventListener("click", function (event) {
                var targetBtn = event.target;

                ackBlock.classList.remove("hide");
                ackDisplay.textContent = targetBtn.getAttribute("data-index");
                if (targetBtn.getAttribute("data-index") === "Incorrect") {
                    if(secondsLeft<10){
                        secondsLeft =0;
                        
                    }else{
                        secondsLeft = secondsLeft - 10;
                    }
                  //  secondsLeft = secondsLeft - 10;
                    timer = secondsLeft;
                    document.getElementById("timer").textContent = "Time: " + timer;
                }

                index++;
                renderQuestions();

            });
        }

    }
}