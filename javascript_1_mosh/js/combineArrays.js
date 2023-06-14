const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
const sliced = combined.slice(2, 4);

console.log(combined);
console.log(sliced);

// spread operator

const firstArray = [1, 2, 3];
const sencondArray = [4, 5, 6];

const combinedSpread = [...firstArray, ...sencondArray];

console.log(combinedSpread);
