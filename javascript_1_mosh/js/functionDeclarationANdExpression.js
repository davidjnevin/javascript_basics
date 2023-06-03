// Function Decalation

function walk() {
	console.log('walk');
}

walk();

// Anonymous Function Expression
let run = function() {
	console.log('run');
};

run();
let move = run;

move();
