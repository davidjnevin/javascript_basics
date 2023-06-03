const numbers = [1, 3, 2, 0];

numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);


const courses = [
	{ id: 1, name: 'Gamma' },
	{ id: 2, name: 'beta' },
	{ id: 3, name: 'Alpha' },
	{ id: 3, name: 'Delta' },
];

courses.sort(function(a, b) {
	const nameA = a.name.toUpperCase();
	const nameB = b.name.toUpperCase();
	console.log(courses);
	if (nameA < nameB) return -1;
	if (nameA > nameB) return 1;
	return 0
});

console.log(courses)
