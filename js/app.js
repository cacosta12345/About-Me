'use strict';

let rightAnswers = 0;


function greeting(){
  let user = prompt('What is your name?');
  alert(`Welcome to my site ${user}!`);
}

greeting();


function checkYesNo(question, correctAnswer){
  let userAnswer = prompt(question);
  let normalilzedAnswer = userAnswer.toLowerCase();

  if (normalilzedAnswer.startsWith('y') && correctAnswer === 'yes'){
    rightAnswers++;
    return true;
  } else if (normalilzedAnswer.startsWith('n')&& correctAnswer === 'no'){
    rightAnswers++;
    return true;
  } else {
    alert('Sorry, that was incorrect');
    return false;
  }
}

if (checkYesNo('Was Chris born in Arizona', 'no')){
  alert('Correct! I was born in California!');
}

if (checkYesNo('Chris served in the Marine Corps','no')){
  alert('Correct!');
}

if (checkYesNo('Chris worked in Washington as a Habitat Conservation worker','yes')){
  alert('Yea! Correct.');
}

if (checkYesNo('Chris has a dog named Champ','yes')){
  alert('Correct! Champ is a happy pup.');
}

if (checkYesNo('Chris currently lives in California','yes')){
  alert('Correct');
}

function checkAge(){
  for (let i = 0; i < 5; i++) {
    let guess = prompt('How old am I?');
    guess = Number(guess);
    if (guess === 30){
      alert('Right!');
      rightAnswers++;
      break;
    }
    else if (guess < 30){
      alert('Too low, try again');
    }
    else if (guess > 30){
      alert('Too high, try again');
    }
    if (i === 3){
      alert('The correct answer is 30!');
      break;
    }
  }
}

checkAge();

function checkColor(){
  let possibleColors = ['green','blue', 'red'];

  let attempts = 6;

  while (attempts > 0) {
    let guess = prompt('Guess one of my favorite colors!').toLowerCase();

    if (possibleColors.includes(guess)){
      alert(`Correct! ${guess} is an awesome color right?`);
      rightAnswers++;
      break;
    } else {
      attempts--;
      if(attempts > 0) {
        alert(`Wrong, you have ${attempts} remaining.`);
      } else {
        alert(`Sorry, you are out of attempts, here are the right answers: ${possibleColors}`);
      }
    }
  }
}
checkColor();



alert(`You got ${rightAnswers} correct!`);




//ChatGPT helped me write the possible colors code!
//
