var timer = 0;

document.getElementById("timer").textContent = "Time: " + timer;

var strPageEl = document.querySelector("#strPage");
var quizEl = document.querySelector("#quizContent");
var questionEl = document.querySelector("#question");
var answerElList = document.querySelector("#ansChoice");

var secondsLeft = 75;

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
    }
    /*{
        question: "Arrays in JavaScript can be used to store?",
        answers: ["numbers","other arrays","objects","all the above"],
        correctAnswer: "all the above"
    },
    {
        question: "When being assignmed to variables, String values must be enclosed within?",
        answers: ["commas","curly brackets","quotes","parentheses"],
        correctAnswer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is?",
        answers: ["JavaScript","terminal/bash","for loop","console.log"],
        correctAnswer: "console.log"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is?",
        answers: ["JavaScript","terminal/bash","for loop","console.log"],
        correctAnswer: "console.log"
    }*/
];



var strQuizBtn = document.getElementById("startQuiz");
var ackBlock = document.getElementById("acknowlegeBlock");
var ackDisplay = document.getElementById("ack");
strQuizBtn.addEventListener("click", startQuiz);
var index = 0;

function startQuiz(event) {

    var timerInterval = setInterval(function () {
        strPageEl.classList.add("hide");
        quizEl.classList.remove("hide");

        timer = secondsLeft--;

        document.getElementById("timer").textContent = "Time: " + timer;

        renderQuestions();


        if (secondsLeft === 0) {

            clearInterval(timerInterval);
            alert("End of quiz");
            //TODO:declare the function
            //  showEnterHighScore();
        }

    }, 1000);
}

function renderQuestions() {

    console.log("inside render")
    if (index < questAnswerArr.length) {

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
         //   ackBlock.classList.add("hide");

            btn.addEventListener("click", function (event) {
                var targetBtn = event.target;
                ackBlock.classList.remove("hide");
                ackDisplay.textContent = targetBtn.getAttribute("data-index");
                console.log("inside eventlistener-before calling start quiz again");
                index++;
                renderQuestions();

            });
        }

    }
}