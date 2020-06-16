var timer =0;

document.getElementById("timer").textContent = "Time: "+timer;

var strPageEl = document.querySelector("#strPage");
var quizEl = document.querySelector("#quizContent");
var questionEl = document.querySelector("#question");
var answerElList = document.querySelector("#ansChoice");

var questAnswerArr = [
    {
      question: "Which is not a JavaScript data type?",
      answers: ["Number","Strings","Arrays","Boolean"],
      correctAnswer: "Arrays"
    }];



var strQuizBtn = document.getElementById("startQuiz");
strQuizBtn.addEventListener("click",startQuiz);

function startQuiz(event){
    strPageEl.classList.add("hide");
    quizEl.classList.remove("hide");
    answerElList.innerHTML = "";

    for (var i = 0; i < questAnswerArr.length; i++) {
        var questionItem = questAnswerArr[i];
        questionEl.textContent = questionItem.question;
        var answerItem = questAnswerArr[i].answers;
        var correctAns = questAnswerArr[i].correctAnswer;

        for(var j=0;j<answerItem.length;j++){
            var li = document.createElement("li");
            var btn = document.createElement("button");
            btn.textContent = answerItem[j];
            li.setAttribute("id",j);

            btn.setAttribute("data-index",correctAns);
            btn.setAttribute("class","btn btn-primary mb-2");
            li.appendChild(btn);
            answerElList.appendChild(li);
        }
        
      }
}