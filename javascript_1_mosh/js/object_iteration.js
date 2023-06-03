
// Object - Address

function address(street, city, zipcode) {
	return {
		street: street,
		city: city,
		zipcode: zipcode
	};
}



const myAddress = address('cuba', 'valencia', 46006);

for (let property in myAddress) console.log(property, myAddress[property]);



let currentAddress = {
	street: 'palma',
	city: 'Madrid',
	zipcode: '28015'
};

function showAddress(address) {
	for (let key in address)
		console.log(key, address[key]);
}

showAddress(currentAddress)
