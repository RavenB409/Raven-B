var factList = [
  "General Health Fact 1",/*0*/
  "General Health Fact 2",/*1*/
  "Mental Health Fact",/*2*/
  "Physical Health Fact"];/*3*/


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
