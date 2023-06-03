
const numbers = [1, 2, 3, 4];
let searchElement = 3;
console.log(included(numbers, searchElement));

// alternative to numbers.includes(searchElement)

function included(array, seachElement) {
	for (let element of array) {
		if (element == seachElement)
			return true;
	}
	return false;
};
