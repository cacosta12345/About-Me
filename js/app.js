'use strict';

let user = prompt('What is your name?');

let birthPlace = prompt('Yes or No: Chris was born in Arizona');

let normBirthPlace = birthPlace.toLowerCase();

if (normBirthPlace=== 'yes' || normBirthPlace === 'y') {
  //console.log('nope');
  alert('Nope! Check my About Me for the answer!');
} else if (normBirthPlace=== 'no' || normBirthPlace=== 'n'){
  //console.log('yup');
  alert('Correct!, I was born in California!');
} else {
  //console.log('nah');
  alert('Please type yes or no');
}

let service = prompt('Yes or No: Chris served in the Marine Corps');

let normService = service.toLowerCase();

if (normService === 'yes' || normService === 'y'){
  //console.log('negative');
  alert('Negative, Chris is no crayon muncher. Check the About Me for the right answer!');
} else if (normService === 'no' || normService === 'n'){
  //console.log('Correct!');
  alert('Roger Roger, I was in the Army');
} else {
  //console.log('no');
  alert('Please type yes or no');
}

let work = prompt('Yes or No: Chris worked in Washington as a Habitat Conservation worker');

let normWork = work.toLowerCase();

if (normWork=== 'yes' || normWork === 'y'){
  //console.log('correct');
  alert("That's right!");
} else if (normWork=== 'no' || normWork=== 'n'){
  //console.log('wrong');
  alert('WRONG!');
} else {
  //console.log('NO');
  alert('Please type yes or no');
}

let pet = prompt('Yes or No: Chris has a dog named Champ');

let normPet = pet.toLowerCase();

if (normPet === 'yes' || normPet === 'y'){
  //console.log('correct');
  alert('That is correct! Champ is happy!');
} else if (normPet === 'no' || normPet === 'n'){
  //console.log('wrong');
  alert('That is wrong, Champ is sad. Thanks...');
} else {
  //console.log('NO');
  alert('Please type yes or no');
}

let home = prompt('Yes or NO: Chris currently lives in California');

let normHome = home.toLowerCase();

if (normHome=== 'yes' || normHome === 'y'){
  //console.log('correct');
  alert("That's right!");
} else if (normHome=== 'no' || normHome=== 'n'){
  //console.log('wrong');
  alert('WRONG!');
} else {
  //console.log('NO');
  alert('Please type yes or no');
}

alert(`Welcome to my site ${user}!`);



