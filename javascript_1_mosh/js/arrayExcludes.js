// remove an arrray from another array

const numbers = [1, 2, 3, 4];
let excludeElement = [1, 3];
console.log(excluded(numbers, excludeElement));

// alternative to numbers.includes(searchElement)

function excluded(array, excludedArray) {
  const output = [];
  for (let element of array) {
    if (!excludedArray.includes(element)) {
      output.push(element);
    }
  }
  return output;
}
