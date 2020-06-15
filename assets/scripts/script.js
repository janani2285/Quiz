var timer =0;

document.getElementById("timer").textContent = "Time: "+timer;

var strPageEl = document.querySelector("#strPage");
var questionsEl = document.querySelector("#questions");

var strQuizBtn = document.getElementById("startQuiz");
strQuizBtn.addEventListener("click",startQuiz);

function startQuiz(event){
    strPageEl.classList.add("hide");
    questionsEl.classList.remove("hide");
}