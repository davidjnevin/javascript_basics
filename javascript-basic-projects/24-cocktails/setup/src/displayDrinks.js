import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displayDrinks = (drinks) => {
  hideLoading();
	const section = get(".section-center");
  const title = get(".title");
  if (!drinks) {
    title.textContent = "sorry, no drinks matched your search";
    section.innerHTML = null;
    return;
  }

  const newDrinks = drinks
    .map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
      return `<!-- single cocktail -->
			<a href = "./drink.html?id=${id}" >
			<article class="cocktail" data-id="${id}">
			<img src="${image}" alt="${name}" />
			<h3>${name}</h3></a>
			</article>`;
    })
    .join("");
	hideLoading();
	title.textContent = '';
  section.innerHTML = newDrinks;
  return section;
};

export default displayDrinks;
