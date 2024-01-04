// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
var num1 = document.getElementById("number1");
var num2 = document.getElementById("number2");

//fetching operators in var
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var mul = document.getElementById("mul");
var divide = document.getElementById("divide");
var modulus = document.getElementById("modulus");

var timer = document.getElementById('timer');
var time = 5;
var timerValue;

//Making a variable score
var score = 0;
var operator;
// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
var num3 = document.getElementById("number3");

var number1 = Math.round(Math.random()*100);
var number2 = Math.round(Math.random()*100); 

randomise()

// Iteration 5: Creating a randomise function to make the game functional
function randomise(){

  
    // Iteration 3: Creating variables required to make the game functional
     number1 = Math.round(Math.random()*100);
     number2 = Math.round(Math.random()*100);
    let number3;

    operator=Math.round(Math.random()*5)

    console.log(operator)

    switch(operator){
        case 1:
            number3 = number1 + number2;
            break;
        case 2:
            number3 = number1 - number2;
            break;
        case 3:
            number3 = number1 * number2;
            break;
        case 4:
            number3 = Math.round(number1 / number2);
            break;
        case 5:
            number3 = number1 % number2;
            break;
        case 0:
            randomise()
    }
    num1.innerText = number1;
    num2.innerText = number2;
    num3.innerText = number3;
}
// Iteration 6: Making the Operators (button) functional
plus.onclick = function(){plusf()};
minus.onclick = function(){minusf()};
mul.onclick = function(){mulf()};
divide.onclick = function(){dividef()};
modulus.onclick = function(){modulusf()};
function plusf(){
    if (operator==1){
        score++;
        reset(timerValue)
        randomise();

    }
    else{
        location.href = 'gameover.html?score='+score;
    }
}
function minusf(){
    if (operator==2){
        score++;
        reset(timerValue)
        randomise();
    }
    else{
        location.href = 'gameover.html?score='+score;
    }
}
function mulf(){
    if (operator==3){
        score++;
        reset(timerValue)
        randomise();

    }
    else{
        location.href = 'gameover.html?score='+score;
    }
}
function dividef(){
    if (operator==4){
        score++;
        reset(timerValue)
        randomise();
    }
    else{
        location.href = 'gameover.html?score='+score;
    }
}
function modulusf(){
    if (operator==5){
        score++;
        reset(timerValue)
        randomise();
    }
    else{
        location.href = 'gameover.html?score='+score;
    }
}
// Iteration 7: Making Timer functional
function timerGame() {
    time = 5
    timer.innerText = time
    timerValue = setInterval(function () {
        time--
        if (time == 0) {
            location.href = 'gameover.html?score='+score;
        }
        timer.innerHTML = time
    }, 1000)
}

reset();


function reset(timerId) {
    clearInterval(timerId)
    timerGame()
}