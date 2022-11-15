window.addEventListener('DOMContentLoaded', clearInput)

function clearInput(){
  let getValue= document.getElementById("user_inp");
    if (getValue.value !="") {
        getValue.value = "";
    }
}