// Setting the value of this


function playVideo() {
	console.log(this);
}

// playVideo(); // Retruns window object
playVideo.call({ name: 'David' }); // assigns this to the object
playVideo.apply({ name: 'Peter' });// assigns this to the object

playVideo.bind({ name: 'Marta' })(); // permanently assigns this to the object

// Arrow function inherits the value of this form the containing function

