const firstName = 'John';
const age = 35;
const hobby = 'Coding';

const logTwice = (parameter) => {
  console.log(parameter);
  console.log(parameter);
}

function printHobby () {
  logTwice(`Hello, ${name} (${age}). I love ${hobby}!`);
}

printHobby()
 