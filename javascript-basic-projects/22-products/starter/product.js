const productDOM = document.querySelector(".product");
const url = "https://course-api.com/javascript-store-single-product";

const fetchProduct = async () => {
  productDOM.innerHTML = '<div class="product-loading"></div>';

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  console.log(id);
  const fullUrl = `${url}?id=${id}`;

  try {
    const resp = await fetch(fullUrl);
    const data = await resp.json();
    if (!resp.status === 200) {
      throw new Error();
    }
    return data;
  } catch (error) {
    productDOM.innerHTML = '<p class="error">There was an error</p>';
  }
};

const displayProduct = (product) => {
  // id, name, price, img, description
  const { name: title, price, company, description, colors } = product.fields;
  const { url: img } = product.fields.image[0];
  const formatedPrice = price / 100;

  document.title = title.toUpperCase();

  // colors
  const colorlist = colors
    .map((color) => {
      return `<span class="product-color" style="background: ${color}"></span>`;
    })
    .join("");
  console.log(colorlist);

  const productInfo = `<div class="product-wrapper">
<img src="${img}" class="img" alt="${title}"/>
				<div class="product-info">
<h3>${title}</h3>
<h5>${company}</h5>
<span>$${formatedPrice}</span>
					<div class="colors">
${colorlist}
					</div>
					<p>
${description}
					</p>
					<button class="btn">add to cart</button>
				</div>
			</div>
			`;
  productDOM.innerHTML = `<div class ="products-container">
		${productInfo}
		</div>`;
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};

start();
