const numbers = [-1, -3, 2, 4];

let sum = 0;
for (let n of numbers)
	sum += n;

console.log(sum);


reducedSum = numbers.reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
}, 0);  // 0 = initial value

reducedMultiply = numbers.reduce((accumulator, currentValue) => {
	return accumulator * currentValue;
}, 1); // inital value = 1

console.log(reducedSum);
console.log(reducedMultiply);


