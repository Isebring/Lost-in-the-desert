window.addEventListener('DOMContentLoaded', showInp)

/** Variables for the story */

let textInput = document.getElementById("user_inp");
let displayInp = document.getElementById("displayInput");
let nar = document.getElementById("narrator");
let gameStarted = false;
let heading = document.getElementById('adventure');

textInput.addEventListener('input', showInp);


/**
 * A function for a button to the right of the text input field where the user can reset the input field
 */
function clearInput(){
  let getValue= document.getElementById("user_inp");
    if (getValue.value !="") {
        getValue.value = "";
    }
}

/**
 * This function server as the start of the story, when the user types "start game" it triggers the "if else"
 */
function showInp() {
  let inp = user_inp.value;
  
  if (inp == "start game")  {
      gameStarted = true;
      window.setTimeout(function () {
          nar.innerHTML = "Let's begin.";
          nar.style.fontSize = '1.8rem';
      }, 500);

      window.setTimeout(function () {
          nar.innerHTML = "You are in the desert... <br> <br>  1. look around <br> or <br> 2. look for water";
          document.body.style.backgroundImage = "url('imgs/desert1.JPG')";
          document.body.style.transition = 'all 1000ms ease 300ms';
          heading.innerText = 'For some reason you ended up here, how come? 😧';
          heading.style.textShadow ='1px 1px 2px black';
          heading.style.color = 'white';
          nar.style.fontSize = '1.8rem';
      }, 3000);
  }

      if(gameStarted){
        if (inp === "look around") {
            nar.innerHTML = "There's only sand as far as your eyes can see.. <br> <br> 1. look for water <br> or <br> 2. look for civilization";
            document.body.style.backgroundImage = "url('imgs/desert2.JPG')";
            heading.innerText = 'As you investigate the desert you get an uneasy feeling as you do not know how you got here 😕..'
            document.body.style.transition = 'all 1000ms ease 180ms';
            nar.style.fontSize = '1.8rem';
        }

    } else {
      nar.innerHTML = "you haven't started the game yet.";
      nar.style.fontSize = '1.8rem';
  }
}

    
  