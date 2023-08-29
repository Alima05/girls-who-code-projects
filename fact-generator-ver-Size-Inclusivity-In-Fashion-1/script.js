/*SCRIPT GENERATOR*/
var displayScript = document.getElementById("displayScript");
var scriptBtn = document.getElementById("scriptBtn");
//Will need to explain that sometimes the DOM doesn't load all the way, so the browser can't find the element for JavaScript to use

if (scriptBtn) {
  scriptBtn.addEventListener("click", displayScript);
}

/*
REFACTOR ITEM 2: 
Create a separate function for displaying the script.
Be sure to update function names.
*/

function displayScript() {
  //This variable must be in the function or it will not work
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;
  var input3 = document.getElementById("input3").value;
  var input4 = document.getElementById("input4").value;
  var input5 = document.getElementById("input5").value;
  var input6 = document.getElementById("input6").value;

  displayInput.innerHTML = "Hello, " + input1 + ". My name is " + input2 + ", and the purpose of this " + input3 + " is to request more size inclusivity in your clothing lines. Specifically, the " + input4 + " line(s). Currently, " + input5 + " products would not fit a large percentage of consumers, including " + input6 + ". I believe that expanding your size range to extend from 0 to at least 24 would make your clothing products more accessible to a much wider range of consumers, which would generate even more revenue for your company as an added benefit. " +
  "Sincerely, " 
  + input2;
}


//Move these variables to the top
var factList = [
  "Brands like Boohoo and New Look have been known to claim size inclusivity while covertly charging a “fat tax” of up to 30% on their extended sizes.", /*0*/

  "Currently, 67% of American women wear US size 14 or above.", /*1*/

  "Variety of sizes rose by approximately 21% from 2018 to 2019.", /*2*/

  "Plus size women still account for less than 1% of runway models.", /*3*/

  "L, XL, and XXL are part of straight sizing. 1X, 2X, 3X, and so on are considered plus sizes.", /*4*/

  "After garnering $480.99 billion, the plus size market is expected to reach $696. 71 billion in revenue in 2027.", /*5*/

  "Sustainable small businesses like Universal Standard and Alice Alexander, which cater to plus size buyers, have begun to fill the gap in the fashion industry." /*6*/
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}

