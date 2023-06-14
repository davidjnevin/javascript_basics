const numbers = [-1, -3, 2, 0];

// const allPositive = numbers.every(function(value) {
// 	return value >= 0;
// });

const allPositive = numbers.every((value) => value >= 0);
const somePositive = numbers.some((value) => value >= 0);

console.log(allPositive);
console.log(somePositive);
console.log(numbers);
