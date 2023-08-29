/*Add your JavaScript variables here*/
//keep tally of scores
var aangScore = 0;
var kataraScore = 0;
var sokkaScore = 0;
var tophScore = 0;
var zukoScore = 0;
var irohScore = 0;

var numAnswered = 0; //track number of questions answered

//store HTML elements using the DOM
var result = document.getElementById("result");
var restart = document.getElementById("restart");


var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
var q1a5 = document.getElementById("q1a5");
var q1a6 = document.getElementById("q1a6");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
var q2a5 = document.getElementById("q2a5");
var q2a6 = document.getElementById("q2a6");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
var q3a5 = document.getElementById("q3a5");
var q3a6 = document.getElementById("q3a6");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");
var q4a5 = document.getElementById("q4a5");
var q4a6 = document.getElementById("q4a6");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");
var q5a5 = document.getElementById("q5a5");
var q5a6 = document.getElementById("q5a6");

/*listen for button click and call function if clicked*/
q1a1.addEventListener("click", aang);
q1a2.addEventListener("click", katara);
q1a3.addEventListener("click", sokka);
q1a4.addEventListener("click", toph);
q1a5.addEventListener("click", zuko);
q1a6.addEventListener("click", iroh);

q1a1.addEventListener("click", disableQ1); //disable questions
q1a2.addEventListener("click", disableQ1);
q1a3.addEventListener("click", disableQ1);
q1a4.addEventListener("click", disableQ1);
q1a5.addEventListener("click", disableQ1);
q1a6.addEventListener("click", disableQ1);

q2a1.addEventListener("click", aang);
q2a2.addEventListener("click", katara);
q2a3.addEventListener("click", sokka);
q2a4.addEventListener("click", toph);
q2a5.addEventListener("click", zuko);
q2a6.addEventListener("click", iroh);

q2a1.addEventListener("click", disableQ2); //disable questions
q2a2.addEventListener("click", disableQ2);
q2a3.addEventListener("click", disableQ2);
q2a4.addEventListener("click", disableQ2);
q2a5.addEventListener("click", disableQ2);
q2a6.addEventListener("click", disableQ2);

q3a1.addEventListener("click", aang);
q3a2.addEventListener("click", katara);
q3a3.addEventListener("click", sokka);
q3a4.addEventListener("click", toph);
q3a5.addEventListener("click", zuko);
q3a6.addEventListener("click", iroh);

q3a1.addEventListener("click", disableQ3); //disable questions
q3a2.addEventListener("click", disableQ3);
q3a3.addEventListener("click", disableQ3);
q3a4.addEventListener("click", disableQ3);
q3a5.addEventListener("click", disableQ3);
q3a6.addEventListener("click", disableQ3);

q4a1.addEventListener("click", aang);
q4a2.addEventListener("click", katara);
q4a3.addEventListener("click", sokka);
q4a4.addEventListener("click", toph);
q4a5.addEventListener("click", zuko);
q4a6.addEventListener("click", iroh);

q4a1.addEventListener("click", disableQ4); //disable questions
q4a2.addEventListener("click", disableQ4);
q4a3.addEventListener("click", disableQ4);
q4a4.addEventListener("click", disableQ4);
q4a5.addEventListener("click", disableQ4);
q4a6.addEventListener("click", disableQ4);

q5a1.addEventListener("click", aang);
q5a2.addEventListener("click", katara);
q5a3.addEventListener("click", sokka);
q5a4.addEventListener("click", toph);
q5a5.addEventListener("click", zuko);
q5a6.addEventListener("click", iroh);

q5a1.addEventListener("click", disableQ5); //disable questions
q5a2.addEventListener("click", disableQ5);
q5a3.addEventListener("click", disableQ5);
q5a4.addEventListener("click", disableQ5);
q5a5.addEventListener("click", disableQ5);
q5a6.addEventListener("click", disableQ5);

restart.addEventListener("click", restartQuiz);

