//calling init
init();

//init function declaration
function init() {

  //retriving elements by Id
  var scoresListEl = document.getElementById("scoresList");
  var goBackEl = document.getElementById("goBack");
  var clearEl = document.getElementById("clear");

  //retriving local storage value
  var scoreLocalStorageObjArr = JSON.parse(localStorage.getItem("score"));

  //checking if any value already stored in local storage
  if (scoreLocalStorageObjArr === null) {
    scoresListEl.classList.add("hide");
  } else {
    for (var j = 0; j < scoreLocalStorageObjArr.length; j++) {
      console.log("INSIDE FOR");
      var li = document.createElement("li");
      li.textContent = scoreLocalStorageObjArr[j].user + " : " + scoreLocalStorageObjArr[j].score;
      li.style.fontSize = "20px";
     // li.style.marginBottom = "20px";
      li.style.marginTop = "5px";
      scoresListEl.appendChild(li);
    }
  }

  //Click event listener for GoBack button
  goBackEl.addEventListener("click", function () {
    window.location.href = "index.html";
  });

  //Click event listener for clear button
  clearEl.addEventListener("click", function () {
    localStorage.clear();
    init();
  });
}



