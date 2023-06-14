// Math.random() returns a random number between 0 and 1

var randomNumber = Math.random(0, 1);
console.log(randomNumber);

const message = "Hello World";
console.log(typeof message);

const another = new String("Hello World");
console.log(typeof another);

console.log(message.indexOf("l"));
console.log(message.includes("rld"));

let name = "David";

const yetAnother = `hi ${name},
	How are you today?

	Regards,
David`;

console.log(yetAnother);
