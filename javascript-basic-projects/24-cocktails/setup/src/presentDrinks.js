import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";

const showDrinks = async (URL) => {
	// fetch drinks
	const data = await fetchDrinks(URL);
	// display drinks
	const section = await displayDrinks(data);
	if (section) {
		setDrink(section);
		// const title = section.querySelector(".title");
		// title.textContent = "cocktails";
	}
};

export default showDrinks;
