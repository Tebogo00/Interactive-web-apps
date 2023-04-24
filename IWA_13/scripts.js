//variable declarations
let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below

//'logCalc' fuction
const logCalc = () => { 
    const isString = typeof calculated === 'string';//use === to check if 'calculated' is a string that can be parsed as a number
    const calculatedAsNumber = isString ? parseInt(calculated) : calculated;// change parseNumber to parseInt to convert 'calculated' to a number if it's a string, otherwiae leave it as it is.
    calculated = calculatedAsNumber + 1;//Increment 'calculated' by 1
}

//'calcUser' fuction
const calcUser = () => {
  logCalc ();//Added brackets and semicolon to call 'logCalc' function to increment 'calculated'.
  if (calculated > 2) user = 'John';//If 'calculated' is greater than 2, set 'user' to 'John' and 'state' to 'requesting'.
  if (calculated > 2) state = 'requesting';
  if (calculated > 3) state = 'idle';//If 'calculated' is greater than 3, set 'state' to 'idle'
}

const checkUser = () => {
	if (user && state === 'requesting') {//condition that requires message ti be printed if 'state' is equal to 'requesting'.
		console.log(`User: ${user} (${calculated})`);
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()