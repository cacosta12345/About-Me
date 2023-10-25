'use strict';

let rightAnswers = 0;

let user = prompt('What is your name?');

let birthPlace = prompt('Chris was born in Arizona (Y/N)');

let normBirthPlace = birthPlace.toLowerCase();

if (normBirthPlace.startsWith("y")) {
  //console.log('nope');
  alert('Nope! Check my About Me for the answer!');
} else if (normBirthPlace.startsWith("n")){
  //console.log('yup');
  alert('Correct!, I was born in California!')
  rightAnswers++;
} else {
  //console.log('nah');
  alert('Please type yes or no');
}
console.log(rightAnswers);

let service = prompt('Chris served in the Marine Corps (Y/N)');

let normService = service.toLowerCase();

if (normService.startsWith("y")){
  //console.log('negative');
  alert('Negative, Chris is no crayon muncher. Check the About Me for the right answer!');
} else if (normService.startsWith("n")){
  //console.log('Correct!');
  alert('Roger Roger, I was in the Army');
  rightAnswers++;
} else {
  //console.log('no');
  alert('Please type yes or no');
}
console.log(rightAnswers);

let work = prompt('Chris worked in Washington as a Habitat Conservation worker (Y/N)');

let normWork = work.toLowerCase();

if (normWork.startsWith("y")){
  //console.log('correct');
  alert("That's right!");
  rightAnswers++;
} else if (normWork.startsWith("n")){
  //console.log('wrong');
  alert('WRONG!');
} else {
  //console.log('NO');
  alert('Please type yes or no');
}

let pet = prompt('Chris has a dog named Champ Y/N');

let normPet = pet.toLowerCase();

if (normPet.startsWith("y")){
  //console.log('correct');
  alert('That is correct! Champ is happy!');
  rightAnswers++;
} else if (normPet.startsWith("n")){
  //console.log('wrong');
  alert('That is wrong, Champ is sad. Thanks...');
} else {
  //console.log('NO');
  alert('Please type yes or no');
}
console.log(rightAnswers);

let home = prompt('Chris currently lives in California (Y/N)');

let normHome = home.toLowerCase();

if (normHome.startsWith("y")){
  //console.log('correct');
  alert("That's right!");
  rightAnswers++

} else if (normHome.startsWith("n")){
  //console.log('wrong');
  alert('WRONG!');
} else {
  //console.log('NO');
  alert('Please type yes or no');
}
console.log(rightAnswers);


alert(`Welcome to my site ${user}!`);

for (let i = 0; i < 5; i++) {
  let guess = prompt("How old am I?");
  guess = Number(guess);
  if (guess === 30){
    alert("Right!");
    rightAnswers++;
    break;
  }
  else if (guess !== 30 && i < 4){
    alert("Incorrect, please try again");
  }
  if (i === 3){
    alert("The correct answer is 30!");
    break;
  }
}
console.log(rightAnswers);

let possibleColors = ["green","blue", "red"];

let attempts = 6;

while (attempts > 0) {
  let guess = prompt("Guess one of my favorite colors!").toLowerCase();

  if (possibleColors.includes(guess)){
    alert(`Correct! ${guess} is an awesome color right?`);
    rightAnswers++;
    break;
  } else {
    attempts--;
    if(attempts > 0) {
      alert(`Wrong, you have ${attempts} remaining.`)
    } else {
      alert(`Sorry, you are out of attempts, here are the right answers: ${possibleColors}`);
    }
  }
}
console.log(rightAnswers);
alert(rightAnswers);

//ChatGPT helped me write this code!
//
