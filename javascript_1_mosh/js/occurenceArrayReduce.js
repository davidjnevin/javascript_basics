// count no of occurences in an array

const numbers = [2, 2, 2, 1];
const count = countOccurences(numbers, 2);
console.log(count);

function countOccurences(array, searchElement) {

	// let count = 0;
	// for (let element of array) {
	// 	if (element === searchElement){
	// 		count++;
	// 	}
	// }
	// return count;
	return array.reduce((accumulator, current) => {
		const occurence = (current === searchElement) ? 1 : 0;
		// console.log(accumulator, current, searchElement);
		return accumulator + occurence;
	}, 0);
}

