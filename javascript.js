var playing = false;
var score;
var action;
var timeRemaining;
var correctAnswer;

//click on start/reset button to start game
document.getElementById('startreset').onclick = function(){
  // if we are playing
  if (playing == true){
  // reload page
  location.reload();
  } //if we are not playing --
  else {
    playing = true;
    //hide game over message
    hide("gameOver");
    // set score to 0
    score = 0;
    // display score
    document.getElementById('scoreValue').innerHTML = score;
    //show countdown box
    show('timeremaining');
    timeRemaining = 60;
    document.getElementById('timeremainingvalue').innerHTML = timeRemaining;
    //change button to reset
    document.getElementById('startreset').innerHTML = "Reset Game";
    //start countdown
    startCountdown();
    //generate new Question and multiple answers
    generateQA();
  }
};

//if we click on answer box-shadow
for (var i = 1; i < 5; i++){
  document.getElementById("box" + i).onclick = function(){
    // if we are playing
    if (playing == true){
      if (this.innerHTML == correctAnswer){  // correct?
        score ++; //increase score by 1
        document.getElementById("scoreValue").innerHTML = score;
        hide("wrong");
        show("correct");     //show correct box for 1 second(
        setTimeout(function(){
          hide("correct");
        }, 1000);
        generateQA();   //generate new Q&A

      }else {// incorrect?
        hide("correct");
        show("wrong")   //show try again box for 1 second
        setTimeout(function(){
          hide("wrong")
        }, 1000);
      }
    }
  }
}


//functions

//start counter
function startCountdown(){//reduce time by 1 second in loops
  action = setInterval(function(){
    timeRemaining -= 1;
    document.getElementById('timeremainingvalue').innerHTML = timeRemaining;
      //time left?
    if (timeRemaining == 0){//game over
        stopCountdown();
        show('gameOver');
        document.getElementById('gameOver').innerHTML =
        "<p>Game Over!</p><p>Your score is " + score + " .</p>"
        hide('timeremaining');
        hide("correct");
        hide("wrong");
        playing = false;
        document.getElementById('startreset').innerHTML = "Start Game"
    }
  }, 1000);
};

//stop counter
function stopCountdown(){
  clearInterval(action);
}

//hide element
function hide(Id){
  document.getElementById(Id).style.display = "none";
}
//show element
function show(Id){
  document.getElementById(Id).style.display = "block";
}

//generate Questions and answers
function generateQA(){
  var x = Math.round((Math.random() * 10) + 10);
  var y = Math.round((Math.random() * 10) + 10);
  correctAnswer = x * y;
  document.getElementById("question").innerHTML = x + " x " + y;

  var correctPosition = 1 + Math.round(3 * Math.random());
  //fill one box with the correct answer
  document.getElementById("box"+correctPosition).innerHTML = correctAnswer;

  var answers = [correctAnswer];
  //fill other box with wrong answers
  for (var i = 1; i <5; i++ ){
    if(i !== correctPosition){
      //wrong answer
      var wrongAnswer;
      do{
        wrongAnswer = (Math.round((Math.random() * 10) + 10)) * (Math.round((Math.random() * 10) + 10));
      }
      while(answers.indexOf(wrongAnswer)> -1);
        document.getElementById("box" + i).innerHTML = wrongAnswer;
        answers.push(wrongAnswer);
    }
  }
}
