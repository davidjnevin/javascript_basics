
// Object - Address

const address1 = new CreateAddress('cuba', 'Valencia', '46006');
const address2 = new CreateAddress('cuba', 'Valencia', '46006');


function CreateAddress(street, city, zipcode) {
	this.street = street;
	this.city = city;
	this.zipcode = zipcode;
}

function areEqual(address1, address2) {
	for (let key in address1)
		if (address1[key] !== address2[key])
			return false;
	return true
}

function areSame(address1, address2) {
	return address1 === address2
}


console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
