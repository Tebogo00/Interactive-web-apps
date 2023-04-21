// scripts.js
//create an object with nested arrays containing some data.
const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below
//extract each of the three arrays into separate variables for easier access
const first = data.lists[0][1]
const second = data.lists[1][1]
const third = data.lists[2][1]
//create an empty array to store the result of the algorith
const result = []

//define a fuction that extracts and returns the largest number from the end of one the three arrays
const extractBiggest = () => {
    //find the largest element of each array, or infinity if the array is empty
    const lastOfFirst = first[first.length - 1] || -Infinity
    const lastOfSecond = second[second.length - 1] || -Infinity
    const lastOfThird = third[third.length - 1] || -Infinity

    //compare the three last elements and return the largest one
	if (lastOfFirst >= lastOfSecond && lastOfFirst >= lastOfThird) {
		return first.pop()
	}

	if (lastOfSecond >= lastOfFirst && lastOfSecond >= lastOfThird) {
		return second.pop()
	}
	
	return third.pop()
}


// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)