// Iteration 8: Making scoreboard functional
//Making play-again-button fuctional
var playAgain = document.getElementById("play-again-button");
playAgain.onclick = function(){
    location.href = './game.html'
}

var urlParams = new URLSearchParams(window.location.search)
console.log(urlParams)
console.log(window.location.search)


var scoreboard = document.getElementById('score-board')
var score = urlParams.get("score")
console.log(score)
scoreboard.innerHTML=score;
