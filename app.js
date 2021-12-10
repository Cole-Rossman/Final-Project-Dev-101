// import functions
// set event listeners
import { score, generateThrow } from './game.js';
// grab DOM elements
const rockbutton = document.getElementById('rock');
const resultsEl = document.getElementById('results');

rockbutton.addEventListener('click', () => {
    const computer = generateThrow();
    const player = rockbutton.id;
    const results = score(player, computer);
    console.log(computer, 'computer');
    console.log(player, 'player');
    resultsEl.textContent = 'results:' + results;
});

const paperbutton = document.getElementById('paper');

paperbutton.addEventListener('click', () => {
    const computer = generateThrow();
    const player = paperbutton.id;
    const results = score(player, computer);
    console.log(computer, 'computer');
    console.log(player, 'player');
    resultsEl.textContent = 'results:' + results;
});

const scissorsbutton = document.getElementById('scissors');

scissorsbutton.addEventListener('click', () => {
    const computer = generateThrow();
    const player = scissorsbutton.id;
    const results = score(player, computer);
    console.log(computer, 'computer');
    console.log(player, 'player');
    resultsEl.textContent = 'results:' + results;
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

