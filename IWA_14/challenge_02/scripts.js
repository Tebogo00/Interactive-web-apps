//fuctions Declaration
const add = (a, b) => a + b //fuction that takes and add two parameters 'a' and 'b'
const multiply = (a, b) => a * b //fuction that takes and multiply two parameters 'a' and 'b'

function internal() {
	const added = this.add(this.internal.a, this.internal.b)//add the values of 'a' and 'b' stored in 'internal' object using the 'add' fuction and assinged it to 'added'.
	const multiply = this.multiply(added , this.internal.c)//multiply 'added' and the value of 'c' stored in 'internal' object using the 'multiply' fuction and assign it to 'multiply'.
	console.log(multiply)//change 'return this' to console.log so it print results of multiply
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()