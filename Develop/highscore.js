var highScore = JSON.parse(localStorage.getItem("highscores"));
console.log(highScore);
if(highScore){
    for (var i = 0; i < highScore.length; i++){
        var newDiv = document.createElement("div");
        newDiv.textContent = highScore[i].initials +" - "+highScore[i].score;
        var highScorel = document.getElementById("highscore");
        highScorel.appendChild(newDiv);
    }

}
