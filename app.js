// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened
var play_button = document.getElementById("play-button");
play_button.onclick = function(){play()}
function play (){
    location.href='./game.html';
}