//define the functions
function aang (){
  aangScore += 1;
  numAnswered += 1;

  console.log ("numAnswered = " + "aangScore = " + aangScore);

  if (numAnswered == 5) {
    console.log ("The quiz is done!")
    updateResult ();
  }
}

function katara (){
  kataraScore += 1;
  numAnswered += 1;

  console.log ("numAnswered = " + "kataraScore = " + kataraScore);

  if (numAnswered == 5) {
    console.log ("The quiz is done!")
    updateResult ();
  }
}

function sokka (){
  sokkaScore += 1;
  numAnswered += 1;

  console.log ("numAnswered = " + "sokkaScore = " + sokkaScore);

  if (numAnswered == 5) {
    console.log ("The quiz is done!")
    updateResult ();
  }
}

function toph (){
  tophScore += 1;
  numAnswered += 1;

  console.log ("numAnswered = " + "tophScore = " + tophScore);

  if (numAnswered == 5) {
    console.log ("The quiz is done!")
    updateResult ();
  }
}

function zuko (){
  zukoScore += 1;
  numAnswered += 1;

  console.log ("numAnswered = " + "zukoScore = " + zukoScore);

  if (numAnswered == 5) {
    console.log ("The quiz is done!")
    updateResult ();
  }
}

function iroh (){
  irohScore += 1;
  numAnswered += 1;

  console.log ("numAnswered = " + "irohScore = " + irohScore);

  if (numAnswered == 5) {
    console.log ("The quiz is done!")
    updateResult ();
  }
}

//disable questions
function disableQ1 () {
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
  q1a5.disabled = true;
  q1a6.disabled = true;
}

function disableQ2 () {
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
  q2a5.disabled = true;
  q2a6.disabled = true;
}

function disableQ3 () {
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
  q3a5.disabled = true;
  q3a6.disabled = true;
}

function disableQ4 () {
  q4a1.disabled = true;
  q4a2.disabled = true;
  q4a3.disabled = true;
  q4a4.disabled = true;
  q4a5.disabled = true;
  q4a6.disabled = true;
}

function disableQ5 () {
  q5a1.disabled = true;
  q5a2.disabled = true;
  q5a3.disabled = true;
  q5a4.disabled = true;
  q5a5.disabled = true;
  q5a6.disabled = true;
}

//add end result
function updateResult (){
  if (aangScore >= 3) {
    result.innerHTML = "You are Aang!"
    console.log ("You are Aang!")

  } else if (kataraScore >=3) {
    result.innerHTML = "You are Katara!"
    console.log ("You are Katara!")

  } else if (sokkaScore >=3) {
    result.innerHTML = "You are Sokka!"
    console.log ("You are Sokka!")

  } else if (tophScore >=3) {
    result.innerHTML = "You are Toph!"
    console.log ("You are Toph!")

  } else if (zukoScore >=3) {
    result.innerHTML = "You are Zuko!"
    console.log ("You are Zuko!")

  } else if (irohScore >=3) {
    result.innerHTML = "You are Uncle Iroh!"
    console.log ("You are Uncle Iroh!")

  } else {
    result.innerHTML = "You are Uncle Iroh!"
    console.log ("You are Uncle Iroh!")
  }
}

function restartQuiz () {
  result.innerHTML = "Your result is..."
  numAnswered = 0;
  aangScore = 0;
  kataraScore = 0;
  sokkaScore = 0;
  tophScore = 0;
  zukoScore = 0;
  irohScore = 0;

  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;
  q1a5.disabled = false;
  q1a6.disabled = false;

  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;
  q2a5.disabled = false;
  q2a6.disabled = false;

  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;
  q3a5.disabled = false;
  q3a6.disabled = false;

  q4a1.disabled = false;
  q4a2.disabled = false;
  q4a3.disabled = false;
  q4a4.disabled = false;
  q4a5.disabled = false;
  q4a6.disabled = false;

  q5a1.disabled = false;
  q5a2.disabled = false;
  q5a3.disabled = false;
  q5a4.disabled = false;
  q5a5.disabled = false;
  q5a6.disabled = false;

  console.log("The quiz has restarted!");
}



