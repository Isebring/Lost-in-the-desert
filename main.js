document.title = "Lost in the desert";

/**
 * Getting the user input HTML element ID and stores it in a variable for managing the users input
 * @type {HTMLInputElement}
 *  */
let textInput = document.getElementById("user_inp");
// textInput.val;

/**
 * Variable for getting a HTML div element, this div is used to contain the narrator text beneath the user input field
 * @type {HTMLDivElement}
 * */
let storyTeller = document.getElementById("narrator");

/**
 *  A variable storing a boolean value set to false until the user types "start game" which makes it true
 * @type {boolean}
 * */
let gameStarted = false;

/**
 *  A variable storing the heading text on every page throughout the story
 * @type {HTMLHeadingElement}
 * */
let heading = document.getElementById("adventure");

textInput.addEventListener("input", startStory);

/** A function for loading the first scene in the story, used in the switch statement */
function loadScene1() {
  storyTeller.innerHTML =
    "There's only sand as far as your eyes can see.. <br> <br> 1. look for water <br> or <br> 2. look for civilization";
  document.body.style.backgroundImage = "url('./imgs/desert2.JPG')";
  heading.innerText =
    "As you investigate the desert you get an uneasy feeling as you do not know how you got here 😕..";
  document.body.style.transition = "all 1000ms ease 180ms";
  textInput.value = "";
}
/** A function for loading the second scene in the story, used in the switch statement */
function loadScene2() {
  storyTeller.innerHTML =
    "As you get closer you realize it's just a mirage. <br> As you continue to walk you think you spot a camel. <br> <br> 1. look for civilization <br> or <br> 2. approach the camel";
  document.body.style.backgroundImage = "url('./imgs/oasis.JPG')";
  heading.innerText = "Is that an oasis?? 🏝️";
  document.body.style.transition = "all 1000ms ease 180ms";
  textInput.value = "";
}
/** A function for loading the third scene in the story, used in the switch statement */
function loadScene3() {
  storyTeller.innerHTML =
    "The camel refuses to interact with you.. <br> <br> 1. hop on it anyway <br> or <br> 2. set up a camp and rest <br> or <br> 3. look for civilization ";
  document.body.style.backgroundImage = "url('./imgs/camel.JPG')";
  heading.innerText = "The camel pays no interest to you 🐪..";
  document.body.style.transition = "all 1000ms ease 180ms";
  textInput.value = "";
}
/** A function for loading the fourth scene in the story, used in the switch statement */
function loadScene4() {
  storyTeller.innerHTML =
    "The camel runs away as you try to hop on, <br> fortunately the sand cushioned the fall <br> <br> 1. set up a camp and rest <br> or <br> 2. look for civilization ";
  document.body.style.backgroundImage = "url('./imgs/camel2.JPG')";
  heading.innerText = "The camel avoids you 🐪..";
  document.body.style.transition = "all 1000ms ease 180ms";
  textInput.value = "";
}
/** A function for loading the fifth scene in the story, used in the switch statement */
function loadScene5() {
  storyTeller.innerHTML =
    "You regret going to this place <br> as you hear some strange noises.. <br> <br> 1. investigate the noises <br> or <br> 2. look for water";
  document.body.style.backgroundImage = "url('./imgs/ghost-town.JPG')";
  heading.innerText =
    "You found some abandoned houses, this looks like a ghost town 🏚️..";
  document.body.style.transition = "all 1000ms ease 180ms";
  textInput.value = "";
}
/** A function for loading the sixth scene in the story, used in the switch statement */
function loadScene6() {
  storyTeller.innerHTML =
    "The house is empty, but you get a feeling you <br> are being watched.. <br> <br> 1. leave the ghost town <br> or <br> 2. stay and face your fears ";
  document.body.style.backgroundImage = "url('./imgs/ghost-town2.JPG')";
  heading.innerText = "This house really gives you the creeps 😱..";
  document.body.style.transition = "all 1000ms ease 180ms";
  textInput.value = "";
}
/** A function for loading the seventh scene in the story, used in the switch statement */
function loadScene7() {
  storyTeller.innerHTML =
    "You completely freeze and your heartbeats increases <br> until you wake up and realize it was a nightmare <br> <br> Type start game to start over <br> <br> Thanks for playing! ";
  document.body.style.backgroundImage = "url('./imgs/ghostlike-creature.JPG')";
  heading.innerText = "A ghostlike creature appears and approaches you 👻..";
  document.body.style.transition = "all 1000ms ease 180ms";
  textInput.value = "";
}
/** A function for loading the eighth scene in the story, used in the switch statement */
function loadScene8() {
  storyTeller.innerHTML =
    "You breathe a sigh of relief.. <br> <br> 1. set up a camp and rest <br> or <br> 2. look for civilization <br> or <br> 3. look for water";
  document.body.style.backgroundImage = "url('./imgs/desert2.JPG')";
  heading.innerText = "You safely got out of that creepy ghost town 😌..";
  document.body.style.transition = "all 1000ms ease 180ms";
  textInput.value = "";
}
/** A function for loading the ninth scene in the story, used in the switch statement */
function loadScene9() {
  storyTeller.innerHTML =
    "You're about to fall asleep as something approaches <br> your tent. You wake up and realize it was all a nightmare <br> <br> Type start game to start over <br> <br> Thanks for playing! ";
  document.body.style.backgroundImage = "url('./imgs/camp.JPG')";
  heading.innerText = "You set up your tent and rests ⛺..";
  document.body.style.transition = "all 1000ms ease 180ms";
  textInput.value = "";
}

