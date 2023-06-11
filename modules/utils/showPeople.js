const showPeople = (people) => {
	const newPeople = people
		.map((person) => {
			const { name, job } = person;
			return `<p>${name} <strong>${job}</strong></p>`;
		})
		.join('');
};

export default showPeople;
