const circle = {
	radius: 1,
	draw() {
		console.log("draw");
	},
};

for (let key in circle) console.log(key, circle[key]);

for (let key of Object.keys(circle)) console.log(key, circle[key]);

for (let entry of Object.entries(circle)) console.log(entry);

if ("radius" in circle) console.log("yes");

// cloning using for loop

const another = {};
for (let key in circle) another[key] = circle[key];
console.log(another);

// cloning an object
const clone = Object.assign({}, circle);
console.log(clone);

// clone using spread operator
const anotherClone = { ...circle };
console.log(anotherClone);
