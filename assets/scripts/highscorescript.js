
init();

function init(){
  console.log("inside init");
    var scoreBlockEl = document.getElementById("scoresBlock");
    var scoresListEl = document.getElementById("scoresList");

   /* for(var i=0;i<scoreEl.length;i++) {
      //  scoreEl[i].classList.add(i % 2 === 0 ? "even" : "odd");
      //or
      scoreEl[i].style["background-color"] = i % 2 === 0 ? "grey" : "white";
      scoreEl[i].style["color"] = i % 2 === 0 ? "white" : "black";
    }*/
    
    var scoreLocalStorageObjArr = JSON.parse(localStorage.getItem("score"));
    if(scoreLocalStorageObjArr === null){
      scoresListEl.classList.add("hide");
    }else{
      console.log("inside else");
      for(var j=0; j< scoreLocalStorageObjArr.length; j++){
        console.log("INSIDE FOR");
        var li = document.createElement("li");
        li.textContent = scoreLocalStorageObjArr[j].user + " : " + scoreLocalStorageObjArr[j].score;
        li.style.fontSize = "20px";
        scoresListEl.appendChild(li);
      }
    }
    
}



