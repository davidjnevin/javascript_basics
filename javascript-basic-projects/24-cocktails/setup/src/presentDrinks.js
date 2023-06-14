import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";

const showDrinks = async (URL) => {
  // fetch drinks
  const data = await fetchDrinks(URL);
  // display drinks
  const section = await displayDrinks(data);
};

export default showDrinks;