/** This function serves as the start of the story, when the user types "start game" it triggers this function */
function startStory() {
  let inp = textInput.value;
  if (inp == "start game") {
    textInput.value = "";
    gameStarted = true;
    window.setTimeout(function () {
      storyTeller.innerHTML = "Let's begin.";
    }, 500);

    window.setTimeout(function () {
      storyTeller.innerHTML =
        "You are in the desert... <br> <br>  1. look around <br> or <br> 2. look for water";
      document.body.style.backgroundImage = "url('./imgs/desert1.JPG')";
      heading.innerText = "For some reason you ended up here, how come? 😧";
    }, 3000);
  }
  storyScenes();
}
/** This function represents the different scenes in the story. 
 * They are made with a conditional switch statement and load different scenes depending on the input the user types.
 */
function storyScenes() {
  let inp = textInput.value;
  switch (inp) {
    case "look around":
      loadScene1();
      break;
    case "look for water":
      loadScene2();
      break;
    case "approach the camel":
      loadScene3();
      break;
    case "hop on it anyway":
      loadScene4();
      break;
    case "look for civilization":
      loadScene5();
      break;
    case "investigate the noises":
      loadScene6();
      break;
    case "stay and face your fears":
      loadScene7();
      break;
    case "leave the ghost town":
      loadScene8();
      break;
    case "set up a camp and rest":
      loadScene9();
      break;
    default:
    //  storyTeller.innerHTML = "You haven't started the game yet.";
    // storyTeller.innerHTML = (`${inp}`);
  }
}
//   }

/** Here follows the if, else if and else statements for different user inputs throughout the story */
//  function storyScenes() {
// let inp = textInput.value;
// if (gameStarted) {
//   if (inp === "look around") {
//     loadScene1();
//   } else if (inp === "look for water") {
//     loadScene2();
//   } else if (inp === "approach the camel") {
//     loadScene3();
//   } else if (inp === "hop on it anyway") {
//     loadScene4();
//   } else if (inp === "look for civilization") {
//     loadScene5();
//   } else if (inp === "investigate the noises") {
//     loadScene6();
//   } else if (inp === "stay and face your fears") {
//     loadScene7();
//   } else if (inp === "leave the ghost town") {
//     loadScene8();
//   } else if (inp === "set up a camp and rest") {
//     loadScene9();
//   }
// } else {
//   nar.innerHTML = "You haven't started the game yet.";
// }
// }
