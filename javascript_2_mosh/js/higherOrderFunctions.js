
// Higher Order Funtions in Javascripts
// Functions that operate on/with other functions. They can:
// 1. Accept other functions as arguments
// 2. Return a function
// 3. Both
// Example: forEach, map, filter, reduce, find, sort, etc.
// Example: setTimeout, setInterval
// Example: addEventListener
// Example: Function constructor
// Example: bind, call, apply
// Example: Promise, Async/Await
// Example: Generators

// forEach
// forEach is a method on the Array prototype

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(function(num) {
	console.log(num * 2);
});

// setTimeout
// setTimeout is a method on the Window object
// setTimeout is asynchronous
// setTimeout is a higher order function

setTimeout(function() {
	console.log('Hello from the timeout!');
}, 3000);


// filter
// filter is a method on the Array prototype
// filter returns a new array
// filter is a higher order function
// filter accepts a callback function
// filter iterates through an array
// filter invokes the callback function for each iteration
// filter passes the current value, current index, and the entire array to the callback function
// filter expects the callback to return a boolean value
// filter returns a new array with all the values that returned true in the callback function
// filter does not mutate the original array
// filter skips empty indices in sparse arrays
// filter does not skip undefined elements in sparse arrays


const odds = numbers.filter(function(num) {
	return num % 2 === 1;
});

console.log(odds);

const evens = numbers.filter(function(num) {
	return num % 2 === 0;
});

console.log(evens);

// addEventListener is a higher order function
// addEventListener is a method on the Window object
// addEventListener is asynchronous
// addEventListener accepts a callback function
// addEventListener invokes the callback function when the event occurs
// addEventListener passes an event object to the callback function
// addEventListener is used to listen for events on a DOM node

const btn = document.querySelector('#clicker');

btn.addEventListener('click', function(e) {
	console.log(e);
});



