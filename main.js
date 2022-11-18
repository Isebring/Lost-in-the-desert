window.addEventListener("DOMContentLoaded", showInp);

document.title = "Lost in the desert";

/** Variable for getting the users input */
let textInput = document.getElementById("user_inp");

/** Variable for getting the narrator text beneath the user input field */
let nar = document.getElementById("narrator");

/** A variable storing a boolean value set to false until the user types "start game" which makes it true */
let gameStarted = false;

/** A variable storing the heading text on every page throughout the story */
let heading = document.getElementById("adventure");

textInput.addEventListener("input", showInp);

/** This function serves as the start of the story, when the user types "start game" it triggers the "if, else if conditional statements */
function showInp() {
  let inp = textInput.value;

  if (inp == "start game") {
    textInput.value = "";
    gameStarted = true;
    window.setTimeout(function () {
      nar.innerHTML = "Let's begin.";
    }, 500);

    window.setTimeout(function () {
      nar.innerHTML =
        "You are in the desert... <br> <br>  1. look around <br> or <br> 2. look for water";
      document.body.style.backgroundImage = "url('./imgs/desert1.JPG')";
      document.body.style.backgroundSize = "cover";
      document.body.style.transition = "all 1000ms ease 300ms";
      heading.innerText = "For some reason you ended up here, how come? 😧";
      heading.style.textShadow = "1px 1px 2px black";
      heading.style.color = "white";
    }, 3000);
  }

  /** Here follows the if, else if and else statements for different user inputs throughout the story */
  if (gameStarted) {
    if (inp === "look around") {
      nar.innerHTML =
        "There's only sand as far as your eyes can see.. <br> <br> 1. look for water <br> or <br> 2. look for civilization";
      document.body.style.backgroundImage = "url('./imgs/desert2.JPG')";
      document.body.style.backgroundSize = "cover";
      heading.innerText =
        "As you investigate the desert you get an uneasy feeling as you do not know how you got here 😕..";
      document.body.style.transition = "all 1000ms ease 180ms";
      textInput.value = "";

    } else if (inp === "look for water") {
      nar.innerHTML =
        "As you get closer you realize it's just a mirage. <br> As you continue to walk you think you spot a camel. <br> <br> 1. look for civilization <br> or <br> 2. approach the camel";
      document.body.style.backgroundImage = "url('./imgs/oasis.JPG')";
      document.body.style.backgroundSize = "cover";
      heading.innerText = "Is that an oasis?? 🏝️";
      document.body.style.transition = "all 1000ms ease 180ms";
      textInput.value = "";

    } else if (inp === "approach the camel") {
      nar.innerHTML =
        "The camel refuses to interact with you.. <br> <br> 1. hop on it anyway <br> or <br> 2. set up a camp and rest <br> or <br> 3. look for civilization ";
      document.body.style.backgroundImage = "url('./imgs/camel.JPG')";
      document.body.style.backgroundSize = "cover";
      heading.innerText = "The camel pays no interest to you 🐪..";
      document.body.style.transition = "all 1000ms ease 180ms";
      textInput.value = "";

    } else if (inp === "hop on it anyway") {
      nar.innerHTML =
        "The camel runs away as you try to hop on, <br> fortunately the sand cushioned the fall <br> <br> 1. set up a camp and rest <br> or <br> 2. look for civilization ";
      document.body.style.backgroundImage = "url('./imgs/camel2.JPG')";
      document.body.style.backgroundSize = "cover";
      heading.innerText = "The camel avoids you 🐪..";
      document.body.style.transition = "all 1000ms ease 180ms";
      textInput.value = "";

    } else if (inp === "look for civilization") {
      nar.innerHTML =
        "You regret going to this place <br> as you hear some strange noises.. <br> <br> 1. investigate the noises <br> or <br> 2. look for water";
      document.body.style.backgroundImage = "url('./imgs/ghost-town.JPG')";
      document.body.style.backgroundSize = "cover";
      heading.innerText =
        "You found some abandoned houses, this looks like a ghost town 🏚️..";
      document.body.style.transition = "all 1000ms ease 180ms";
      textInput.value = "";

    } else if (inp === "investigate the noises") {
      nar.innerHTML =
        "The house is empty, but you get a feeling you <br> are being watched.. <br> <br> 1. leave the ghost town <br> or <br> 2. stay and face your fears ";
      document.body.style.backgroundImage = "url('./imgs/ghost-town2.JPG')";
      document.body.style.backgroundSize = "cover";
      heading.innerText = "This house really gives you the creeps 😱..";
      document.body.style.transition = "all 1000ms ease 180ms";
      textInput.value = "";

    } else if (inp === "stay and face your fears") {
      nar.innerHTML =
        "You completely freeze and your heartbeats increases <br> until you wake up and realize it was a nightmare <br> <br> Type start game to start over <br> <br> Thanks for playing! ";
      document.body.style.backgroundImage =
        "url('./imgs/ghostlike-creature.JPG')";
      document.body.style.backgroundSize = "cover";
      heading.innerText =
        "A ghostlike creature appears and approaches you 👻..";
      document.body.style.transition = "all 1000ms ease 180ms";
      textInput.value = "";

    } else if (inp === "leave the ghost town") {
      nar.innerHTML =
        "You breathe a sigh of relief.. <br> <br> 1. set up a camp and rest <br> or <br> 2. look for civilization <br> or <br> 3. look for water";
      document.body.style.backgroundImage = "url('./imgs/desert2.JPG')";
      document.body.style.backgroundSize = "cover";
      heading.innerText = "You safely got out of that creepy ghost town 😌..";
      document.body.style.transition = "all 1000ms ease 180ms";
      textInput.value = "";

    } else if (inp === "set up a camp and rest") {
      nar.innerHTML =
        "You're about to fall asleep as something approaches <br> your tent. You wake up and realize it was all a nightmare <br> <br> Type start game to start over <br> <br> Thanks for playing! ";
      document.body.style.backgroundImage = "url('./imgs/camp.JPG')";
      document.body.style.backgroundSize = "cover";
      heading.innerText = "You set up your tent and rests ⛺..";
      document.body.style.transition = "all 1000ms ease 180ms";
      textInput.value = "";
    }
  } else {
    nar.innerHTML = "You haven't started the game yet.";
  }
}
