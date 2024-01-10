/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//declare game variable and selects the reset button from the DOM
let game;
const startButton = document.querySelector('#btn__reset');

//Listens for a click event on the start button
startButton.addEventListener('click', (event) => {
  game = new Game();
  game.startGame();
})

const keyboardButton = document.getElementById('qwerty');

//Check if the click is on an actual key and not an empty space on the keyboard
keyboardButton.addEventListener('click', (key) => {
  const selectedKey = key.target;
  if (selectedKey.className === 'key') {
    //Checks the selected letter and updates the game 
    game.handleInteraction(key.target);
  }
})