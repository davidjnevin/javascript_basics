// find largest number in an array

const numbers = [14, 2, 3, 4, 5];
// const numbers = [];
const maxNmber = getMax(numbers);
console.log(maxNmber);

function getMax(array) {
	// if (array.length === 0) return undefined;
	// return array.reduce((accumulator, current) => {
	// 	const maxValue = (current >= accumulator) ? current : accumulator;
	// 	return maxValue
	// }, 0);

	return array.reduce((a, b) => (a > b) ? a : b);
}

