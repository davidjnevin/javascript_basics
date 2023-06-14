// removing elements

const numbers = [1, 2, 3, 4];
const numbers2 = [1, 2, 3, 4];
const numbers3 = [1, 2, 3, 4];

// End
const last = numbers.pop();
console.log(last);
console.log(numbers);

// Beginning
const first = numbers2.shift();

console.log(first);
console.log(numbers2);

// Middle

const middle = numbers3.splice(1, 2); // start index, number to remove

console.log(middle);
console.log(numbers3);
