window.addEventListener('DOMContentLoaded', clearInput)

/** Variables for the story */

let textInput = document.getElementById("user_inp");
let displayInp = document.getElementById("displayInput");
let nar = document.getElementById("narrator");
let gameStarted = false;
let heading = document.getElementById('adventure');

textInput.addEventListener('input', showInp);



function clearInput(){
  let getValue= document.getElementById("user_inp");
    if (getValue.value !="") {
        getValue.value = "";
    }
}