import presentDrinks from "./src/presentDrinks.js";
import fetchDrinks from "./src/fetchDrinks.js";
import "./src/searchForm.js";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=m";
const SingleURL =
	"https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007";
const data = fetchDrinks(URL);
window.addEventListener("DOMContentLoaded", () => {
	presentDrinks(URL);
});
