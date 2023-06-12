export default function(selection) {
	const element = document.querySelector(selection);
	if (element) {
		return element;
	}
	else {
		throw Error('You did not select an element. Please check if that element exists.');
	}
}

