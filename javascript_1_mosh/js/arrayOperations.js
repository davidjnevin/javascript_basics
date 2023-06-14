const numbers = [3, 4];

// end
numbers.push(5, 6);

console.log(numbers);

// beginning
numbers.unshift(1, 2);

console.log(numbers);

// middle
numbers.splice(2, 0, "a", "b");

console.log(numbers);

// Finding Elements

const numberArray = [1, 2, 3, 4];

// let output = numberArray.indexOf('a') // -1
let output = numberArray.indexOf(1);

console.log(output);
