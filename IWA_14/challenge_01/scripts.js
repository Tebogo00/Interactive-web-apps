const firstName = 'John';
const age = 35;
const hobby = 'Coding';

const logTwice = (parameter) => {//added a 'parameter' to pass the message from 'printHobby' fuction to 'logTwice' fuction
  console.log(parameter);
  console.log(parameter);
}

function printHobby () {//changed hobby since it is assigned as a variable to 'printHobby' to make it a different fuction name 
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`);
}

printHobby()
 