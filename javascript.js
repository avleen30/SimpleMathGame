var playing = false;
var score;
var action;
var timeremaining;
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
    timeremaining = 30;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;
    //hide game over box
    hide("gameOver");
    //change button to reset
    document.getElementById('startreset').innerHTML = "Reset Game";
    //start countdown

    //generate a new Q&A


  }
};

//if we click on answer box-shadow
  // if we are playing
    // correct?
      //yes?
        //increase score by 1
        //show correct box for 1 second
        //generate new Q&A
    // incorrect?
      //try again box for 1 second
