const date = 2050;
const status = 'student';
let count = 0;

if (date === 2050) {
	console.log('January', 'New Year’s Day');
	console.log('March', 'Human Rights Day');
	let month = 'April';
	console.log(month, 'Family Day');
	console.log(month, 'Freedom Day');
	count += 4;

	if (status === 'student') {
	  console.log('June', 'Youth Day');
	  count += 1;
  }

	console.log('August', 'Women’s Day');
	console.log('September', 'Heritage Day');
	month = 'December';
	console.log(month, 'Day of Reconciliation');
	count += 3;

	if (status === "parent") {
	  console.log(month, 'Christmas Day');
	  count += 1;
  }

	console.log(month, 'Day of Goodwill');
	count += 1;
}

console.log('Your status is:', status);
console.log('The year is:', date);
console.log('The total holidays is:', count);

//replaced const with let on line 3 so that 0 must not be constant, it changes
//edited let count for additonal assignment
//added semi-colons in my all my code
//added "===" so that it can export when you console