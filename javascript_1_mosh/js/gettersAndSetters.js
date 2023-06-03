// Getters and Setters

const person = {
	firstName: 'David',
	lastName: 'Nevin',
	get fullName() {
		return `${person.firstName} ${person.lastName}`
	},
	set fullName(value) {
		const parts = value.split(' ');
		this.firstName = parts[0];
		this.lastName = parts[1];
	}
};

person.fullName = 'Peter O\'Brien';

console.log(person);
