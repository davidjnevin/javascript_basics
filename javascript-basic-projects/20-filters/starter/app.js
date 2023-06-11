let filteredProducts = [...products];

const productsContainer = document.querySelector('.products-container');
const searchInput = document.querySelector('.search-input');
const form = document.querySelector('.input-form');

const displayProducts = () => {
	if (filteredProducts.length === 0) {
		productsContainer.innerHTML = `<h3 class="filter-error">Sorry, no products matched your search</h3>`;
		return;
	}
	productsContainer.innerHTML = filteredProducts.map(({ id, title, image, price }) => {
		return `
				<!-- single product -->
				<article class="product" data-id="${id}">
					<img
						src="${image}"
						alt="${title}"
						class="product-img img"
					/>
					<footer>
				<h5 class="product-name">${title}</h5>
				<span class="product-price">$${price}</span>
					</footer>
				</article>
				<!-- end of single product -->
		`;
	}).join('');
};

displayProducts();

form.addEventListener('keyup', () => {
	const inputValue = searchInput.value;
	filteredProducts = products.filter((product) => {
		return product.title.toLowerCase().includes(inputValue);
	});
	displayProducts();
});

// Company filter buttons
const companiesDOM = document.querySelector('.companies');

const displayButtons = () => {
	const buttons = ['all', ...new Set(products.map((product) => product.company))];
	companiesDOM.innerHTML = buttons.map((company) => {
		return `<button class="company-btn" data-id="${company}">${company}</button>`;
	}).join('');
};

displayButtons();

companiesDOM.addEventListener('click', (e) => {
	const element = e.target;
	if (element.classList.contains('company-btn')) {
		const company = element.dataset.id;
		if (company === 'all') {
			filteredProducts = [...products];
		}
		else {
			filteredProducts = products.filter((product) => product.company === company);
		}
		searchInput.value = "";
		displayProducts();
	}
});
