

const courses = [
	{ id: 1, name: 'a' },
	{ id: 2, name: 'b' },
];



console.log(courses.find(function(course) {
	return course.name == 'a';
}));

console.log(courses.find(course => course.name == 'a'));

console.log(courses.findIndex(function(course) {
	return course.name == 'b';
}));

console.log(courses.findIndex(course => course.name == 'b'));
