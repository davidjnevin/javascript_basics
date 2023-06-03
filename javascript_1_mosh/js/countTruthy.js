function countTruthy(array) {
	let count = 0;
	for (let element of array) 
      if (element) count ++;
	return count;
}

const array = ["string", "1", 0, true, NaN, "", false];
console.log(countTruthy(array));
