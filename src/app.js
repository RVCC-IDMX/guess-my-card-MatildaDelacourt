/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */

/* app.js */

/*
  DO NOT FORGET
Edit random.js so getRandomInt(max)
will return a random number from
0 to the value of max (inclusively)
*/
import getRandomInt from './random';
import './style.css';

const farewell = document.querySelector('.farewell');
const suits = ['hearts', 'spades', 'diamonds', 'clubs'];

while (confirm('Would you like to play the game?')) {
  let guess;
  const num = getRandomInt(0, 3);
  let text = prompt(
    'What suit is my card - hearts, spades, diamonds or clubs?'
  );
  text = text.toLowerCase();

  if (text === 'hearts') {
    guess = 0;
  }
  if (text === 'spades') {
    guess = 1;
  }
  if (text === 'diamonds') {
    guess = 2;
  }
  if (text === 'clubs') {
    guess = 3;
  }

  if (guess === num) {
    alert(`YAS, You won! The answer was ${suits[num]}`);
  } else {
    alert(`Sorry, the answer was ${suits[num]}`);
  }
  // Put your code in this while loop
  // Remember to use prompt and alert
}

farewell.innerHTML = '<h1>Thanks for playing!<h1>';
