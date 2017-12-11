'use strict'

var stuff = ['pencil', 'cat', 'popcorn', 'book'];
var answer = prompt('what is one of my fav things?');
var flag;

  for (var i = 0; i < stuff.length; i++) {
    console.log('each item at each interation:', stuff[i]);

    if (answer === stuff[i]) {
      alert('u right');
      flag = true;
      break;
    }
  }

  if (!flag) [
    alert('nope you are wrong');

var number;
var counter = 1;

while (number !== 20) {
  number = parseInt(prompt('what is your fav number?'));

  if (number < 20) {
    alert('sorry, you guessed too low');
    counter++;
  } else  if (number > 20) {
    alert('sorry, you guessed too high');
    counter++;
  } else if (isNaN(number) || number === null) {
    alert('please enter a number');
   }
  }

  console.log('counter:', counter);
