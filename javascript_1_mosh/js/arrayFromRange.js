const numbers = arrayFromRange(-5, 5);

function arrayFromRange(min, max) {
  const array = [];
  while (min <= max) {
    array.push(min);
    min++;
  }
  return array;
}

console.log(numbers);
