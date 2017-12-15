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
    // set score to 0
    score = 0;
    // display score
    document.getElementById('scoreValue').innerHTML = score;

    //show countdown box
    show('timeremaining');
    timeRemaining = 30;
    document.getElementById('timeremainingvalue').innerHTML = timeRemaining;

    //change button to reset
    document.getElementById('startreset').innerHTML = "Reset Game";

    //start countdown
    startCountdown();



    //generate new Q&A

  }
};

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

//if we click on answer box-shadow
  // if we are playing
    // correct?
      //yes?
        //increase score by 1
        //show correct box for 1 second
        //generate new Q&A
    // incorrect?
      //show try again box for 1 second
