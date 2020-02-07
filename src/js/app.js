/* eslint-disable no-plusplus */
import GameState from './GameState';

function runGoblin() {
  let currentPos = -1;
  while (currentPos === GameState.currentPosition || currentPos === -1) {
    currentPos = Math.round(Math.random() * 15);
  }
  const gamePad = document.getElementById('gamePad');
  const goblin = document.getElementById('goblin');
  const newPlace = gamePad.childNodes[currentPos];
  newPlace.appendChild(goblin);
  goblin.classList.remove('invisible');
  GameState.currentPosition = currentPos;
}

document.addEventListener('DOMContentLoaded', () => {
  const gamePad = document.getElementById('gamePad');
  let htmlVar = '';
  for (let y = 0; y < 16; y++) {
    htmlVar += '<div class="myCell"></div>';
  }
  gamePad.innerHTML = htmlVar;
  GameState.currentPosition = -1;
  setInterval(() => { runGoblin(); }, 1000);
  // eslint-disable-next-line no-console
  console.log('it works!');
});
