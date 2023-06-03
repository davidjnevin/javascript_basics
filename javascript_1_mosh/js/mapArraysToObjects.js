const numbers = [-1, -3, 2, 0, 4];

const filtered = numbers.filter(n => n > 0);

const listItems = filtered.map(n => '<li>' + n + '</li>');

const html = '<ul>' + listItems.join('') + '</ul>';

console.log(html);



const objects = filtered.map(n => {
	const obj = { id: n };
	return obj;
});
console.log(objects);


const objects2 = filtered.map(n => {
	return { id: n };
});

console.log(objects2);

// in order to avoid using the return, we instead surround
// the object with '(' to tell the parser , that it's an object,
// and not a code block.

const objects3 = filtered.map(n => ({ id: n }));

console.log(objects3);




// Chaining conventions

const items = numbers
	.filter(n => n > 0)
	.map(n => ({ id: n }));


console.log(items);


