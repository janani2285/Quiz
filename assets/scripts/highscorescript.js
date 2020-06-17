
init();

function init(){
 
    var scoreBlockEl = document.getElementById("scoresBlock");
    var scoresListEl = document.getElementById("scoresList");
    var goBackEl = document.getElementById("goBack");
    var clearEl = document.getElementById("clear");

    /*for(var i=0;i<scoreBlockEl.length;i++) {
      //  scoreBlockEl[i].classList.add(i % 2 === 0 ? "even" : "odd");
      //or
      scoreBlockEl[i].style["background-color"] = i % 2 === 0 ? "grey" : "white";
      scoreBlockEl[i].style["color"] = i % 2 === 0 ? "white" : "black";
    }*/
    
    var scoreLocalStorageObjArr = JSON.parse(localStorage.getItem("score"));
    if(scoreLocalStorageObjArr === null){
      scoresListEl.classList.add("hide");
    }else{
      
      for(var j=0; j< scoreLocalStorageObjArr.length; j++){
        console.log("INSIDE FOR");
        var li = document.createElement("li");
        li.textContent = scoreLocalStorageObjArr[j].user + " : " + scoreLocalStorageObjArr[j].score;
        li.style.fontSize = "20px";
        li.style.marginBottom="20px";
        li.style.marginTop="20px";
     /*   if(j%2 === 0){
          scoresListEl.style.backgroundColor = "grey";
          scoresListEl.style.color = "white";
        }else{
          scoresListEl.style.backgroundColor = "black";
          scoresListEl.style.color = "white";
        }*/
      
        scoresListEl.appendChild(li);
       
      }
  
    }

    goBackEl.addEventListener("click",function(){
      window.location.href = "index.html";
    });
    
    clearEl.addEventListener("click",function(){
     localStorage.clear();
     init();
    });
}



